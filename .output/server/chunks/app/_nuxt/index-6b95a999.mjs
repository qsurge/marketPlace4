import __nuxt_component_0 from './Wrapper-eb79d9ab.mjs';
import __nuxt_component_1 from './Header-8d80f04a.mjs';
import _sfc_main$1 from './Title-ab2065eb.mjs';
import __nuxt_component_3 from './index-09469de5.mjs';
import _sfc_main$2 from './ContentList-bc313e0c.mjs';
import _sfc_main$3 from './index-4fdbba8f.mjs';
import __nuxt_component_0$1 from './Icon-c19bf7f4.mjs';
import { defineComponent, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { u as useHead } from '../server.mjs';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import './_plugin-vue_export-helper-cc2b3d55.mjs';
import './ContentQuery-683a0b57.mjs';
import './asyncData-7e77e17e.mjs';
import 'ohash';
import './nuxt-link-f805a121.mjs';
import 'ufo';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Posts" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutPageWrapper = __nuxt_component_0;
      const _component_LayoutPageHeader = __nuxt_component_1;
      const _component_LayoutPageTitle = _sfc_main$1;
      const _component_LayoutPageSection = __nuxt_component_3;
      const _component_ContentList = _sfc_main$2;
      const _component_AwesomeLink = _sfc_main$3;
      const _component_Icon = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_LayoutPageWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LayoutPageHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_LayoutPageTitle, {
                    text: "Posts",
                    class: "capitalize"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_LayoutPageTitle, {
                      text: "Posts",
                      class: "capitalize"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_LayoutPageSection, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ContentList, { path: "/post" }, {
                    default: withCtx(({ list }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(list, (article) => {
                          _push4(`<div class="hover:no-underline p-6 flex space-x-6 rounded border border-gray-900/10 dark:border-gray-50/[0.2] mb-4"${_scopeId3}><div class="mt-1 text-gray-600 dark:text-gray-400 text-right"${_scopeId3}><div${_scopeId3}>${ssrInterpolate(article.date)}</div>`);
                          _push4(ssrRenderComponent(_component_AwesomeLink, {
                            class: "text-sm flex items-center justify-end space-x-1",
                            href: `https://www.github.com/${article.author}`
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Icon, {
                                  name: "mdi:github-face",
                                  class: "text-xs"
                                }, null, _parent5, _scopeId4));
                                _push5(`<span${_scopeId4}>${ssrInterpolate(article.author)}</span>`);
                              } else {
                                return [
                                  createVNode(_component_Icon, {
                                    name: "mdi:github-face",
                                    class: "text-xs"
                                  }),
                                  createVNode("span", null, toDisplayString(article.author), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div><div class="flex flex-col"${_scopeId3}><div class="text-xl font-semibold text-gray-800 dark:text-gray-50"${_scopeId3}>${ssrInterpolate(article.title)}</div><div class="text-gray-700 dark:text-gray-300 mb-1"${_scopeId3}>${ssrInterpolate(article.description)}</div><div class="flex"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_AwesomeLink, {
                            class: "text-sm flex space-x-1 items-center text-primary-500",
                            to: article._path
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<span${_scopeId4}>learn more</span>`);
                                _push5(ssrRenderComponent(_component_Icon, {
                                  name: "ic:baseline-arrow-right-alt",
                                  class: "text-sm"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode("span", null, "learn more"),
                                  createVNode(_component_Icon, {
                                    name: "ic:baseline-arrow-right-alt",
                                    class: "text-sm"
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div></div></div>`);
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(list, (article) => {
                            return openBlock(), createBlock("div", {
                              key: article._path,
                              class: "hover:no-underline p-6 flex space-x-6 rounded border border-gray-900/10 dark:border-gray-50/[0.2] mb-4"
                            }, [
                              createVNode("div", { class: "mt-1 text-gray-600 dark:text-gray-400 text-right" }, [
                                createVNode("div", null, toDisplayString(article.date), 1),
                                createVNode(_component_AwesomeLink, {
                                  class: "text-sm flex items-center justify-end space-x-1",
                                  href: `https://www.github.com/${article.author}`
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "mdi:github-face",
                                      class: "text-xs"
                                    }),
                                    createVNode("span", null, toDisplayString(article.author), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["href"])
                              ]),
                              createVNode("div", { class: "flex flex-col" }, [
                                createVNode("div", { class: "text-xl font-semibold text-gray-800 dark:text-gray-50" }, toDisplayString(article.title), 1),
                                createVNode("div", { class: "text-gray-700 dark:text-gray-300 mb-1" }, toDisplayString(article.description), 1),
                                createVNode("div", { class: "flex" }, [
                                  createVNode(_component_AwesomeLink, {
                                    class: "text-sm flex space-x-1 items-center text-primary-500",
                                    to: article._path
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, "learn more"),
                                      createVNode(_component_Icon, {
                                        name: "ic:baseline-arrow-right-alt",
                                        class: "text-sm"
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])
                                ])
                              ])
                            ]);
                          }), 128))
                        ];
                      }
                    }),
                    "not-found": withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>No articles found.</p>`);
                      } else {
                        return [
                          createVNode("p", null, "No articles found.")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ContentList, { path: "/post" }, {
                      default: withCtx(({ list }) => [
                        (openBlock(true), createBlock(Fragment, null, renderList(list, (article) => {
                          return openBlock(), createBlock("div", {
                            key: article._path,
                            class: "hover:no-underline p-6 flex space-x-6 rounded border border-gray-900/10 dark:border-gray-50/[0.2] mb-4"
                          }, [
                            createVNode("div", { class: "mt-1 text-gray-600 dark:text-gray-400 text-right" }, [
                              createVNode("div", null, toDisplayString(article.date), 1),
                              createVNode(_component_AwesomeLink, {
                                class: "text-sm flex items-center justify-end space-x-1",
                                href: `https://www.github.com/${article.author}`
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: "mdi:github-face",
                                    class: "text-xs"
                                  }),
                                  createVNode("span", null, toDisplayString(article.author), 1)
                                ]),
                                _: 2
                              }, 1032, ["href"])
                            ]),
                            createVNode("div", { class: "flex flex-col" }, [
                              createVNode("div", { class: "text-xl font-semibold text-gray-800 dark:text-gray-50" }, toDisplayString(article.title), 1),
                              createVNode("div", { class: "text-gray-700 dark:text-gray-300 mb-1" }, toDisplayString(article.description), 1),
                              createVNode("div", { class: "flex" }, [
                                createVNode(_component_AwesomeLink, {
                                  class: "text-sm flex space-x-1 items-center text-primary-500",
                                  to: article._path
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, "learn more"),
                                    createVNode(_component_Icon, {
                                      name: "ic:baseline-arrow-right-alt",
                                      class: "text-sm"
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["to"])
                              ])
                            ])
                          ]);
                        }), 128))
                      ]),
                      "not-found": withCtx(() => [
                        createVNode("p", null, "No articles found.")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_LayoutPageHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_LayoutPageTitle, {
                    text: "Posts",
                    class: "capitalize"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_LayoutPageSection, null, {
                default: withCtx(() => [
                  createVNode(_component_ContentList, { path: "/post" }, {
                    default: withCtx(({ list }) => [
                      (openBlock(true), createBlock(Fragment, null, renderList(list, (article) => {
                        return openBlock(), createBlock("div", {
                          key: article._path,
                          class: "hover:no-underline p-6 flex space-x-6 rounded border border-gray-900/10 dark:border-gray-50/[0.2] mb-4"
                        }, [
                          createVNode("div", { class: "mt-1 text-gray-600 dark:text-gray-400 text-right" }, [
                            createVNode("div", null, toDisplayString(article.date), 1),
                            createVNode(_component_AwesomeLink, {
                              class: "text-sm flex items-center justify-end space-x-1",
                              href: `https://www.github.com/${article.author}`
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Icon, {
                                  name: "mdi:github-face",
                                  class: "text-xs"
                                }),
                                createVNode("span", null, toDisplayString(article.author), 1)
                              ]),
                              _: 2
                            }, 1032, ["href"])
                          ]),
                          createVNode("div", { class: "flex flex-col" }, [
                            createVNode("div", { class: "text-xl font-semibold text-gray-800 dark:text-gray-50" }, toDisplayString(article.title), 1),
                            createVNode("div", { class: "text-gray-700 dark:text-gray-300 mb-1" }, toDisplayString(article.description), 1),
                            createVNode("div", { class: "flex" }, [
                              createVNode(_component_AwesomeLink, {
                                class: "text-sm flex space-x-1 items-center text-primary-500",
                                to: article._path
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, "learn more"),
                                  createVNode(_component_Icon, {
                                    name: "ic:baseline-arrow-right-alt",
                                    class: "text-sm"
                                  })
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ])
                          ])
                        ]);
                      }), 128))
                    ]),
                    "not-found": withCtx(() => [
                      createVNode("p", null, "No articles found.")
                    ]),
                    _: 1
                  })
                ]),
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/post/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-6b95a999.mjs.map
