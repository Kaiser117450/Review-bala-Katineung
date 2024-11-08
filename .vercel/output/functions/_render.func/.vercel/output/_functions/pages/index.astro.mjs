/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, g as renderTransition, d as renderComponent } from '../chunks/astro/server_DabnjN9c.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BBO7IjI9.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Review = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form action="/api/review" method="POST" id="feedbackForm" class="bg-white p-4 rounded-lg shadow-md mx-4 md:mx-auto max-w-md" data-astro-cid-kcahbcdb> <div class="flex flex-col items-center mb-12" data-astro-cid-kcahbcdb> <img src="../../src/img/logo.png" class="size-16 grayscale opacity-45" alt="" data-astro-cid-kcahbcdb${addAttribute(renderTransition($$result, "p6s34byy", "", "logo_awal"), "data-astro-transition-scope")}> <h4 class="logo -mt-2 text-gray-300" data-astro-cid-kcahbcdb>Saung Bala Katineung</h4> </div> <h2 class="text-3xl font-semibold text-gray-800" data-astro-cid-kcahbcdb>Berikan <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:-skew-x-3 before:bg-yellow-400 relative inline-block" data-astro-cid-kcahbcdb> <span class="relative text-white" data-astro-cid-kcahbcdb>Review</span> </span> Anda</h2> <div class="rating mb-4 text-gray-200" data-astro-cid-kcahbcdb> <input type="radio" id="star5" name="rating" value="5" data-astro-cid-kcahbcdb> <label for="star5" data-astro-cid-kcahbcdb>&#9733;</label> <input type="radio" id="star4" name="rating" value="4" data-astro-cid-kcahbcdb> <label for="star4" data-astro-cid-kcahbcdb>&#9733;</label> <input type="radio" id="star3" name="rating" value="3" data-astro-cid-kcahbcdb> <label for="star3" data-astro-cid-kcahbcdb>&#9733;</label> <input type="radio" id="star2" name="rating" value="2" data-astro-cid-kcahbcdb> <label for="star2" data-astro-cid-kcahbcdb>&#9733;</label> <input type="radio" id="star1" name="rating" value="1" data-astro-cid-kcahbcdb> <label for="star1" data-astro-cid-kcahbcdb>&#9733;</label> </div> <hr class="my-8 bg-gray-200 border-t-2" data-astro-cid-kcahbcdb> <h2 class="text-lg font-semibold text-gray-800 mb-4" data-astro-cid-kcahbcdb>Apa yang kamu sukai dari kita</h2> <div class="flex flex-wrap gap-2 mb-4 react justify-center transition ease-in-out" data-astro-cid-kcahbcdb> <label class="option" data-astro-cid-kcahbcdb> <input type="checkbox" name="reaction" value="kualitas" data-astro-cid-kcahbcdb> <span class="label-text" data-astro-cid-kcahbcdb>⭐️ Kualitas</span> </label> <label class="option" data-astro-cid-kcahbcdb> <input type="checkbox" name="reaction" value="rasa" data-astro-cid-kcahbcdb> <span class="label-text" data-astro-cid-kcahbcdb>😋 Rasa</span> </label> <label class="option" data-astro-cid-kcahbcdb> <input type="checkbox" name="reaction" value="fresh" data-astro-cid-kcahbcdb> <span class="label-text" data-astro-cid-kcahbcdb>🥬 Fresh</span> </label> <label class="option" data-astro-cid-kcahbcdb> <input type="checkbox" name="reaction" value="harga" data-astro-cid-kcahbcdb> <span class="label-text" data-astro-cid-kcahbcdb>💸 Harga</span> </label> <label class="option" data-astro-cid-kcahbcdb> <input type="checkbox" name="reaction" value="porsi" data-astro-cid-kcahbcdb> <span class="label-text" data-astro-cid-kcahbcdb>🍛 Porsi</span> </label> </div> <hr class="my-8 bg-gray-200 border-t-2" data-astro-cid-kcahbcdb> <div class="mb-2" data-astro-cid-kcahbcdb> <label for="review" class="block text-lg font-semibold text-gray-800" data-astro-cid-kcahbcdb>Berikan pendapat kamu dong..</label> <textarea id="comment" name="review" placeholder="Tuliskan review Anda" class="mb-2 peer mt-1 block w-full px-3 py-2 border bg-gray-100 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 text-gray-900 resize-none h-32" rows="4" maxlength="250" required data-astro-cid-kcahbcdb></textarea> <p id="charCounter" class="text-sm text-gray-500 text-left peer-valid:opacity-100 duration-300 opacity-0 transition ease-in-out" data-astro-cid-kcahbcdb>0/250</p> </div> <!-- Tombol Submit --> <button type="submit" class="btn w-full mb-4 peer bg-green-700 hover:bg-green-950 active:bg-gray-500 active:animate-pulse text-white font-semibold py-2 transition duration-300 ease-in-out" data-astro-cid-kcahbcdb> <span class="peer-focus:animate-pulse" data-astro-cid-kcahbcdb>Submit</span> </button> <p class="disclaimer font-light text-gray-500" data-astro-cid-kcahbcdb>Dengan mengirim review kamu dapat membantu kami menjadi lebih baik lagi</p> </form>  `;
}, "/workspaces/codespaces-blank/app/src/components/review.astro", "self");

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Review" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto py-10"${addAttribute(renderTransition($$result2, "wwdvwa7n", "", "card"), "data-astro-transition-scope")}> <section class="text-center"> ${renderComponent($$result2, "Review", $$Review, {})} </section> </main> ` })}`;
}, "/workspaces/codespaces-blank/app/src/pages/index.astro", "self");

const $$file = "/workspaces/codespaces-blank/app/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
