import { a as useContent, b as useRequestEvent, _ as __nuxt_component_0 } from "../server.mjs";
import _sfc_main$1 from "./ContentRenderer-4fe16514.js";
import _sfc_main$2 from "./DocumentDrivenEmpty-e7fcdb87.js";
import _sfc_main$3 from "./DocumentDrivenNotFound-84f1d547.js";
import { u as useContentHead } from "./head-47699c57.js";
import { defineComponent, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, useSSRContext } from "vue";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "@vue/devtools-api";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "ohash";
import "cookie-es";
import "defu";
import "./ContentRendererMarkdown-426755d1.js";
import "scule";
import "property-information";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "document-driven",
  __ssrInlineRender: true,
  setup(__props) {
    const { page, layout } = useContent();
    if (!page.value && true) {
      const event = useRequestEvent();
      event.res.statusCode = 404;
    }
    useContentHead(page);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_ContentRenderer = _sfc_main$1;
      const _component_DocumentDrivenEmpty = _sfc_main$2;
      const _component_DocumentDrivenNotFound = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "document-driven-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, {
        name: unref(layout) || "default"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(page)) {
              _push2(ssrRenderComponent(_component_ContentRenderer, {
                key: unref(page)._id,
                value: unref(page)
              }, {
                empty: withCtx(({ value }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_DocumentDrivenEmpty, { value }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_DocumentDrivenEmpty, { value }, null, 8, ["value"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_DocumentDrivenNotFound, null, null, _parent2, _scopeId));
            }
          } else {
            return [
              unref(page) ? (openBlock(), createBlock(_component_ContentRenderer, {
                key: unref(page)._id,
                value: unref(page)
              }, {
                empty: withCtx(({ value }) => [
                  createVNode(_component_DocumentDrivenEmpty, { value }, null, 8, ["value"])
                ]),
                _: 1
              }, 8, ["value"])) : (openBlock(), createBlock(_component_DocumentDrivenNotFound, { key: 1 }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/pages/document-driven.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=document-driven-0e96be70.js.map
