import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = path.resolve(fileURLToPath(new URL('../', import.meta.url)));
export function createDemoServer() {
  return http.createServer(async (req, res) => {
    try {
      const url = new URL(req.url, 'http://127.0.0.1');
      let name = decodeURIComponent(url.pathname);
      if (name === '/') name = '/interactive-basketbay/index.html';
      const file = path.resolve(root, `.${name}`);
      if (!file.startsWith(root + path.sep) && file !== root) throw new Error('Outside examples');
      const allowed = file.startsWith(path.join(root, 'interactive-basketbay') + path.sep) || file === path.join(root, 'manual-audit-screens', '2026-10-24', '01-mobile-grocery-checkout.png');
      if (!allowed) throw new Error('Outside demo');
      const data = await readFile(file);
      const type = { '.html': 'text/html; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.png': 'image/png' }[path.extname(file)] ?? 'text/plain';
      res.writeHead(200, { 'Content-Type': type, 'Cache-Control': 'no-store' }); res.end(data);
    } catch { res.writeHead(404); res.end('Not found'); }
  });
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const server = createDemoServer(); server.listen(4173, '127.0.0.1', () => console.log('BasketBay demo: http://127.0.0.1:4173/interactive-basketbay/index.html'));
}
