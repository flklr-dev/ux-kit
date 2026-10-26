/* Progressive enhancements; the library and setup instructions remain readable without JS. */
'use strict';
const $ = (selector) => document.querySelector(selector);
const all = (selector) => [...document.querySelectorAll(selector)];
let statusTimer;
all('[data-copy]').forEach(button => button.addEventListener('click', async () => {
  const target = document.getElementById(button.dataset.copy);
  const status = $('#copy-status');
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(target.textContent.trim());
    if (status) status.textContent = 'Copied. Paste it in your terminal or agent chat.';
  } catch {
    const range = document.createRange(); range.selectNodeContents(target);
    const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range);
    if (status) status.textContent = 'Couldn’t copy automatically. Text selected; use your device’s Copy command.';
  }
  clearTimeout(statusTimer); statusTimer = setTimeout(() => { if (status) status.textContent = ''; }, 6500);
}));

const agents = {
  codex: {flag:'codex', invoke:'$ux-kit', path:'.agents/skills/ux-kit/'},
  claude: {flag:'claude-code', invoke:'/ux-kit', path:'.claude/skills/ux-kit/'}
};
all('[data-agent]').forEach(button => button.addEventListener('click', () => {
  const agent = agents[button.dataset.agent];
  all('[data-agent]').forEach(other => other.setAttribute('aria-pressed', String(other === button)));
  $('#install-command').textContent = `npx skills@1.7.4 add flklr-dev/ux-kit --skill ux-kit -a ${agent.flag} --copy`;
  $('#invoke-command').textContent = `${agent.invoke} Audit this feature. Preserve what works and give concrete fixes and checks. Do not edit files.`;
  $('#install-destination').textContent = `Installs to ${agent.path} in this project.`;
}));

const workflows = {
  design: ['Use UX Kit to design this feature. Map the task flow, important states and tradeoffs. Preserve the product’s existing constraints and propose checks before implementation.', 'A proposed journey with important states, tradeoffs and validation. Design advice alone does not authorize product edits.'],
  audit: ['Use UX Kit to audit this feature. Identify the most important usability problems, preserve what works, and give concrete recommendations and checks. Do not edit files.', 'A few prioritized findings, each tied to evidence, a user consequence, a concrete fix and a way to check it.'],
  implement: ['Use UX Kit to implement the agreed usability fixes. Keep the existing stack, components and useful behavior. Stay within the authorized scope and verify the affected states.', 'Scoped implementation with checks for success, error and recovery, plus an honest account of what remains unverified.'],
  validate: ['Use UX Kit to validate this fix against the original usability problem and acceptance checks. Report observed results and remaining gaps. Do not make additional changes.', 'A comparison of the original problem with the observed result. Evidence and unknowns stay separate.']
};
all('[data-mode]').forEach(button => button.addEventListener('click', () => {
  all('[data-mode]').forEach(other => other.setAttribute('aria-pressed', String(other === button)));
  const [prompt, result] = workflows[button.dataset.mode];
  $('#workflow-prompt').textContent = prompt; $('#workflow-result').textContent = result;
}));

const filters = $('#library-filters');
if (filters) {
  filters.hidden = false;
  const search = $('#principle-search'), topic = $('#topic-filter'), rows = all('.principle');
  let filterTimer;
  const normalize = value => value.toLocaleLowerCase().normalize('NFKD').replace(/[’‘]/g,"'").replace(/[–—-]/g,' ');
  const apply = (updateURL = true) => {
    const terms = normalize(search.value.trim()).split(/\s+/).filter(Boolean);
    let count = 0;
    rows.forEach(row => {
      const content = normalize(row.dataset.search);
      const matches = (!topic.value || row.dataset.topic === topic.value) && terms.every(term => content.includes(term));
      row.hidden = !matches; if (matches) count++;
    });
    $('#library-count').textContent = `${count} ${count === 1 ? 'entry' : 'entries'}${search.value.trim() || topic.value ? ` matching your filters, of ${rows.length}` : ''}. Open an entry to explore its guidance.`;
    $('#library-empty').hidden = count > 0;
    if (updateURL) {
      const url = new URL(location.href);
      search.value.trim() ? url.searchParams.set('q', search.value.trim()) : url.searchParams.delete('q');
      topic.value ? url.searchParams.set('topic', topic.value) : url.searchParams.delete('topic');
      history.replaceState(null, '', url);
    }
  };
  const restore = () => {
    const params = new URL(location.href).searchParams;
    search.value = params.get('q') || '';
    topic.value = [...topic.options].some(o => o.value === params.get('topic')) ? params.get('topic') : '';
    apply(false);
  };
  search.addEventListener('input', () => { clearTimeout(filterTimer); filterTimer = setTimeout(apply, 120); });
  topic.addEventListener('change', () => { clearTimeout(filterTimer); apply(); });
  filters.addEventListener('submit', event => { event.preventDefault(); clearTimeout(filterTimer); apply(); });
  filters.addEventListener('reset', event => { event.preventDefault(); clearTimeout(filterTimer); search.value=''; topic.value=''; apply(); search.focus(); });
  window.addEventListener('popstate', restore);
  restore();
  if (location.hash) {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target?.classList.contains('principle')) { search.value=''; topic.value=''; apply(); target.open=true; target.scrollIntoView(); }
  }
}

if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(items => items.forEach(item => {
    if (item.isIntersecting) { item.target.classList.add('reveal-in'); observer.unobserve(item.target); }
  }), {threshold:.12});
  all('.section-intro, .workflow-layout, .library-heading, .principle-preview, .research-note, .install-layout, .faq-section, .footer-top').forEach(el => observer.observe(el));
}

const fixedHeader = $('.header-shell');
if (fixedHeader) new ResizeObserver(()=>document.documentElement.style.setProperty('--header-height',`${fixedHeader.getBoundingClientRect().height}px`)).observe(fixedHeader);
