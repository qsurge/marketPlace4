import { defineComponent, ref, h, computed, onMounted, onUnmounted, watchEffect, watch, provide, normalizeClass, unref, withCtx, createVNode, renderSlot, openBlock, createBlock, createCommentVNode, useSSRContext, inject } from 'vue';
import { N as N$1, C, S, t, u, o, c, l as l$1, a as c$1, H, p, T } from './open-closed-6ea9de77.mjs';
import __nuxt_component_6 from './Group-e341acbd.mjs';
import _sfc_main$1 from './ItemButton-d54c665d.mjs';
import { ssrRenderTeleport, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import './_plugin-vue_export-helper-cc2b3d55.mjs';

function l(r2) {
  let e = { called: false };
  return (...t2) => {
    if (!e.called)
      return e.called = true, r2(...t2);
  };
}
function r() {
  let n = [], s = { addEventListener(e, t2, i, a) {
    return e.addEventListener(t2, i, a), s.add(() => e.removeEventListener(t2, i, a));
  }, requestAnimationFrame(...e) {
    let t2 = requestAnimationFrame(...e);
    s.add(() => cancelAnimationFrame(t2));
  }, nextFrame(...e) {
    s.requestAnimationFrame(() => {
      s.requestAnimationFrame(...e);
    });
  }, setTimeout(...e) {
    let t2 = setTimeout(...e);
    s.add(() => clearTimeout(t2));
  }, style(e, t2, i) {
    let a = e.style.getPropertyValue(t2);
    return Object.assign(e.style, { [t2]: i }), this.add(() => {
      Object.assign(e.style, { [t2]: a });
    });
  }, group(e) {
    let t2 = r();
    return e(t2), this.add(() => t2.dispose());
  }, add(e) {
    return n.push(e), () => {
      let t2 = n.indexOf(e);
      if (t2 >= 0)
        for (let i of n.splice(t2, 1))
          i();
    };
  }, dispose() {
    for (let e of n.splice(0))
      e();
  } };
  return s;
}
function m(e, ...t2) {
  e && t2.length > 0 && e.classList.add(...t2);
}
function d(e, ...t2) {
  e && t2.length > 0 && e.classList.remove(...t2);
}
var g$1 = ((i) => (i.Finished = "finished", i.Cancelled = "cancelled", i))(g$1 || {});
function F(e, t2) {
  let i = r();
  if (!e)
    return i.dispose;
  let { transitionDuration: n, transitionDelay: a } = getComputedStyle(e), [l2, s] = [n, a].map((o2) => {
    let [u2 = 0] = o2.split(",").filter(Boolean).map((r2) => r2.includes("ms") ? parseFloat(r2) : parseFloat(r2) * 1e3).sort((r2, c2) => c2 - r2);
    return u2;
  });
  return l2 !== 0 ? i.setTimeout(() => t2("finished"), l2 + s) : t2("finished"), i.add(() => t2("cancelled")), i.dispose;
}
function L$1(e, t2, i, n, a, l$12) {
  let s = r(), o2 = l$12 !== void 0 ? l(l$12) : () => {
  };
  return d(e, ...a), m(e, ...t2, ...i), s.nextFrame(() => {
    d(e, ...i), m(e, ...n), s.add(F(e, (u2) => (d(e, ...n, ...t2), m(e, ...a), o2(u2))));
  }), s.add(() => d(e, ...t2, ...i, ...n, ...a)), s.add(() => o2("cancelled")), s.dispose;
}
function g(e = "") {
  return e.split(" ").filter((t2) => t2.trim().length > 1);
}
let R = Symbol("TransitionContext");
var pe = ((a) => (a.Visible = "visible", a.Hidden = "hidden", a))(pe || {});
function me() {
  return inject(R, null) !== null;
}
function Te() {
  let e = inject(R, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function ge() {
  let e = inject(N, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let N = Symbol("NestingContext");
function L(e) {
  return "children" in e ? L(e.children) : e.value.filter(({ state: t2 }) => t2 === "visible").length > 0;
}
function Q(e) {
  let t2 = ref([]), a = ref(false);
  onMounted(() => a.value = true), onUnmounted(() => a.value = false);
  function s(n, r2 = S.Hidden) {
    let l2 = t2.value.findIndex(({ id: f }) => f === n);
    l2 !== -1 && (u(r2, { [S.Unmount]() {
      t2.value.splice(l2, 1);
    }, [S.Hidden]() {
      t2.value[l2].state = "hidden";
    } }), !L(t2) && a.value && (e == null || e()));
  }
  function h2(n) {
    let r2 = t2.value.find(({ id: l2 }) => l2 === n);
    return r2 ? r2.state !== "visible" && (r2.state = "visible") : t2.value.push({ id: n, state: "visible" }), () => s(n, S.Unmount);
  }
  return { children: t2, register: h2, unregister: s };
}
let W = N$1.RenderStrategy, he = defineComponent({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e, { emit: t$1, attrs: a, slots: s, expose: h$1 }) {
  let n = ref(0);
  function r2() {
    n.value |= l$1.Opening, t$1("beforeEnter");
  }
  function l2() {
    n.value &= ~l$1.Opening, t$1("afterEnter");
  }
  function f() {
    n.value |= l$1.Closing, t$1("beforeLeave");
  }
  function S$1() {
    n.value &= ~l$1.Closing, t$1("afterLeave");
  }
  if (!me() && C())
    return () => h(Se, { ...e, onBeforeEnter: r2, onAfterEnter: l2, onBeforeLeave: f, onAfterLeave: S$1 }, s);
  let d2 = ref(null), b = computed(() => e.unmount ? S.Unmount : S.Hidden);
  h$1({ el: d2, $el: d2 });
  let { show: v, appear: A } = Te(), { register: D, unregister: H$1 } = ge(), i = ref(v.value ? "visible" : "hidden"), I = { value: true }, c$2 = t(), y = { value: false }, P = Q(() => {
    !y.value && i.value !== "hidden" && (i.value = "hidden", H$1(c$2), S$1());
  });
  onMounted(() => {
    let o2 = D(c$2);
    onUnmounted(o2);
  }), watchEffect(() => {
    if (b.value === S.Hidden && c$2) {
      if (v.value && i.value !== "visible") {
        i.value = "visible";
        return;
      }
      u(i.value, { ["hidden"]: () => H$1(c$2), ["visible"]: () => D(c$2) });
    }
  });
  let j = g(e.enter), M = g(e.enterFrom), X = g(e.enterTo), _ = g(e.entered), Y = g(e.leave), Z = g(e.leaveFrom), ee = g(e.leaveTo);
  onMounted(() => {
    watchEffect(() => {
      if (i.value === "visible") {
        let o$1 = o(d2);
        if (o$1 instanceof Comment && o$1.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function te(o$1) {
    let E = I.value && !A.value, p2 = o(d2);
    !p2 || !(p2 instanceof HTMLElement) || E || (y.value = true, v.value && r2(), v.value || f(), o$1(v.value ? L$1(p2, j, M, X, _, (V) => {
      y.value = false, V === g$1.Finished && l2();
    }) : L$1(p2, Y, Z, ee, _, (V) => {
      y.value = false, V === g$1.Finished && (L(P) || (i.value = "hidden", H$1(c$2), S$1()));
    })));
  }
  return onMounted(() => {
    watch([v], (o2, E, p2) => {
      te(p2), I.value = false;
    }, { immediate: true });
  }), provide(N, P), c(computed(() => u(i.value, { ["visible"]: l$1.Open, ["hidden"]: l$1.Closed }) | n.value)), () => {
    let { appear: o2, show: E, enter: p2, enterFrom: V, enterTo: Ce, entered: be, leave: ye, leaveFrom: Ee, leaveTo: Ve, ...U } = e, ne = { ref: d2 }, re = { ...U, ...A.value && v.value && c$1.isServer ? { class: normalizeClass([a.class, U.class, ...j, ...M]) } : {} };
    return H({ theirProps: re, ourProps: ne, slot: {}, slots: s, attrs: a, features: W, visible: i.value === "visible", name: "TransitionChild" });
  };
} }), ce = he, Se = defineComponent({ inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e, { emit: t2, attrs: a, slots: s }) {
  let h$1 = p(), n = computed(() => e.show === null && h$1 !== null ? (h$1.value & l$1.Open) === l$1.Open : e.show);
  watchEffect(() => {
    if (![true, false].includes(n.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r2 = ref(n.value ? "visible" : "hidden"), l2 = Q(() => {
    r2.value = "hidden";
  }), f = ref(true), S2 = { show: n, appear: computed(() => e.appear || !f.value) };
  return onMounted(() => {
    watchEffect(() => {
      f.value = false, n.value ? r2.value = "visible" : L(l2) || (r2.value = "hidden");
    });
  }), provide(N, l2), provide(R, S2), () => {
    let d2 = T(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), b = { unmount: e.unmount };
    return H({ ourProps: { ...b, as: "template" }, theirProps: {}, slot: {}, slots: { ...s, default: () => [h(ce, { onBeforeEnter: () => t2("beforeEnter"), onAfterEnter: () => t2("afterEnter"), onBeforeLeave: () => t2("beforeLeave"), onAfterLeave: () => t2("afterLeave"), ...a, ...b, ...d2 }, s.default)] }, attrs: {}, features: W, visible: r2.value === "visible", name: "Transition" });
  };
} });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    closeButton: {
      type: Boolean,
      default: true
    },
    closeButtonText: {
      type: String,
      default: "Cancel"
    }
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const isShow = ref(false);
    const close = (e) => {
      isShow.value = false;
      setTimeout(() => emit("close", e), 300);
    };
    const onCloseComponentClick = (e) => {
      const acceptedClasses = ["action-sheet", "action-sheet-container"];
      const target = e.target;
      const targetClassList = target.classList;
      for (const acceptedClass of acceptedClasses) {
        if (targetClassList.contains(acceptedClass)) {
          close(e);
          break;
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeadlessTransitionRoot = Se;
      const _component_AwesomeActionSheetGroup = __nuxt_component_6;
      const _component_AwesomeActionSheetItemButton = _sfc_main$1;
      ssrRenderTeleport(_push, (_push2) => {
        _push2(ssrRenderComponent(_component_HeadlessTransitionRoot, {
          show: unref(isShow),
          class: "action-sheet fixed z-50 top-0 left-0 w-screen h-screen max-h-screen max-w-full flex flex-col justify-end bg-black/[0.5]",
          enter: "transition-opacity duration-300",
          "enter-from": "opacity-0",
          "enter-to": "opacity-100",
          leave: "transition-opacity duration-300",
          "leave-from": "opacity-100",
          "leave-to": "opacity-0",
          onClick: onCloseComponentClick
        }, {
          default: withCtx((_, _push3, _parent2, _scopeId) => {
            if (_push3) {
              _push3(`<div class="flex flex-col overflow-hidden relative"${_scopeId}><div class="action-sheet-container flex-1 overflow-y-auto space-y-1 justify-end px-4 pb-2 pt-4"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent2, _scopeId);
              if (__props.closeButton) {
                _push3(ssrRenderComponent(_component_AwesomeActionSheetGroup, null, {
                  default: withCtx((_2, _push4, _parent3, _scopeId2) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_AwesomeActionSheetItemButton, {
                        class: "text-red-500 font-bold",
                        text: __props.closeButtonText,
                        onClick: close
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_AwesomeActionSheetItemButton, {
                          class: "text-red-500 font-bold",
                          text: __props.closeButtonText,
                          onClick: close
                        }, null, 8, ["text"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push3(`<!---->`);
              }
              _push3(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col overflow-hidden relative" }, [
                  createVNode("div", { class: "action-sheet-container flex-1 overflow-y-auto space-y-1 justify-end px-4 pb-2 pt-4" }, [
                    renderSlot(_ctx.$slots, "default"),
                    __props.closeButton ? (openBlock(), createBlock(_component_AwesomeActionSheetGroup, { key: 0 }, {
                      default: withCtx(() => [
                        createVNode(_component_AwesomeActionSheetItemButton, {
                          class: "text-red-500 font-bold",
                          text: __props.closeButtonText,
                          onClick: close
                        }, null, 8, ["text"])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ])
                ])
              ];
            }
          }),
          _: 3
        }, _parent));
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/awesome/ActionSheet/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-5292284a.mjs.map
