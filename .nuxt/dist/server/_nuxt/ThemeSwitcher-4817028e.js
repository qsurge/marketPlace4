import { ref, computed, defineComponent, provide, onMounted, watch, h as h$1, Fragment, onUnmounted, watchEffect, nextTick, inject, toRaw, toRef, mergeProps, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, renderList, useSSRContext } from "vue";
import { o as o$1, u as u$1, c, l, K, H, T, t, p as p$1, N } from "./open-closed-6ea9de77.js";
import { y, c as w, h, f as f$2, a as a$2, b, O, o as o$2 } from "./hidden-6a6c0b28.js";
import _sfc_main$1 from "./index-4fdbba8f.js";
import __nuxt_component_0 from "./Icon-c19bf7f4.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import "./nuxt-link-f805a121.js";
import "ufo";
import "hookable";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "klona";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "ohash";
import "cookie-es";
import "defu";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "./_plugin-vue_export-helper-cc2b3d55.js";
function f$1(r2) {
  throw new Error("Unexpected object: " + r2);
}
var a$1 = ((e2) => (e2[e2.First = 0] = "First", e2[e2.Previous = 1] = "Previous", e2[e2.Next = 2] = "Next", e2[e2.Last = 3] = "Last", e2[e2.Specific = 4] = "Specific", e2[e2.Nothing = 5] = "Nothing", e2))(a$1 || {});
function x(r2, n) {
  let t2 = n.resolveItems();
  if (t2.length <= 0)
    return null;
  let l2 = n.resolveActiveIndex(), s2 = l2 != null ? l2 : -1, d2 = (() => {
    switch (r2.focus) {
      case 0:
        return t2.findIndex((e2) => !n.resolveDisabled(e2));
      case 1: {
        let e2 = t2.slice().reverse().findIndex((i, c2, u2) => s2 !== -1 && u2.length - c2 - 1 >= s2 ? false : !n.resolveDisabled(i));
        return e2 === -1 ? e2 : t2.length - 1 - e2;
      }
      case 2:
        return t2.findIndex((e2, i) => i <= s2 ? false : !n.resolveDisabled(e2));
      case 3: {
        let e2 = t2.slice().reverse().findIndex((i) => !n.resolveDisabled(i));
        return e2 === -1 ? e2 : t2.length - 1 - e2;
      }
      case 4:
        return t2.findIndex((e2) => n.resolveId(e2) === r2.id);
      case 5:
        return null;
      default:
        f$1(r2);
    }
  })();
  return d2 === -1 ? l2 : d2;
}
function e(n = {}, r2 = null, t2 = []) {
  for (let [i, o2] of Object.entries(n))
    f(t2, s(r2, i), o2);
  return t2;
}
function s(n, r2) {
  return n ? n + "[" + r2 + "]" : r2;
}
function f(n, r2, t2) {
  if (Array.isArray(t2))
    for (let [i, o2] of t2.entries())
      f(n, s(r2, i.toString()), o2);
  else
    t2 instanceof Date ? n.push([r2, t2.toISOString()]) : typeof t2 == "boolean" ? n.push([r2, t2 ? "1" : "0"]) : typeof t2 == "string" ? n.push([r2, t2]) : typeof t2 == "number" ? n.push([r2, `${t2}`]) : t2 == null ? n.push([r2, ""]) : e(t2, r2, n);
}
function d(u2, e2, r2) {
  let i = ref(r2 == null ? void 0 : r2.value), f2 = computed(() => u2.value !== void 0);
  return [computed(() => f2.value ? u2.value : i.value), function(t2) {
    return f2.value || (i.value = t2), e2 == null ? void 0 : e2(t2);
  }];
}
function r(e2) {
  return [e2.screenX, e2.screenY];
}
function u() {
  let e2 = ref([-1, -1]);
  return { wasMoved(n) {
    let t2 = r(n);
    return e2.value[0] === t2[0] && e2.value[1] === t2[1] ? false : (e2.value = t2, true);
  }, update(n) {
    e2.value = r(n);
  } };
}
let a = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o(e2) {
  var r2, i;
  let n = (r2 = e2.innerText) != null ? r2 : "", t2 = e2.cloneNode(true);
  if (!(t2 instanceof HTMLElement))
    return n;
  let u2 = false;
  for (let f2 of t2.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    f2.remove(), u2 = true;
  let l2 = u2 ? (i = t2.innerText) != null ? i : "" : n;
  return a.test(l2) && (l2 = l2.replace(a, "")), l2;
}
function g(e2) {
  let n = e2.getAttribute("aria-label");
  if (typeof n == "string")
    return n.trim();
  let t2 = e2.getAttribute("aria-labelledby");
  if (t2) {
    let u2 = t2.split(" ").map((l2) => {
      let r2 = document.getElementById(l2);
      if (r2) {
        let i = r2.getAttribute("aria-label");
        return typeof i == "string" ? i.trim() : o(r2).trim();
      }
      return null;
    }).filter(Boolean);
    if (u2.length > 0)
      return u2.join(", ");
  }
  return o(e2).trim();
}
function p(a2) {
  let t2 = ref(""), r2 = ref("");
  return () => {
    let e2 = o$1(a2);
    if (!e2)
      return "";
    let l2 = e2.innerText;
    if (t2.value === l2)
      return r2.value;
    let u2 = g(e2).trim().toLowerCase();
    return t2.value = l2, r2.value = u2, u2;
  };
}
function fe(t2, v) {
  return t2 === v;
}
var pe = ((u2) => (u2[u2.Open = 0] = "Open", u2[u2.Closed = 1] = "Closed", u2))(pe || {}), ce = ((u2) => (u2[u2.Single = 0] = "Single", u2[u2.Multi = 1] = "Multi", u2))(ce || {}), ve = ((u2) => (u2[u2.Pointer = 0] = "Pointer", u2[u2.Other = 1] = "Other", u2))(ve || {});
function be(t2) {
  requestAnimationFrame(() => requestAnimationFrame(t2));
}
let U = Symbol("ListboxContext");
function j(t2) {
  let v = inject(U, null);
  if (v === null) {
    let u2 = new Error(`<${t2} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u2, j), u2;
  }
  return v;
}
let Fe = defineComponent({ name: "Listbox", emits: { "update:modelValue": (t2) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], default: () => fe }, horizontal: { type: [Boolean], default: false }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: true }, name: { type: String, optional: true }, multiple: { type: [Boolean], default: false } }, inheritAttrs: false, setup(t2, { slots: v, attrs: u2, emit: L }) {
  let e$1 = ref(1), s2 = ref(null), b2 = ref(null), m = ref(null), f2 = ref([]), o2 = ref(""), a2 = ref(null), w$1 = ref(1);
  function k(i = (n) => n) {
    let n = a2.value !== null ? f2.value[a2.value] : null, l2 = O(i(f2.value.slice()), (x2) => o$1(x2.dataRef.domRef)), d2 = n ? l2.indexOf(n) : null;
    return d2 === -1 && (d2 = null), { options: l2, activeOptionIndex: d2 };
  }
  let g2 = computed(() => t2.multiple ? 1 : 0), [y$1, M] = d(computed(() => t2.modelValue === void 0 ? u$1(g2.value, { [1]: [], [0]: void 0 }) : t2.modelValue), (i) => L("update:modelValue", i), computed(() => t2.defaultValue)), h$2 = { listboxState: e$1, value: y$1, mode: g2, compare(i, n) {
    if (typeof t2.by == "string") {
      let l2 = t2.by;
      return (i == null ? void 0 : i[l2]) === (n == null ? void 0 : n[l2]);
    }
    return t2.by(i, n);
  }, orientation: computed(() => t2.horizontal ? "horizontal" : "vertical"), labelRef: s2, buttonRef: b2, optionsRef: m, disabled: computed(() => t2.disabled), options: f2, searchQuery: o2, activeOptionIndex: a2, activationTrigger: w$1, closeListbox() {
    t2.disabled || e$1.value !== 1 && (e$1.value = 1, a2.value = null);
  }, openListbox() {
    t2.disabled || e$1.value !== 0 && (e$1.value = 0);
  }, goToOption(i, n, l2) {
    if (t2.disabled || e$1.value === 1)
      return;
    let d2 = k(), x$1 = x(i === a$1.Specific ? { focus: a$1.Specific, id: n } : { focus: i }, { resolveItems: () => d2.options, resolveActiveIndex: () => d2.activeOptionIndex, resolveId: (R) => R.id, resolveDisabled: (R) => R.dataRef.disabled });
    o2.value = "", a2.value = x$1, w$1.value = l2 != null ? l2 : 1, f2.value = d2.options;
  }, search(i) {
    if (t2.disabled || e$1.value === 1)
      return;
    let l2 = o2.value !== "" ? 0 : 1;
    o2.value += i.toLowerCase();
    let x2 = (a2.value !== null ? f2.value.slice(a2.value + l2).concat(f2.value.slice(0, a2.value + l2)) : f2.value).find((V) => V.dataRef.textValue.startsWith(o2.value) && !V.dataRef.disabled), R = x2 ? f2.value.indexOf(x2) : -1;
    R === -1 || R === a2.value || (a2.value = R, w$1.value = 1);
  }, clearSearch() {
    t2.disabled || e$1.value !== 1 && o2.value !== "" && (o2.value = "");
  }, registerOption(i, n) {
    let l2 = k((d2) => [...d2, { id: i, dataRef: n }]);
    f2.value = l2.options, a2.value = l2.activeOptionIndex;
  }, unregisterOption(i) {
    let n = k((l2) => {
      let d2 = l2.findIndex((x2) => x2.id === i);
      return d2 !== -1 && l2.splice(d2, 1), l2;
    });
    f2.value = n.options, a2.value = n.activeOptionIndex, w$1.value = 1;
  }, select(i) {
    t2.disabled || M(u$1(g2.value, { [0]: () => i, [1]: () => {
      let n = toRaw(h$2.value.value).slice(), l2 = toRaw(i), d2 = n.findIndex((x2) => h$2.compare(l2, toRaw(x2)));
      return d2 === -1 ? n.push(l2) : n.splice(d2, 1), n;
    } }));
  } };
  y([b2, m], (i, n) => {
    var l2;
    h$2.closeListbox(), w(n, h.Loose) || (i.preventDefault(), (l2 = o$1(b2)) == null || l2.focus());
  }, computed(() => e$1.value === 0)), provide(U, h$2), c(computed(() => u$1(e$1.value, { [0]: l.Open, [1]: l.Closed })));
  let r2 = computed(() => {
    var i;
    return (i = o$1(b2)) == null ? void 0 : i.closest("form");
  });
  return onMounted(() => {
    watch([r2], () => {
      if (!r2.value || t2.defaultValue === void 0)
        return;
      function i() {
        h$2.select(t2.defaultValue);
      }
      return r2.value.addEventListener("reset", i), () => {
        var n;
        (n = r2.value) == null || n.removeEventListener("reset", i);
      };
    }, { immediate: true });
  }), () => {
    let { name: i, modelValue: n, disabled: l2, form: d2, ...x2 } = t2, R = { open: e$1.value === 0, disabled: l2, value: y$1.value };
    return h$1(Fragment, [...i != null && y$1.value != null ? e({ [i]: y$1.value }).map(([V, $]) => h$1(f$2, K({ features: a$2.Hidden, key: V, as: "input", type: "hidden", hidden: true, readOnly: true, form: d2, name: V, value: $ }))) : [], H({ ourProps: {}, theirProps: { ...u2, ...T(x2, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: R, slots: v, attrs: u2, name: "Listbox" })]);
  };
} }), Be = defineComponent({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-listbox-label-${t()}` } }, setup(t2, { attrs: v, slots: u2 }) {
  let L = j("ListboxLabel");
  function e2() {
    var s2;
    (s2 = o$1(L.buttonRef)) == null || s2.focus({ preventScroll: true });
  }
  return () => {
    let s2 = { open: L.listboxState.value === 0, disabled: L.disabled.value }, { id: b2, ...m } = t2, f2 = { id: b2, ref: L.labelRef, onClick: e2 };
    return H({ ourProps: f2, theirProps: m, slot: s2, attrs: v, slots: u2, name: "ListboxLabel" });
  };
} }), Ke = defineComponent({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-listbox-button-${t()}` } }, setup(t2, { attrs: v, slots: u2, expose: L }) {
  let e2 = j("ListboxButton");
  L({ el: e2.buttonRef, $el: e2.buttonRef });
  function s2(o2) {
    switch (o2.key) {
      case o$2.Space:
      case o$2.Enter:
      case o$2.ArrowDown:
        o2.preventDefault(), e2.openListbox(), nextTick(() => {
          var a2;
          (a2 = o$1(e2.optionsRef)) == null || a2.focus({ preventScroll: true }), e2.value.value || e2.goToOption(a$1.First);
        });
        break;
      case o$2.ArrowUp:
        o2.preventDefault(), e2.openListbox(), nextTick(() => {
          var a2;
          (a2 = o$1(e2.optionsRef)) == null || a2.focus({ preventScroll: true }), e2.value.value || e2.goToOption(a$1.Last);
        });
        break;
    }
  }
  function b$1(o2) {
    switch (o2.key) {
      case o$2.Space:
        o2.preventDefault();
        break;
    }
  }
  function m(o2) {
    e2.disabled.value || (e2.listboxState.value === 0 ? (e2.closeListbox(), nextTick(() => {
      var a2;
      return (a2 = o$1(e2.buttonRef)) == null ? void 0 : a2.focus({ preventScroll: true });
    })) : (o2.preventDefault(), e2.openListbox(), be(() => {
      var a2;
      return (a2 = o$1(e2.optionsRef)) == null ? void 0 : a2.focus({ preventScroll: true });
    })));
  }
  let f2 = b(computed(() => ({ as: t2.as, type: v.type })), e2.buttonRef);
  return () => {
    var g2, y2;
    let o2 = { open: e2.listboxState.value === 0, disabled: e2.disabled.value, value: e2.value.value }, { id: a2, ...w2 } = t2, k = { ref: e2.buttonRef, id: a2, type: f2.value, "aria-haspopup": "listbox", "aria-controls": (g2 = o$1(e2.optionsRef)) == null ? void 0 : g2.id, "aria-expanded": e2.listboxState.value === 0, "aria-labelledby": e2.labelRef.value ? [(y2 = o$1(e2.labelRef)) == null ? void 0 : y2.id, a2].join(" ") : void 0, disabled: e2.disabled.value === true ? true : void 0, onKeydown: s2, onKeyup: b$1, onClick: m };
    return H({ ourProps: k, theirProps: w2, slot: o2, attrs: v, slots: u2, name: "ListboxButton" });
  };
} }), Ne = defineComponent({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: () => `headlessui-listbox-options-${t()}` } }, setup(t2, { attrs: v, slots: u2, expose: L }) {
  let e2 = j("ListboxOptions"), s2 = ref(null);
  L({ el: e2.optionsRef, $el: e2.optionsRef });
  function b2(o2) {
    switch (s2.value && clearTimeout(s2.value), o2.key) {
      case o$2.Space:
        if (e2.searchQuery.value !== "")
          return o2.preventDefault(), o2.stopPropagation(), e2.search(o2.key);
      case o$2.Enter:
        if (o2.preventDefault(), o2.stopPropagation(), e2.activeOptionIndex.value !== null) {
          let a2 = e2.options.value[e2.activeOptionIndex.value];
          e2.select(a2.dataRef.value);
        }
        e2.mode.value === 0 && (e2.closeListbox(), nextTick(() => {
          var a2;
          return (a2 = o$1(e2.buttonRef)) == null ? void 0 : a2.focus({ preventScroll: true });
        }));
        break;
      case u$1(e2.orientation.value, { vertical: o$2.ArrowDown, horizontal: o$2.ArrowRight }):
        return o2.preventDefault(), o2.stopPropagation(), e2.goToOption(a$1.Next);
      case u$1(e2.orientation.value, { vertical: o$2.ArrowUp, horizontal: o$2.ArrowLeft }):
        return o2.preventDefault(), o2.stopPropagation(), e2.goToOption(a$1.Previous);
      case o$2.Home:
      case o$2.PageUp:
        return o2.preventDefault(), o2.stopPropagation(), e2.goToOption(a$1.First);
      case o$2.End:
      case o$2.PageDown:
        return o2.preventDefault(), o2.stopPropagation(), e2.goToOption(a$1.Last);
      case o$2.Escape:
        o2.preventDefault(), o2.stopPropagation(), e2.closeListbox(), nextTick(() => {
          var a2;
          return (a2 = o$1(e2.buttonRef)) == null ? void 0 : a2.focus({ preventScroll: true });
        });
        break;
      case o$2.Tab:
        o2.preventDefault(), o2.stopPropagation();
        break;
      default:
        o2.key.length === 1 && (e2.search(o2.key), s2.value = setTimeout(() => e2.clearSearch(), 350));
        break;
    }
  }
  let m = p$1(), f2 = computed(() => m !== null ? (m.value & l.Open) === l.Open : e2.listboxState.value === 0);
  return () => {
    var g2, y2, M, h2;
    let o2 = { open: e2.listboxState.value === 0 }, { id: a2, ...w2 } = t2, k = { "aria-activedescendant": e2.activeOptionIndex.value === null || (g2 = e2.options.value[e2.activeOptionIndex.value]) == null ? void 0 : g2.id, "aria-multiselectable": e2.mode.value === 1 ? true : void 0, "aria-labelledby": (h2 = (y2 = o$1(e2.labelRef)) == null ? void 0 : y2.id) != null ? h2 : (M = o$1(e2.buttonRef)) == null ? void 0 : M.id, "aria-orientation": e2.orientation.value, id: a2, onKeydown: b2, role: "listbox", tabIndex: 0, ref: e2.optionsRef };
    return H({ ourProps: k, theirProps: w2, slot: o2, attrs: v, slots: u2, features: N.RenderStrategy | N.Static, visible: f2.value, name: "ListboxOptions" });
  };
} }), He = defineComponent({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, id: { type: String, default: () => `headlessui-listbox.option-${t()}` } }, setup(t2, { slots: v, attrs: u$2, expose: L }) {
  let e2 = j("ListboxOption"), s2 = ref(null);
  L({ el: s2, $el: s2 });
  let b2 = computed(() => e2.activeOptionIndex.value !== null ? e2.options.value[e2.activeOptionIndex.value].id === t2.id : false), m = computed(() => u$1(e2.mode.value, { [0]: () => e2.compare(toRaw(e2.value.value), toRaw(t2.value)), [1]: () => toRaw(e2.value.value).some((r2) => e2.compare(toRaw(r2), toRaw(t2.value))) })), f2 = computed(() => u$1(e2.mode.value, { [1]: () => {
    var i;
    let r2 = toRaw(e2.value.value);
    return ((i = e2.options.value.find((n) => r2.some((l2) => e2.compare(toRaw(l2), toRaw(n.dataRef.value))))) == null ? void 0 : i.id) === t2.id;
  }, [0]: () => m.value })), o2 = p(s2), a2 = computed(() => ({ disabled: t2.disabled, value: t2.value, get textValue() {
    return o2();
  }, domRef: s2 }));
  onMounted(() => e2.registerOption(t2.id, a2)), onUnmounted(() => e2.unregisterOption(t2.id)), onMounted(() => {
    watch([e2.listboxState, m], () => {
      e2.listboxState.value === 0 && m.value && u$1(e2.mode.value, { [1]: () => {
        f2.value && e2.goToOption(a$1.Specific, t2.id);
      }, [0]: () => {
        e2.goToOption(a$1.Specific, t2.id);
      } });
    }, { immediate: true });
  }), watchEffect(() => {
    e2.listboxState.value === 0 && b2.value && e2.activationTrigger.value !== 0 && nextTick(() => {
      var r2, i;
      return (i = (r2 = o$1(s2)) == null ? void 0 : r2.scrollIntoView) == null ? void 0 : i.call(r2, { block: "nearest" });
    });
  });
  function w2(r2) {
    if (t2.disabled)
      return r2.preventDefault();
    e2.select(t2.value), e2.mode.value === 0 && (e2.closeListbox(), nextTick(() => {
      var i;
      return (i = o$1(e2.buttonRef)) == null ? void 0 : i.focus({ preventScroll: true });
    }));
  }
  function k() {
    if (t2.disabled)
      return e2.goToOption(a$1.Nothing);
    e2.goToOption(a$1.Specific, t2.id);
  }
  let g2 = u();
  function y2(r2) {
    g2.update(r2);
  }
  function M(r2) {
    g2.wasMoved(r2) && (t2.disabled || b2.value || e2.goToOption(a$1.Specific, t2.id, 0));
  }
  function h2(r2) {
    g2.wasMoved(r2) && (t2.disabled || b2.value && e2.goToOption(a$1.Nothing));
  }
  return () => {
    let { disabled: r2 } = t2, i = { active: b2.value, selected: m.value, disabled: r2 }, { id: n, value: l2, disabled: d2, ...x2 } = t2, R = { id: n, ref: s2, role: "option", tabIndex: r2 === true ? void 0 : -1, "aria-disabled": r2 === true ? true : void 0, "aria-selected": m.value, disabled: void 0, onClick: w2, onFocus: k, onPointerenter: y2, onMouseenter: y2, onPointermove: M, onMousemove: M, onPointerleave: h2, onMouseleave: h2 };
    return H({ ourProps: R, theirProps: x2, slot: i, attrs: u$2, slots: v, name: "ListboxOption" });
  };
} });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ThemeSwitcher",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "dropdown-right-top"
    }
  },
  setup(__props) {
    const props = __props;
    const currentStyle = toRef(props, "type");
    const availableThemes = [
      {
        key: "light",
        text: "Light"
      },
      {
        key: "dark",
        text: "Dark"
      },
      {
        key: "system",
        text: "System"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeadlessListbox = Fe;
      const _component_HeadlessListboxLabel = Be;
      const _component_HeadlessListboxButton = Ke;
      const _component_AwesomeLink = _sfc_main$1;
      const _component_Icon = __nuxt_component_0;
      const _component_HeadlessListboxOptions = Ne;
      const _component_HeadlessListboxOption = He;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center" }, _attrs))}>`);
      if (unref(currentStyle) === "dropdown-right-top") {
        _push(ssrRenderComponent(_component_HeadlessListbox, {
          modelValue: _ctx.$colorMode.preference,
          "onUpdate:modelValue": ($event) => _ctx.$colorMode.preference = $event,
          as: "div",
          class: "relative flex items-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_HeadlessListboxLabel, { class: "sr-only" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Theme`);
                  } else {
                    return [
                      createTextVNode("Theme")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_HeadlessListboxButton, { type: "template" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_AwesomeLink, { class: "dark:text-gray-400 text-gray-600" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="flex justify-center items-center dark:hidden"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_Icon, { name: "uil:sun" }, null, _parent4, _scopeId3));
                          _push4(`</span><span class="justify-center items-center hidden dark:flex"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_Icon, { name: "uil:moon" }, null, _parent4, _scopeId3));
                          _push4(`</span>`);
                        } else {
                          return [
                            createVNode("span", { class: "flex justify-center items-center dark:hidden" }, [
                              createVNode(_component_Icon, { name: "uil:sun" })
                            ]),
                            createVNode("span", { class: "justify-center items-center hidden dark:flex" }, [
                              createVNode(_component_Icon, { name: "uil:moon" })
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_AwesomeLink, { class: "dark:text-gray-400 text-gray-600" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "flex justify-center items-center dark:hidden" }, [
                            createVNode(_component_Icon, { name: "uil:sun" })
                          ]),
                          createVNode("span", { class: "justify-center items-center hidden dark:flex" }, [
                            createVNode(_component_Icon, { name: "uil:moon" })
                          ])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_HeadlessListboxOptions, { class: "p-1 absolute z-50 origin-top-right top-full right-0 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(availableThemes, (theme) => {
                      _push3(ssrRenderComponent(_component_HeadlessListboxOption, {
                        key: theme.key,
                        value: theme.key,
                        class: {
                          "py-2 px-2 flex items-center cursor-pointer": true,
                          "text-sky-500 bg-gray-100 dark:bg-gray-600/30": _ctx.$colorMode.preference === theme.key,
                          "hover:bg-gray-50 dark:hover:bg-gray-700/30": _ctx.$colorMode.preference !== theme.key
                        }
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span class="text-sm mr-2 flex items-center"${_scopeId3}>`);
                            if (theme.key === "light") {
                              _push4(ssrRenderComponent(_component_Icon, { name: "uil:sun" }, null, _parent4, _scopeId3));
                            } else if (theme.key === "dark") {
                              _push4(ssrRenderComponent(_component_Icon, { name: "uil:moon" }, null, _parent4, _scopeId3));
                            } else if (theme.key === "system") {
                              _push4(ssrRenderComponent(_component_Icon, { name: "uil:laptop" }, null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</span> ${ssrInterpolate(theme.text)}`);
                          } else {
                            return [
                              createVNode("span", { class: "text-sm mr-2 flex items-center" }, [
                                theme.key === "light" ? (openBlock(), createBlock(_component_Icon, {
                                  key: 0,
                                  name: "uil:sun"
                                })) : theme.key === "dark" ? (openBlock(), createBlock(_component_Icon, {
                                  key: 1,
                                  name: "uil:moon"
                                })) : theme.key === "system" ? (openBlock(), createBlock(_component_Icon, {
                                  key: 2,
                                  name: "uil:laptop"
                                })) : createCommentVNode("", true)
                              ]),
                              createTextVNode(" " + toDisplayString(theme.text), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(), createBlock(Fragment, null, renderList(availableThemes, (theme) => {
                        return createVNode(_component_HeadlessListboxOption, {
                          key: theme.key,
                          value: theme.key,
                          class: {
                            "py-2 px-2 flex items-center cursor-pointer": true,
                            "text-sky-500 bg-gray-100 dark:bg-gray-600/30": _ctx.$colorMode.preference === theme.key,
                            "hover:bg-gray-50 dark:hover:bg-gray-700/30": _ctx.$colorMode.preference !== theme.key
                          }
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-sm mr-2 flex items-center" }, [
                              theme.key === "light" ? (openBlock(), createBlock(_component_Icon, {
                                key: 0,
                                name: "uil:sun"
                              })) : theme.key === "dark" ? (openBlock(), createBlock(_component_Icon, {
                                key: 1,
                                name: "uil:moon"
                              })) : theme.key === "system" ? (openBlock(), createBlock(_component_Icon, {
                                key: 2,
                                name: "uil:laptop"
                              })) : createCommentVNode("", true)
                            ]),
                            createTextVNode(" " + toDisplayString(theme.text), 1)
                          ]),
                          _: 2
                        }, 1032, ["value", "class"]);
                      }), 64))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_HeadlessListboxLabel, { class: "sr-only" }, {
                  default: withCtx(() => [
                    createTextVNode("Theme")
                  ]),
                  _: 1
                }),
                createVNode(_component_HeadlessListboxButton, { type: "template" }, {
                  default: withCtx(() => [
                    createVNode(_component_AwesomeLink, { class: "dark:text-gray-400 text-gray-600" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "flex justify-center items-center dark:hidden" }, [
                          createVNode(_component_Icon, { name: "uil:sun" })
                        ]),
                        createVNode("span", { class: "justify-center items-center hidden dark:flex" }, [
                          createVNode(_component_Icon, { name: "uil:moon" })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_HeadlessListboxOptions, { class: "p-1 absolute z-50 origin-top-right top-full right-0 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300" }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(Fragment, null, renderList(availableThemes, (theme) => {
                      return createVNode(_component_HeadlessListboxOption, {
                        key: theme.key,
                        value: theme.key,
                        class: {
                          "py-2 px-2 flex items-center cursor-pointer": true,
                          "text-sky-500 bg-gray-100 dark:bg-gray-600/30": _ctx.$colorMode.preference === theme.key,
                          "hover:bg-gray-50 dark:hover:bg-gray-700/30": _ctx.$colorMode.preference !== theme.key
                        }
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-sm mr-2 flex items-center" }, [
                            theme.key === "light" ? (openBlock(), createBlock(_component_Icon, {
                              key: 0,
                              name: "uil:sun"
                            })) : theme.key === "dark" ? (openBlock(), createBlock(_component_Icon, {
                              key: 1,
                              name: "uil:moon"
                            })) : theme.key === "system" ? (openBlock(), createBlock(_component_Icon, {
                              key: 2,
                              name: "uil:laptop"
                            })) : createCommentVNode("", true)
                          ]),
                          createTextVNode(" " + toDisplayString(theme.text), 1)
                        ]),
                        _: 2
                      }, 1032, ["value", "class"]);
                    }), 64))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(currentStyle) === "select-box") {
        _push(`<select class="w-full px-2 pr-3 py-1 outline-none rounded border bg-transparent text-gray-700 dark:text-gray-300 border-gray-900/10 dark:border-gray-50/[0.2]"><!--[-->`);
        ssrRenderList(availableThemes, (theme) => {
          _push(`<option${ssrRenderAttr("value", theme.key)}>${ssrInterpolate(theme.text)}</option>`);
        });
        _push(`<!--]--></select>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/Page/NavbarDropdown/ThemeSwitcher.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ThemeSwitcher-4817028e.js.map
