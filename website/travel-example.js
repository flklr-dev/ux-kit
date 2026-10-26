/* A local booking demonstration. Never makes a reservation or processes payment. */
'use strict';
(() => {
  const demo = document.querySelector('#trip-demo');
  if (!demo) return;
  const find = selector => demo.querySelector(selector);
  const buttons = [...demo.querySelectorAll('[data-stage]')];
  const stages = ['before', 'audit', 'after'];
  const insights = {
    before: {title:'Looks inviting.\nLeaves you guessing.', summary:'Two people want a Kyoto walk. The screen looks ready, but the decision is missing a few essentials.', items:[['Missing the total','“From $84” is not the total for two adults.'],['Which time, exactly?','A time is selected, but the timezone is missing.'],['What happens next?','“Continue” doesn’t say whether you’ll review or commit.']]},
    audit: {title:'Three small fixes.\nA better decision.', summary:'UX Kit keeps the trip’s identity and focuses on the information people need before committing.', items:[['Show the complete cost','Surface both adult tickets and the booking fee together.'],['Keep the time in context','Name the timezone and carry the slot into review.'],['Make commitment explicit','Say “Review booking,” then show the final details.']]},
    after: {title:'Same trip.\nClearer decision.', summary:'The experience keeps its character. The booking now answers the questions that matter. Try a different time.', items:[['The real total','$180 for two adults, including the booking fee.'],['A time you can trust','The selected slot stays with you through review.'],['A clear next step','Review the details before confirming anything.']]}
  };
  let stage = 'before';
  let bookingState = 'edit';
  let timer;
  let onScreen = false;
  let hovering = false;
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let playing = !motion.matches;
  const playback = find('#tour-playback');
  const updatePlayback = () => {
    find('#playback-label').textContent = playing ? 'Pause' : 'Play';
    find('#playback-icon').setAttribute('d', playing ? 'M9 5v14M15 5v14' : 'm8 5 11 7-11 7V5Z');
    playback.setAttribute('aria-label', playing ? 'Pause automatic tour' : 'Play automatic tour');
    demo.dataset.playing = String(playing);
  };
  const schedule = () => {
    clearTimeout(timer);
    if (playing && onScreen && !hovering && !document.hidden) {
      timer = setTimeout(() => {setStage(stages[(stages.indexOf(stage) + 1) % stages.length]);schedule();}, 20000);
    }
  };
  const pause = () => {playing = false;updatePlayback();schedule();};
  const renderBooking = () => {
    find('#booking-original').hidden = stage === 'after';
    find('#trip-form').hidden = stage !== 'after' || bookingState !== 'edit';
    find('#trip-confirmation').hidden = stage !== 'after' || bookingState !== 'review';
    find('#trip-success').hidden = stage !== 'after' || bookingState !== 'success';
  };
  function setStage(key) {
    stage = key;
    demo.dataset.stage = key;
    demo.dataset.animate = 'false';
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.stage === key)));
    const data = insights[key];
    find('#trip-insight-title').textContent = data.title;
    find('#trip-insight-summary').textContent = data.summary;
    [...demo.querySelectorAll('#trip-findings li')].forEach((item,index) => {
      item.querySelector('strong').textContent = data.items[index][0];
      item.querySelector('p').textContent = data.items[index][1];
    });
    renderBooking();
    requestAnimationFrame(() => {demo.dataset.animate = 'true';});
  }
  find('.trip-toolbar').hidden = false;
  find('.booking-submit').disabled = false;
  buttons.forEach(button => button.addEventListener('click', () => {pause();setStage(button.dataset.stage);}));
  playback.addEventListener('click', () => {playing = !playing;updatePlayback();schedule();});
  demo.addEventListener('focusin', event => {if (!playback.contains(event.target)) pause();});
  demo.addEventListener('pointerdown', event => {if (!playback.contains(event.target)) pause();});
  find('.trip-exhibit').addEventListener('pointerenter', event => {if (event.pointerType === 'mouse') {hovering = true;schedule();}});
  find('.trip-exhibit').addEventListener('pointerleave', () => {hovering = false;schedule();});
  document.addEventListener('visibilitychange', schedule);
  motion.addEventListener('change', () => {if (motion.matches) pause();});
  new IntersectionObserver(entries => {onScreen = entries[0].isIntersecting;schedule();}, {threshold:0.1}).observe(demo);
  const selectedTime = () => find('input[name="trip-time"]:checked').value;
  find('#trip-form').addEventListener('change', () => {
    demo.querySelectorAll('[data-time]').forEach(slot => slot.classList.toggle('chosen', slot.dataset.time === selectedTime()));
  });
  find('#trip-form').addEventListener('submit', event => {
    event.preventDefault();pause();if (bookingState !== 'edit') return;
    find('#review-time').textContent = `${selectedTime()} JST`;
    find('#review-deadline').textContent = `13 April, ${selectedTime()} JST`;
    bookingState = 'review';renderBooking();find('#trip-confirmation').focus();
  });
  find('#booking-edit').addEventListener('click', () => {bookingState = 'edit';renderBooking();find('input[name="trip-time"]:checked').focus();});
  find('#demo-confirm').addEventListener('click', () => {
    if (bookingState !== 'review') return;
    bookingState = 'success';
    find('#trip-success-copy').textContent = `14 April 2027 · ${selectedTime()} JST. Two adults, $180 USD including all fees.`;
    renderBooking();find('#trip-success').focus();
  });
  find('#trip-reset').addEventListener('click', () => {bookingState = 'edit';renderBooking();find('input[name="trip-time"]:checked').focus();});
  setStage(stage);updatePlayback();
})();
