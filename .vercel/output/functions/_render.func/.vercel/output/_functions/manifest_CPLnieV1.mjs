import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CUtmnuZf.mjs';
import 'es-module-lexer';
import { h as decodeKey } from './chunks/astro/server_DabnjN9c.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///workspaces/codespaces-blank/app/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/review","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/review\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"review","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/review.ts","pathname":"/api/review","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/lib/supabase","isIndex":false,"type":"endpoint","pattern":"^\\/lib\\/supabase\\/?$","segments":[[{"content":"lib","dynamic":false,"spread":false}],[{"content":"supabase","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/lib/supabase.ts","pathname":"/lib/supabase","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CPf1NVbl.js"}],"styles":[{"type":"external","src":"/_astro/index.DjLvx51n.css"},{"type":"inline","content":"#qrcode[data-astro-cid-ujovgiqq]{transition:transform .3s ease}#qrcode[data-astro-cid-ujovgiqq]:hover{transform:scale(1.05)}.copy-button[data-astro-cid-ujovgiqq]{transition:all .3s ease}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.fade-in[data-astro-cid-ujovgiqq]{animation:fadeIn .5s ease-in}\n"}],"routeData":{"route":"/terimakasih","isIndex":false,"type":"page","pattern":"^\\/terimakasih\\/?$","segments":[[{"content":"terimakasih","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/terimakasih.astro","pathname":"/terimakasih","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DR1TTRdB.js"}],"styles":[{"type":"external","src":"/_astro/index.DjLvx51n.css"},{"type":"inline","content":".disclaimer[data-astro-cid-kcahbcdb]{font-size:.6rem}.logo[data-astro-cid-kcahbcdb]{font-size:12px;font-weight:lighter;font-family:Verdana,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.rating[data-astro-cid-kcahbcdb]{display:flex;flex-direction:row-reverse;justify-content:center}.rating[data-astro-cid-kcahbcdb] input[data-astro-cid-kcahbcdb]{display:none}.rating[data-astro-cid-kcahbcdb] label[data-astro-cid-kcahbcdb]{font-size:4rem;cursor:pointer;padding:3px;-webkit-user-select:none;-moz-user-select:none;user-select:none;background:linear-gradient(to right,gray,#f5f5f5);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.rating[data-astro-cid-kcahbcdb] label[data-astro-cid-kcahbcdb]:hover,.rating[data-astro-cid-kcahbcdb] label[data-astro-cid-kcahbcdb]:hover~label[data-astro-cid-kcahbcdb]{background:linear-gradient(to right,#ffa726,#fb8c00);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.rating[data-astro-cid-kcahbcdb] input[data-astro-cid-kcahbcdb]:checked~label[data-astro-cid-kcahbcdb]{background:linear-gradient(to right,#ffa726,#ff6d00);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.react[data-astro-cid-kcahbcdb] .option[data-astro-cid-kcahbcdb]{display:inline-flex;align-items:center;border:1px solid #ccc;border-radius:9999px;padding:.5rem 1rem;cursor:pointer;transition:background-color .3s}.react[data-astro-cid-kcahbcdb] .option[data-astro-cid-kcahbcdb] input[data-astro-cid-kcahbcdb]{display:none}.react[data-astro-cid-kcahbcdb] .option[data-astro-cid-kcahbcdb] .label-text[data-astro-cid-kcahbcdb]{font-size:1rem;color:#333;font-weight:700}.react[data-astro-cid-kcahbcdb] .option[data-astro-cid-kcahbcdb] input[data-astro-cid-kcahbcdb]:checked+.label-text[data-astro-cid-kcahbcdb]{color:#fff}.label-text[data-astro-cid-kcahbcdb]{-webkit-user-select:none;-moz-user-select:none;user-select:none}.btn[data-astro-cid-kcahbcdb]{border-radius:999px}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/workspaces/codespaces-blank/app/src/pages/terimakasih.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/terimakasih@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/workspaces/codespaces-blank/app/src/components/review.astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/codespaces-blank/app/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/lib/supabase@_@ts":"pages/lib/supabase.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/api/review@_@ts":"pages/api/review.astro.mjs","\u0000@astro-page:src/pages/terimakasih@_@astro":"pages/terimakasih.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/workspaces/codespaces-blank/app/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_CPLnieV1.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.DR1TTRdB.js","/astro/hoisted.js?q=1":"_astro/hoisted.CPf1NVbl.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.DjLvx51n.css","/favicon.svg","/_astro/ViewTransitions.astro_astro_type_script_index_0_lang.2daoxv0f.js","/_astro/hoisted.CPf1NVbl.js","/_astro/hoisted.DR1TTRdB.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"wVDCdzFwCDVMbkvltWraSA/eA8cCFpxhsmOo5jlvJU0=","experimentalEnvGetSecretEnabled":false});

export { manifest };
