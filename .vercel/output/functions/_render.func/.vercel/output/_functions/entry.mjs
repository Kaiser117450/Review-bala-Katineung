import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_C8S4LQSh.mjs';
import { manifest } from './manifest_CPLnieV1.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/review.astro.mjs');
const _page2 = () => import('./pages/lib/supabase.astro.mjs');
const _page3 = () => import('./pages/terimakasih.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/review.ts", _page1],
    ["src/pages/lib/supabase.ts", _page2],
    ["src/pages/terimakasih.astro", _page3],
    ["src/pages/index.astro", _page4]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "aacc6d27-d063-4807-a3b7-54fe90c1967e",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
