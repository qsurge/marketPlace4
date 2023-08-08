import __nuxt_component_0 from "./Wrapper-eb79d9ab.js";
import __nuxt_component_3 from "./index-09469de5.js";
import _sfc_main$1 from "./index-164c30f3.js";
import { defineComponent, ref, computed, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import "hookable";
import "destr";
import "devalue";
import { d as useAppConfig } from "../server.mjs";
import { p as parseMenuTitle, a as parseMenuRoute } from "./navbar-a0b107f8.js";
import { ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "./nuxt-link-f805a121.js";
import "ufo";
import "klona";
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
  __name: "Welcome",
  __ssrInlineRender: true,
  props: {
    withAlert: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    var _a, _b, _c, _d;
    const props = __props;
    const { awesome } = useAppConfig();
    const showAlert = ref(
      ((_b = (_a = awesome == null ? void 0 : awesome.layout) == null ? void 0 : _a.welcome) == null ? void 0 : _b.disableInfoReplaceIndexInWelcomePage) ? !((_d = (_c = awesome == null ? void 0 : awesome.layout) == null ? void 0 : _c.welcome) == null ? void 0 : _d.disableInfoReplaceIndexInWelcomePage) : props.withAlert
    );
    const titlesText = computed(
      () => {
        var _a2, _b2;
        return (((_b2 = (_a2 = awesome == null ? void 0 : awesome.layout) == null ? void 0 : _a2.welcome) == null ? void 0 : _b2.title) || (awesome == null ? void 0 : awesome.name) || "Nuxt&nbsp;3 Awesome Starter").replaceAll("&nbsp;", "[space]").split(" ").map((item) => item.replaceAll("[space]", " "));
      }
    );
    const leadingsText = computed(() => [
      {
        text: titlesText.value[0],
        startColor: "#007CF0",
        endColor: "#00DFD8",
        delay: 0
      },
      {
        text: titlesText.value[1],
        startColor: "#7928CA",
        endColor: "#FF0080",
        delay: 2
      },
      {
        text: titlesText.value[2],
        startColor: "#FF4D4D",
        endColor: "#F9CB28",
        delay: 4
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutPageWrapper = __nuxt_component_0;
      const _component_LayoutPageSection = __nuxt_component_3;
      const _component_AwesomeButton = _sfc_main$1;
      _push(ssrRenderComponent(_component_LayoutPageWrapper, mergeProps({ class: "flex-1 flex" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LayoutPageSection, { class: "flex-1 flex" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2, _c2, _d2, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$;
                if (_push3) {
                  _push3(`<div class="flex-1 flex flex-col items-center justify-center"${_scopeId2}><h1 class="text-center mt-4"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(leadingsText), (item, i) => {
                    _push3(`<span style="${ssrRenderStyle(`--content: '${item.text}'; --start-color: ${item.startColor}; --end-color: ${item.endColor}; --animation-name: anim-fg-${i + 1}`)}" class="animated-text-bg drop-shadow-xl text-6xl sm:text-8xl md:text-8xl lg:text-8xl 2xl:text-8xl block font-black uppercase"${_scopeId2}><span class="animated-text-fg"${_scopeId2}>${ssrInterpolate(item.text)}</span></span>`);
                  });
                  _push3(`<!--]--></h1><div class="px-4 mt-6 text-center max-w-[500px] md:max-w-[600px]"${_scopeId2}>${ssrInterpolate(((_a2 = unref(awesome)) == null ? void 0 : _a2.description) || "a starter template for Nuxt 3 with minimalist themes design, built in components, drawer & menus, and more.")}</div>`);
                  if (unref(showAlert)) {
                    _push3(`<div class="mt-4 w-auto text-center text-white bg-gray-800 rounded px-4 py-1 text-sm"${_scopeId2}> create file &quot;~/pages/index.vue&quot; to replace this page </div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="flex space-x-4 ml-2 mt-8 justify-center md:justify-start"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_AwesomeButton, {
                    size: "lg",
                    text: ("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))(
                      ((_e = (_d2 = (_c2 = (_b2 = unref(awesome)) == null ? void 0 : _b2.layout) == null ? void 0 : _c2.welcome) == null ? void 0 : _d2.primaryActionButton) == null ? void 0 : _e.title) || "Nuxt 3"
                    ),
                    to: ("parseMenuRoute" in _ctx ? _ctx.parseMenuRoute : unref(parseMenuRoute))(
                      ((_i = (_h = (_g = (_f = unref(awesome)) == null ? void 0 : _f.layout) == null ? void 0 : _g.welcome) == null ? void 0 : _h.primaryActionButton) == null ? void 0 : _i.to) || "https://nuxt.com"
                    ),
                    class: "font-extrabold"
                  }, null, _parent3, _scopeId2));
                  if (("parseMenuRoute" in _ctx ? _ctx.parseMenuRoute : unref(parseMenuRoute))(
                    ((_m = (_l = (_k = (_j = unref(awesome)) == null ? void 0 : _j.layout) == null ? void 0 : _k.welcome) == null ? void 0 : _l.secondaryActionButton) == null ? void 0 : _m.to) || ((_p = (_o = (_n = unref(awesome)) == null ? void 0 : _n.project) == null ? void 0 : _o.links) == null ? void 0 : _p.github)
                  )) {
                    _push3(ssrRenderComponent(_component_AwesomeButton, {
                      text: ("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))(
                        ((_t = (_s = (_r = (_q = unref(awesome)) == null ? void 0 : _q.layout) == null ? void 0 : _r.welcome) == null ? void 0 : _s.secondaryActionButton) == null ? void 0 : _t.title) || "Github"
                      ),
                      to: ("parseMenuRoute" in _ctx ? _ctx.parseMenuRoute : unref(parseMenuRoute))(
                        ((_x = (_w = (_v = (_u = unref(awesome)) == null ? void 0 : _u.layout) == null ? void 0 : _v.welcome) == null ? void 0 : _w.secondaryActionButton) == null ? void 0 : _x.to) || ((_A = (_z = (_y = unref(awesome)) == null ? void 0 : _y.project) == null ? void 0 : _z.links) == null ? void 0 : _A.github)
                      ),
                      size: "lg",
                      class: "font-extrabold",
                      type: "secondary"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div><div class="top-0 left-0 absolute w-screen"${_scopeId2}><div class="absolute right-0 top-0 w-1/4 h-screen py-10 pt-12 z-0 flex"${_scopeId2}><div class="flex-1 rounded-l-9xl bg-gradient-to-l from-blue-600/10"${_scopeId2}></div></div><div class="absolute left-0 top-0 w-1/4 h-screen py-10 pt-12 z-0 flex"${_scopeId2}><div class="flex-1 rounded-r-9xl bg-gradient-to-r from-green-600/10"${_scopeId2}></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex-1 flex flex-col items-center justify-center" }, [
                      createVNode("h1", { class: "text-center mt-4" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(leadingsText), (item, i) => {
                          return openBlock(), createBlock("span", {
                            key: i,
                            style: `--content: '${item.text}'; --start-color: ${item.startColor}; --end-color: ${item.endColor}; --animation-name: anim-fg-${i + 1}`,
                            class: "animated-text-bg drop-shadow-xl text-6xl sm:text-8xl md:text-8xl lg:text-8xl 2xl:text-8xl block font-black uppercase"
                          }, [
                            createVNode("span", { class: "animated-text-fg" }, toDisplayString(item.text), 1)
                          ], 4);
                        }), 128))
                      ]),
                      createVNode("div", { class: "px-4 mt-6 text-center max-w-[500px] md:max-w-[600px]" }, toDisplayString(((_B = unref(awesome)) == null ? void 0 : _B.description) || "a starter template for Nuxt 3 with minimalist themes design, built in components, drawer & menus, and more."), 1),
                      unref(showAlert) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "mt-4 w-auto text-center text-white bg-gray-800 rounded px-4 py-1 text-sm"
                      }, ' create file "~/pages/index.vue" to replace this page ')) : createCommentVNode("", true),
                      createVNode("div", { class: "flex space-x-4 ml-2 mt-8 justify-center md:justify-start" }, [
                        createVNode(_component_AwesomeButton, {
                          size: "lg",
                          text: ("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))(
                            ((_F = (_E = (_D = (_C = unref(awesome)) == null ? void 0 : _C.layout) == null ? void 0 : _D.welcome) == null ? void 0 : _E.primaryActionButton) == null ? void 0 : _F.title) || "Nuxt 3"
                          ),
                          to: ("parseMenuRoute" in _ctx ? _ctx.parseMenuRoute : unref(parseMenuRoute))(
                            ((_J = (_I = (_H = (_G = unref(awesome)) == null ? void 0 : _G.layout) == null ? void 0 : _H.welcome) == null ? void 0 : _I.primaryActionButton) == null ? void 0 : _J.to) || "https://nuxt.com"
                          ),
                          class: "font-extrabold"
                        }, null, 8, ["text", "to"]),
                        ("parseMenuRoute" in _ctx ? _ctx.parseMenuRoute : unref(parseMenuRoute))(
                          ((_N = (_M = (_L = (_K = unref(awesome)) == null ? void 0 : _K.layout) == null ? void 0 : _L.welcome) == null ? void 0 : _M.secondaryActionButton) == null ? void 0 : _N.to) || ((_Q = (_P = (_O = unref(awesome)) == null ? void 0 : _O.project) == null ? void 0 : _P.links) == null ? void 0 : _Q.github)
                        ) ? (openBlock(), createBlock(_component_AwesomeButton, {
                          key: 0,
                          text: ("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))(
                            ((_U = (_T = (_S = (_R = unref(awesome)) == null ? void 0 : _R.layout) == null ? void 0 : _S.welcome) == null ? void 0 : _T.secondaryActionButton) == null ? void 0 : _U.title) || "Github"
                          ),
                          to: ("parseMenuRoute" in _ctx ? _ctx.parseMenuRoute : unref(parseMenuRoute))(
                            ((_Y = (_X = (_W = (_V = unref(awesome)) == null ? void 0 : _V.layout) == null ? void 0 : _W.welcome) == null ? void 0 : _X.secondaryActionButton) == null ? void 0 : _Y.to) || ((_$ = (__ = (_Z = unref(awesome)) == null ? void 0 : _Z.project) == null ? void 0 : __.links) == null ? void 0 : _$.github)
                          ),
                          size: "lg",
                          class: "font-extrabold",
                          type: "secondary"
                        }, null, 8, ["text", "to"])) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "top-0 left-0 absolute w-screen" }, [
                      createVNode("div", { class: "absolute right-0 top-0 w-1/4 h-screen py-10 pt-12 z-0 flex" }, [
                        createVNode("div", { class: "flex-1 rounded-l-9xl bg-gradient-to-l from-blue-600/10" })
                      ]),
                      createVNode("div", { class: "absolute left-0 top-0 w-1/4 h-screen py-10 pt-12 z-0 flex" }, [
                        createVNode("div", { class: "flex-1 rounded-r-9xl bg-gradient-to-r from-green-600/10" })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_LayoutPageSection, { class: "flex-1 flex" }, {
                default: withCtx(() => {
                  var _a2, _b2, _c2, _d2, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A;
                  return [
                    createVNode("div", { class: "flex-1 flex flex-col items-center justify-center" }, [
                      createVNode("h1", { class: "text-center mt-4" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(leadingsText), (item, i) => {
                          return openBlock(), createBlock("span", {
                            key: i,
                            style: `--content: '${item.text}'; --start-color: ${item.startColor}; --end-color: ${item.endColor}; --animation-name: anim-fg-${i + 1}`,
                            class: "animated-text-bg drop-shadow-xl text-6xl sm:text-8xl md:text-8xl lg:text-8xl 2xl:text-8xl block font-black uppercase"
                          }, [
                            createVNode("span", { class: "animated-text-fg" }, toDisplayString(item.text), 1)
                          ], 4);
                        }), 128))
                      ]),
                      createVNode("div", { class: "px-4 mt-6 text-center max-w-[500px] md:max-w-[600px]" }, toDisplayString(((_a2 = unref(awesome)) == null ? void 0 : _a2.description) || "a starter template for Nuxt 3 with minimalist themes design, built in components, drawer & menus, and more."), 1),
                      unref(showAlert) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "mt-4 w-auto text-center text-white bg-gray-800 rounded px-4 py-1 text-sm"
                      }, ' create file "~/pages/index.vue" to replace this page ')) : createCommentVNode("", true),
                      createVNode("div", { class: "flex space-x-4 ml-2 mt-8 justify-center md:justify-start" }, [
                        createVNode(_component_AwesomeButton, {
                          size: "lg",
                          text: ("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))(
                            ((_e = (_d2 = (_c2 = (_b2 = unref(awesome)) == null ? void 0 : _b2.layout) == null ? void 0 : _c2.welcome) == null ? void 0 : _d2.primaryActionButton) == null ? void 0 : _e.title) || "Nuxt 3"
                          ),
                          to: ("parseMenuRoute" in _ctx ? _ctx.parseMenuRoute : unref(parseMenuRoute))(
                            ((_i = (_h = (_g = (_f = unref(awesome)) == null ? void 0 : _f.layout) == null ? void 0 : _g.welcome) == null ? void 0 : _h.primaryActionButton) == null ? void 0 : _i.to) || "https://nuxt.com"
                          ),
                          class: "font-extrabold"
                        }, null, 8, ["text", "to"]),
                        ("parseMenuRoute" in _ctx ? _ctx.parseMenuRoute : unref(parseMenuRoute))(
                          ((_m = (_l = (_k = (_j = unref(awesome)) == null ? void 0 : _j.layout) == null ? void 0 : _k.welcome) == null ? void 0 : _l.secondaryActionButton) == null ? void 0 : _m.to) || ((_p = (_o = (_n = unref(awesome)) == null ? void 0 : _n.project) == null ? void 0 : _o.links) == null ? void 0 : _p.github)
                        ) ? (openBlock(), createBlock(_component_AwesomeButton, {
                          key: 0,
                          text: ("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))(
                            ((_t = (_s = (_r = (_q = unref(awesome)) == null ? void 0 : _q.layout) == null ? void 0 : _r.welcome) == null ? void 0 : _s.secondaryActionButton) == null ? void 0 : _t.title) || "Github"
                          ),
                          to: ("parseMenuRoute" in _ctx ? _ctx.parseMenuRoute : unref(parseMenuRoute))(
                            ((_x = (_w = (_v = (_u = unref(awesome)) == null ? void 0 : _u.layout) == null ? void 0 : _v.welcome) == null ? void 0 : _w.secondaryActionButton) == null ? void 0 : _x.to) || ((_A = (_z = (_y = unref(awesome)) == null ? void 0 : _y.project) == null ? void 0 : _z.links) == null ? void 0 : _A.github)
                          ),
                          size: "lg",
                          class: "font-extrabold",
                          type: "secondary"
                        }, null, 8, ["text", "to"])) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "top-0 left-0 absolute w-screen" }, [
                      createVNode("div", { class: "absolute right-0 top-0 w-1/4 h-screen py-10 pt-12 z-0 flex" }, [
                        createVNode("div", { class: "flex-1 rounded-l-9xl bg-gradient-to-l from-blue-600/10" })
                      ]),
                      createVNode("div", { class: "absolute left-0 top-0 w-1/4 h-screen py-10 pt-12 z-0 flex" }, [
                        createVNode("div", { class: "flex-1 rounded-r-9xl bg-gradient-to-r from-green-600/10" })
                      ])
                    ])
                  ];
                }),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const Welcome_vue_vue_type_style_index_0_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/awesome/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Welcome-2de463a1.js.map
