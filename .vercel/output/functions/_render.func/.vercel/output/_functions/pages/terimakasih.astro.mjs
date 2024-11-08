/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, a as addAttribute, g as renderTransition } from '../chunks/astro/server_DabnjN9c.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BBO7IjI9.mjs';
import 'clsx';
/* empty css                                       */
export { renderers } from '../renderers.mjs';

const $$Qrcode = createComponent(async ($$result, $$props, $$slots) => {
  const wifiNetwork = "COS.BALA KATINEUNG 5G";
  return renderTemplate`<!-- WiFi Card -->${maybeRenderHead()}<div class="bg-white p-8 rounded-lg shadow-lg" data-astro-cid-ujovgiqq> <div class="text-center" data-astro-cid-ujovgiqq> <div class="flex items-center justify-center mb-4" data-astro-cid-ujovgiqq> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ujovgiqq> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" data-astro-cid-ujovgiqq></path> </svg> </div> <h3 class="text-xl font-semibold text-gray-900 mb-4" data-astro-cid-ujovgiqq>
Akses WiFi Gratis!
</h3> <p class="text-sm text-gray-600 mb-6" data-astro-cid-ujovgiqq>
Scan QR code di bawah untuk terhubung ke WiFi kami
</p> <!-- QR Code Container --> <div class="flex justify-center mb-6" data-astro-cid-ujovgiqq> <div id="qrcode" class="p-4 bg-white rounded-xl border-2 border-green-700" data-astro-cid-ujovgiqq> <img src="../../src/img/qrcode.png" alt="" data-astro-cid-ujovgiqq> </div> </div> <!-- WiFi Details --> <div class="space-y-2 text-left bg-gray-50 p-4 rounded-lg" data-astro-cid-ujovgiqq> <div class="flex justify-between items-center" data-astro-cid-ujovgiqq> <span class="text-gray-600" data-astro-cid-ujovgiqq>Network:</span> <span class="font-medium text-gray-900" data-astro-cid-ujovgiqq>${wifiNetwork}</span> </div> <div class="flex justify-between items-center" data-astro-cid-ujovgiqq> <span class="text-gray-600" data-astro-cid-ujovgiqq>Password:</span> <div class="flex items-center" data-astro-cid-ujovgiqq> <span id="password" class="font-medium text-gray-900 mr-2" data-astro-cid-ujovgiqq>
••••••••
</span> <button id="showPassword" class="text-green-700 hover:text-green-800" data-astro-cid-ujovgiqq> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-ujovgiqq> <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" data-astro-cid-ujovgiqq></path> <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" data-astro-cid-ujovgiqq></path> </svg> </button> </div> </div> </div> <!-- Copy Button --> <button onclick="copyToClipboard()" id="copyWifi" class="md:visible invisible mt-6 w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" data-astro-cid-ujovgiqq> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-ujovgiqq> <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" data-astro-cid-ujovgiqq></path> <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" data-astro-cid-ujovgiqq></path> </svg>
Salin Detail WiFi
</button> </div> </div>  `;
}, "/workspaces/codespaces-blank/app/src/components/qrcode.astro", void 0);

const $$Terimakasih = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Terima Kasih - Saung Bala Katineung" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"> <div class="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg"> <div class="text-center"> <img src="/src/img/logo.png" class="mx-auto h-16 w-auto grayscale opacity-45" alt="Logo"${addAttribute(renderTransition($$result2, "xon3jb4q", "", "logo_akhir"), "data-astro-transition-scope")}> <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
Terima Kasih!
</h2> <p class="mt-2 text-sm text-gray-600">
Review Anda telah kami terima dan sangat berarti bagi kami.
</p> <div class="mt-8 flex justify-center"> <div class="animate-bounce bg-green-700 p-4 rounded-full"> <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> </div> <p class="mt-8 text-sm text-gray-500">
Kami akan terus meningkatkan kualitas pelayanan kami.
</p> </div> </div> </div> ${renderComponent($$result2, "Qrcode", $$Qrcode, {})} ` })}`;
}, "/workspaces/codespaces-blank/app/src/pages/terimakasih.astro", "self");

const $$file = "/workspaces/codespaces-blank/app/src/pages/terimakasih.astro";
const $$url = "/terimakasih";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Terimakasih,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
