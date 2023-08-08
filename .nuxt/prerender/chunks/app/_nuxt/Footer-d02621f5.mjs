import { defineComponent, mergeProps, unref, useSSRContext } from 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/vue/index.mjs';
import { d as useAppConfig } from '../server.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/vue/server-renderer/index.mjs';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/ofetch/dist/node.mjs';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/hookable/dist/index.mjs';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/unctx/dist/index.mjs';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/h3/dist/index.mjs';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/ufo/dist/index.mjs';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/destr/dist/index.mjs';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/klona/dist/index.mjs';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/unhead/dist/index.mjs';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/ohash/dist/index.mjs';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/cookie-es/dist/index.mjs';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/scule/dist/index.mjs';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/unstorage/dist/index.mjs';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/unstorage/drivers/fs.mjs';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/pathe/dist/index.mjs';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/unified/index.js';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/mdast-util-to-string/index.js';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/micromark/lib/preprocess.js';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/micromark/lib/postprocess.js';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/unist-util-stringify-position/index.js';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/micromark-util-character/index.js';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/micromark-util-chunked/index.js';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/micromark-util-resolve-all/index.js';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/remark-emoji/index.js';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/rehype-slug/index.js';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/remark-squeeze-paragraphs/index.js';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/rehype-external-links/index.js';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/remark-gfm/index.js';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/rehype-sort-attributes/index.js';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/rehype-raw/index.js';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/remark-mdc/dist/index.mjs';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/remark-parse/index.js';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/remark-rehype/index.js';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/mdast-util-to-hast/index.js';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/detab/index.js';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/unist-builder/index.js';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/mdurl/index.js';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/slugify/slugify.js';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/unist-util-position/index.js';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/unist-util-visit/index.js';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/shiki-es/dist/shiki.node.mjs';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/unenv/runtime/npm/consola.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const { awesome } = useAppConfig();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "flex border-t border-gray-900/10 dark:border-gray-50/[0.2]" }, _attrs))}><div class="flex-1 justify-between max-w-screen-2xl mx-auto px-4 flex flex-col md:flex-row py-2 space-y-2 md:space-y-0 items-center text-xs text-center md:text-left text-gray-400"><div> Copyright \xA9 ${ssrInterpolate(((_c = (_b = (_a = unref(awesome)) == null ? void 0 : _a.layout) == null ? void 0 : _b.footer) == null ? void 0 : _c.year) || ( new Date()).getFullYear())} ${ssrInterpolate(((_e = (_d = unref(awesome)) == null ? void 0 : _d.author) == null ? void 0 : _e.name) || "")}. All rights reserved. </div><div>${ssrInterpolate(unref(awesome).name)}</div></div></footer>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/Page/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Footer-d02621f5.mjs.map
