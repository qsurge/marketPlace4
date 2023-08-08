import { defineComponent, toRefs, computed, useSlots, useSSRContext, h } from 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/vue/index.mjs';
import { u as useAsyncData } from './asyncData-7e77e17e.mjs';
import { j as useState, a as useContent, l as fetchContentNavigation } from '../server.mjs';
import { hash } from 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/ohash/dist/index.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-f805a121.mjs';
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
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/cookie-es/dist/index.mjs';
import 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/vue/server-renderer/index.mjs';
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
  name: "ContentNavigation",
  props: {
    /**
     * A query to be passed to `fetchContentNavigation()`.
     */
    query: {
      type: Object,
      required: false,
      default: void 0
    }
  },
  async setup(props) {
    const {
      query
    } = toRefs(props);
    const queryBuilder = computed(() => {
      var _a;
      if (typeof ((_a = query.value) == null ? void 0 : _a.params) === "function") {
        return query.value.params();
      }
      return query.value;
    });
    if (!queryBuilder.value && useState("dd-navigation").value) {
      const { navigation: navigation2 } = useContent();
      return { navigation: navigation2 };
    }
    const { data: navigation } = await useAsyncData(
      `content-navigation-${hash(queryBuilder.value)}`,
      () => fetchContentNavigation(queryBuilder.value)
    );
    return { navigation };
  },
  /**
   * Navigation empty fallback
   * @slot empty
   */
  render(ctx) {
    const slots = useSlots();
    const { navigation } = ctx;
    const renderLink = (link) => h(__nuxt_component_0, { to: link._path }, () => link.title);
    const renderLinks = (data, level) => h(
      "ul",
      level ? { "data-level": level } : null,
      data.map((link) => {
        if (link.children) {
          return h("li", null, [renderLink(link), renderLinks(link.children, level + 1)]);
        }
        return h("li", null, renderLink(link));
      })
    );
    const defaultNode = (data) => renderLinks(data, 0);
    return (slots == null ? void 0 : slots.default) ? slots.default({ navigation, ...this.$attrs }) : defaultNode(navigation);
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ContentNavigation-ddc11f8b.mjs.map
