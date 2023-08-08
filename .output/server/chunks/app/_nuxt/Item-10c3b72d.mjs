import { _ as __nuxt_component_0 } from './nuxt-link-f805a121.mjs';
import _sfc_main$1 from './index-164c30f3.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { a as parseMenuRoute, p as parseMenuTitle } from './navbar-a0b107f8.mjs';
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import 'ufo';
import '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'destr';
import 'klona';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'ohash';
import 'cookie-es';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'unified';
import 'mdast-util-to-string';
import 'micromark/lib/preprocess.js';
import 'micromark/lib/postprocess.js';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'remark-emoji';
import 'rehype-slug';
import 'remark-squeeze-paragraphs';
import 'rehype-external-links';
import 'remark-gfm';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'remark-mdc';
import 'remark-parse';
import 'remark-rehype';
import 'mdast-util-to-hast';
import 'detab';
import 'unist-builder';
import 'mdurl';
import 'slugify';
import 'unist-util-position';
import 'unist-util-visit';
import 'shiki-es';
import 'unenv/runtime/npm/consola';
import 'http-graceful-shutdown';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Item",
  __ssrInlineRender: true,
  props: {
    menu: {
      type: Object,
      required: true
    },
    isDropdown: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_AwesomeButton = _sfc_main$1;
      if (((_a = __props.menu) == null ? void 0 : _a.type) === "link" && __props.isDropdown) {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
          to: ("parseMenuRoute" in _ctx ? _ctx.parseMenuRoute : unref(parseMenuRoute))((_b = __props.menu) == null ? void 0 : _b.to)
        }, _attrs), {
          default: withCtx(({ isActive }, _push2, _parent2, _scopeId) => {
            var _a2, _b2;
            if (_push2) {
              _push2(`<div class="${ssrRenderClass([
                "transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-lg w-full",
                isActive ? "text-gray-900 dark:text-gray-100 font-bold" : "text-gray-700 dark:text-gray-300"
              ])}"${_scopeId}>${ssrInterpolate(("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))((_a2 = __props.menu) == null ? void 0 : _a2.title))}</div>`);
            } else {
              return [
                createVNode("div", {
                  class: [
                    "transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-lg w-full",
                    isActive ? "text-gray-900 dark:text-gray-100 font-bold" : "text-gray-700 dark:text-gray-300"
                  ]
                }, toDisplayString(("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))((_b2 = __props.menu) == null ? void 0 : _b2.title)), 3)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (((_c = __props.menu) == null ? void 0 : _c.type) === "link") {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
          to: ("parseMenuRoute" in _ctx ? _ctx.parseMenuRoute : unref(parseMenuRoute))((_d = __props.menu) == null ? void 0 : _d.to)
        }, _attrs), {
          default: withCtx(({ isActive }, _push2, _parent2, _scopeId) => {
            var _a2, _b2;
            if (_push2) {
              _push2(`<span class="${ssrRenderClass({
                "text-gray-900 dark:text-gray-100 font-bold": isActive,
                "text-gray-700 dark:text-gray-300": !isActive
              })}"${_scopeId}>${ssrInterpolate(("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))((_a2 = __props.menu) == null ? void 0 : _a2.title))}</span>`);
            } else {
              return [
                createVNode("span", {
                  class: {
                    "text-gray-900 dark:text-gray-100 font-bold": isActive,
                    "text-gray-700 dark:text-gray-300": !isActive
                  }
                }, toDisplayString(("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))((_b2 = __props.menu) == null ? void 0 : _b2.title)), 3)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (((_e = __props.menu) == null ? void 0 : _e.type) === "button") {
        _push(ssrRenderComponent(_component_AwesomeButton, mergeProps({
          text: ("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))((_f = __props.menu) == null ? void 0 : _f.title),
          size: "xs",
          to: ("parseMenuRoute" in _ctx ? _ctx.parseMenuRoute : unref(parseMenuRoute))(__props.menu.to)
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/Page/NavbarMenu/Item.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Item-10c3b72d.mjs.map
