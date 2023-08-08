import _sfc_main$1 from "./Welcome-2de463a1.js";
import { defineComponent, mergeProps, useSSRContext } from "vue";
import "hookable";
import { d as useAppConfig, u as useHead } from "../server.mjs";
import "destr";
import "devalue";
import { ssrRenderComponent } from "vue/server-renderer";
import "./Wrapper-eb79d9ab.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "./index-09469de5.js";
import "./index-164c30f3.js";
import "./nuxt-link-f805a121.js";
import "ufo";
import "klona";
import "./navbar-a0b107f8.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "@vue/devtools-api";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "ohash";
import "cookie-es";
import "defu";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { awesome } = useAppConfig();
    useHead({ titleTemplate: "", title: (awesome == null ? void 0 : awesome.name) || "Nuxt 3 Awesome Starter" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AwesomeWelcome = _sfc_main$1;
      _push(ssrRenderComponent(_component_AwesomeWelcome, mergeProps({ "with-alert": true }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-1164286e.js.map
