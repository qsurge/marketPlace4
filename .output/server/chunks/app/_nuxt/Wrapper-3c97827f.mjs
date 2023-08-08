import _sfc_main$1 from './Item-10c3b72d.mjs';
import { defineComponent, provide, ref, computed, inject, watchEffect, onMounted, onUnmounted, h as h$1, Teleport, reactive, Fragment, shallowRef, mergeProps, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, renderList, Transition, useSSRContext } from 'vue';
import { H, o, u as u$1, c, l, t, p as p$1, N, a as c$1 } from './open-closed-6ea9de77.mjs';
import { m, E as E$2, y, w as w$1, h as h$2, b, f as f$1, a, P, N as N$1, c as w, o as o$1, T } from './hidden-6a6c0b28.mjs';
import __nuxt_component_0 from './Icon-c19bf7f4.mjs';
import { f as useRoute, e as useRouter } from '../server.mjs';
import { a as parseMenuRoute, p as parseMenuTitle } from './navbar-a0b107f8.mjs';
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import './nuxt-link-f805a121.mjs';
import 'ufo';
import './index-164c30f3.mjs';
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
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './_plugin-vue_export-helper-cc2b3d55.mjs';

function E$1(n2, e2, o2, r) {
  c$1.isServer || watchEffect((t2) => {
    n2 = n2 != null ? n2 : window, n2.addEventListener(e2, o2, r), t2(() => n2.removeEventListener(e2, o2, r));
  });
}
var d = ((r) => (r[r.Forwards = 0] = "Forwards", r[r.Backwards = 1] = "Backwards", r))(d || {});
function n() {
  let o2 = ref(0);
  return w("keydown", (e2) => {
    e2.key === "Tab" && (o2.value = e2.shiftKey ? 1 : 0);
  }), o2;
}
function p({ defaultContainers: r = [], portals: t2 } = {}) {
  let o$12 = ref(null), l2 = m(o$12);
  function u2() {
    var i;
    let n2 = [];
    for (let e2 of r)
      e2 !== null && (e2 instanceof HTMLElement ? n2.push(e2) : "value" in e2 && e2.value instanceof HTMLElement && n2.push(e2.value));
    if (t2 != null && t2.value)
      for (let e2 of t2.value)
        n2.push(e2);
    for (let e2 of (i = l2 == null ? void 0 : l2.querySelectorAll("html > *, body > *")) != null ? i : [])
      e2 !== document.body && e2 !== document.head && e2 instanceof HTMLElement && e2.id !== "headlessui-portal-root" && (e2.contains(o(o$12)) || n2.some((f2) => e2.contains(f2)) || n2.push(e2));
    return n2;
  }
  return { resolveContainers: u2, contains(n2) {
    return u2().some((i) => i.contains(n2));
  }, mainTreeNodeRef: o$12, MainTreeNode() {
    return h$1(f$1, { features: a.Hidden, ref: o$12 });
  } };
}
let e = Symbol("ForcePortalRootContext");
function u() {
  return inject(e, false);
}
defineComponent({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: false } }, setup(o2, { slots: t2, attrs: r }) {
  return provide(e, o2.force), () => {
    let { force: f2, ...n2 } = o2;
    return H({ theirProps: n2, ourProps: {}, slot: {}, slots: t2, attrs: r, name: "ForcePortalRoot" });
  };
} });
function E(t2) {
  let e2 = m(t2);
  if (!e2) {
    if (t2 === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${t2}`);
  }
  let u2 = e2.getElementById("headlessui-portal-root");
  if (u2)
    return u2;
  let r = e2.createElement("div");
  return r.setAttribute("id", "headlessui-portal-root"), e2.body.appendChild(r);
}
defineComponent({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(t2, { slots: e2, attrs: u$12 }) {
  let r = ref(null), i = computed(() => m(r)), l2 = u(), n2 = inject(h, null), o$12 = ref(l2 === true || n2 == null ? E(r.value) : n2.resolveTarget());
  watchEffect(() => {
    l2 || n2 != null && (o$12.value = n2.resolveTarget());
  });
  let d2 = inject(f, null);
  return onMounted(() => {
    let a2 = o(r);
    a2 && d2 && onUnmounted(d2.register(a2));
  }), onUnmounted(() => {
    var v, P2;
    let a2 = (v = i.value) == null ? void 0 : v.getElementById("headlessui-portal-root");
    a2 && o$12.value === a2 && o$12.value.children.length <= 0 && ((P2 = o$12.value.parentElement) == null || P2.removeChild(o$12.value));
  }), () => {
    if (o$12.value === null)
      return null;
    let a2 = { ref: r, "data-headlessui-portal": "" };
    return h$1(Teleport, { to: o$12.value }, H({ ourProps: a2, theirProps: t2, slot: {}, attrs: u$12, slots: e2, name: "Portal" }));
  };
} });
let f = Symbol("PortalParentContext");
function V() {
  let t2 = inject(f, null), e2 = ref([]);
  function u2(l2) {
    return e2.value.push(l2), t2 && t2.register(l2), () => r(l2);
  }
  function r(l2) {
    let n2 = e2.value.indexOf(l2);
    n2 !== -1 && e2.value.splice(n2, 1), t2 && t2.unregister(l2);
  }
  let i = { register: u2, unregister: r, portals: e2 };
  return [e2, defineComponent({ name: "PortalWrapper", setup(l2, { slots: n2 }) {
    return provide(f, i), () => {
      var o2;
      return (o2 = n2.default) == null ? void 0 : o2.call(n2);
    };
  } })];
}
let h = Symbol("PortalGroupContext");
defineComponent({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(t2, { attrs: e2, slots: u2 }) {
  let r = reactive({ resolveTarget() {
    return t2.target;
  } });
  return provide(h, r), () => {
    let { target: i, ...l2 } = t2;
    return H({ theirProps: l2, ourProps: {}, slot: {}, attrs: e2, slots: u2, name: "PortalGroup" });
  };
} });
var be = ((p2) => (p2[p2.Open = 0] = "Open", p2[p2.Closed = 1] = "Closed", p2))(be || {});
let re = Symbol("PopoverContext");
function A(m2) {
  let S = inject(re, null);
  if (S === null) {
    let p2 = new Error(`<${m2} /> is missing a parent <${ge.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(p2, A), p2;
  }
  return S;
}
let le = Symbol("PopoverGroupContext");
function ae() {
  return inject(le, null);
}
let ue = Symbol("PopoverPanelContext");
function Se() {
  return inject(ue, null);
}
let ge = defineComponent({ name: "Popover", props: { as: { type: [Object, String], default: "div" } }, setup(m$1, { slots: S, attrs: p$12, expose: h2 }) {
  var v;
  let t2 = ref(null);
  h2({ el: t2, $el: t2 });
  let e2 = ref(1), c2 = ref(null), d2 = ref(null), F = ref(null), f2 = ref(null), g = computed(() => m(t2)), P2 = computed(() => {
    var X, Y;
    if (!o(c2) || !o(f2))
      return false;
    for (let k of document.querySelectorAll("body > *"))
      if (Number(k == null ? void 0 : k.contains(o(c2))) ^ Number(k == null ? void 0 : k.contains(o(f2))))
        return true;
    let o$12 = E$2(), l2 = o$12.indexOf(o(c2)), b2 = (l2 + o$12.length - 1) % o$12.length, E2 = (l2 + 1) % o$12.length, K = o$12[b2], j = o$12[E2];
    return !((X = o(f2)) != null && X.contains(K)) && !((Y = o(f2)) != null && Y.contains(j));
  }), a2 = { popoverState: e2, buttonId: ref(null), panelId: ref(null), panel: f2, button: c2, isPortalled: P2, beforePanelSentinel: d2, afterPanelSentinel: F, togglePopover() {
    e2.value = u$1(e2.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    e2.value !== 1 && (e2.value = 1);
  }, close(o$12) {
    a2.closePopover();
    let l2 = (() => o$12 ? o$12 instanceof HTMLElement ? o$12 : o$12.value instanceof HTMLElement ? o(o$12) : o(a2.button) : o(a2.button))();
    l2 == null || l2.focus();
  } };
  provide(re, a2), c(computed(() => u$1(e2.value, { [0]: l.Open, [1]: l.Closed })));
  let w2 = { buttonId: a2.buttonId, panelId: a2.panelId, close() {
    a2.closePopover();
  } }, y$1 = ae(), O = y$1 == null ? void 0 : y$1.registerPopover, [u2, i] = V(), s = p({ portals: u2, defaultContainers: [c2, f2] });
  function n2() {
    var o$12, l2, b2, E2;
    return (E2 = y$1 == null ? void 0 : y$1.isFocusWithinPopoverGroup()) != null ? E2 : ((o$12 = g.value) == null ? void 0 : o$12.activeElement) && (((l2 = o(c2)) == null ? void 0 : l2.contains(g.value.activeElement)) || ((b2 = o(f2)) == null ? void 0 : b2.contains(g.value.activeElement)));
  }
  return watchEffect(() => O == null ? void 0 : O(w2)), E$1((v = g.value) == null ? void 0 : v.defaultView, "focus", (o$12) => {
    var l2, b2;
    o$12.target !== window && o$12.target instanceof HTMLElement && e2.value === 0 && (n2() || c2 && f2 && (s.contains(o$12.target) || (l2 = o(a2.beforePanelSentinel)) != null && l2.contains(o$12.target) || (b2 = o(a2.afterPanelSentinel)) != null && b2.contains(o$12.target) || a2.closePopover()));
  }, true), y(s.resolveContainers, (o$12, l2) => {
    var b2;
    a2.closePopover(), w$1(l2, h$2.Loose) || (o$12.preventDefault(), (b2 = o(c2)) == null || b2.focus());
  }, computed(() => e2.value === 0)), () => {
    let o2 = { open: e2.value === 0, close: a2.close };
    return h$1(i, {}, () => H({ theirProps: { ...m$1, ...p$12 }, ourProps: { ref: t2 }, slot: o2, slots: S, attrs: p$12, name: "Popover" }));
  };
} }), je = defineComponent({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: () => `headlessui-popover-button-${t()}` } }, inheritAttrs: false, setup(m$1, { attrs: S, slots: p2, expose: h2 }) {
  let t$1 = A("PopoverButton"), e2 = computed(() => m(t$1.button));
  h2({ el: t$1.button, $el: t$1.button }), onMounted(() => {
    t$1.buttonId.value = m$1.id;
  }), onUnmounted(() => {
    t$1.buttonId.value = null;
  });
  let c2 = ae(), d$1 = c2 == null ? void 0 : c2.closeOthers, F = Se(), f2 = computed(() => F === null ? false : F.value === t$1.panelId.value), g = ref(null), P$1 = `headlessui-focus-sentinel-${t()}`;
  f2.value || watchEffect(() => {
    t$1.button.value = g.value;
  });
  let a$1 = b(computed(() => ({ as: m$1.as, type: S.type })), g);
  function w2(n2) {
    var v, o$2, l2, b2, E2;
    if (f2.value) {
      if (t$1.popoverState.value === 1)
        return;
      switch (n2.key) {
        case o$1.Space:
        case o$1.Enter:
          n2.preventDefault(), (o$2 = (v = n2.target).click) == null || o$2.call(v), t$1.closePopover(), (l2 = o(t$1.button)) == null || l2.focus();
          break;
      }
    } else
      switch (n2.key) {
        case o$1.Space:
        case o$1.Enter:
          n2.preventDefault(), n2.stopPropagation(), t$1.popoverState.value === 1 && (d$1 == null || d$1(t$1.buttonId.value)), t$1.togglePopover();
          break;
        case o$1.Escape:
          if (t$1.popoverState.value !== 0)
            return d$1 == null ? void 0 : d$1(t$1.buttonId.value);
          if (!o(t$1.button) || (b2 = e2.value) != null && b2.activeElement && !((E2 = o(t$1.button)) != null && E2.contains(e2.value.activeElement)))
            return;
          n2.preventDefault(), n2.stopPropagation(), t$1.closePopover();
          break;
      }
  }
  function y2(n2) {
    f2.value || n2.key === o$1.Space && n2.preventDefault();
  }
  function O(n2) {
    var v, o$12;
    m$1.disabled || (f2.value ? (t$1.closePopover(), (v = o(t$1.button)) == null || v.focus()) : (n2.preventDefault(), n2.stopPropagation(), t$1.popoverState.value === 1 && (d$1 == null || d$1(t$1.buttonId.value)), t$1.togglePopover(), (o$12 = o(t$1.button)) == null || o$12.focus()));
  }
  function u2(n2) {
    n2.preventDefault(), n2.stopPropagation();
  }
  let i = n();
  function s() {
    let n2 = o(t$1.panel);
    if (!n2)
      return;
    function v() {
      u$1(i.value, { [d.Forwards]: () => P(n2, N$1.First), [d.Backwards]: () => P(n2, N$1.Last) }) === T.Error && P(E$2().filter((l2) => l2.dataset.headlessuiFocusGuard !== "true"), u$1(i.value, { [d.Forwards]: N$1.Next, [d.Backwards]: N$1.Previous }), { relativeTo: o(t$1.button) });
    }
    v();
  }
  return () => {
    let n2 = t$1.popoverState.value === 0, v = { open: n2 }, { id: o$12, ...l2 } = m$1, b2 = f2.value ? { ref: g, type: a$1.value, onKeydown: w2, onClick: O } : { ref: g, id: o$12, type: a$1.value, "aria-expanded": t$1.popoverState.value === 0, "aria-controls": o(t$1.panel) ? t$1.panelId.value : void 0, disabled: m$1.disabled ? true : void 0, onKeydown: w2, onKeyup: y2, onClick: O, onMousedown: u2 };
    return h$1(Fragment, [H({ ourProps: b2, theirProps: { ...S, ...l2 }, slot: v, attrs: S, slots: p2, name: "PopoverButton" }), n2 && !f2.value && t$1.isPortalled.value && h$1(f$1, { id: P$1, features: a.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: s })]);
  };
} });
defineComponent({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true } }, setup(m2, { attrs: S, slots: p2 }) {
  let h2 = A("PopoverOverlay"), t$1 = `headlessui-popover-overlay-${t()}`, e2 = p$1(), c2 = computed(() => e2 !== null ? (e2.value & l.Open) === l.Open : h2.popoverState.value === 0);
  function d2() {
    h2.closePopover();
  }
  return () => {
    let F = { open: h2.popoverState.value === 0 };
    return H({ ourProps: { id: t$1, "aria-hidden": true, onClick: d2 }, theirProps: m2, slot: F, attrs: S, slots: p2, features: N.RenderStrategy | N.Static, visible: c2.value, name: "PopoverOverlay" });
  };
} });
let We = defineComponent({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, focus: { type: Boolean, default: false }, id: { type: String, default: () => `headlessui-popover-panel-${t()}` } }, inheritAttrs: false, setup(m$1, { attrs: S, slots: p2, expose: h2 }) {
  let { focus: t$1 } = m$1, e2 = A("PopoverPanel"), c2 = computed(() => m(e2.panel)), d$1 = `headlessui-focus-sentinel-before-${t()}`, F = `headlessui-focus-sentinel-after-${t()}`;
  h2({ el: e2.panel, $el: e2.panel }), onMounted(() => {
    e2.panelId.value = m$1.id;
  }), onUnmounted(() => {
    e2.panelId.value = null;
  }), provide(ue, e2.panelId), watchEffect(() => {
    var i, s;
    if (!t$1 || e2.popoverState.value !== 0 || !e2.panel)
      return;
    let u2 = (i = c2.value) == null ? void 0 : i.activeElement;
    (s = o(e2.panel)) != null && s.contains(u2) || P(o(e2.panel), N$1.First);
  });
  let f2 = p$1(), g = computed(() => f2 !== null ? (f2.value & l.Open) === l.Open : e2.popoverState.value === 0);
  function P$1(u2) {
    var i, s;
    switch (u2.key) {
      case o$1.Escape:
        if (e2.popoverState.value !== 0 || !o(e2.panel) || c2.value && !((i = o(e2.panel)) != null && i.contains(c2.value.activeElement)))
          return;
        u2.preventDefault(), u2.stopPropagation(), e2.closePopover(), (s = o(e2.button)) == null || s.focus();
        break;
    }
  }
  function a$1(u2) {
    var s, n2, v, o$12, l2;
    let i = u2.relatedTarget;
    i && o(e2.panel) && ((s = o(e2.panel)) != null && s.contains(i) || (e2.closePopover(), ((v = (n2 = o(e2.beforePanelSentinel)) == null ? void 0 : n2.contains) != null && v.call(n2, i) || (l2 = (o$12 = o(e2.afterPanelSentinel)) == null ? void 0 : o$12.contains) != null && l2.call(o$12, i)) && i.focus({ preventScroll: true })));
  }
  let w2 = n();
  function y2() {
    let u2 = o(e2.panel);
    if (!u2)
      return;
    function i() {
      u$1(w2.value, { [d.Forwards]: () => {
        var n2;
        P(u2, N$1.First) === T.Error && ((n2 = o(e2.afterPanelSentinel)) == null || n2.focus());
      }, [d.Backwards]: () => {
        var s;
        (s = o(e2.button)) == null || s.focus({ preventScroll: true });
      } });
    }
    i();
  }
  function O() {
    let u2 = o(e2.panel);
    if (!u2)
      return;
    function i() {
      u$1(w2.value, { [d.Forwards]: () => {
        let s = o(e2.button), n2 = o(e2.panel);
        if (!s)
          return;
        let v = E$2(), o$12 = v.indexOf(s), l2 = v.slice(0, o$12 + 1), E2 = [...v.slice(o$12 + 1), ...l2];
        for (let K of E2.slice())
          if (K.dataset.headlessuiFocusGuard === "true" || n2 != null && n2.contains(K)) {
            let j = E2.indexOf(K);
            j !== -1 && E2.splice(j, 1);
          }
        P(E2, N$1.First, { sorted: false });
      }, [d.Backwards]: () => {
        var n2;
        P(u2, N$1.Previous) === T.Error && ((n2 = o(e2.button)) == null || n2.focus());
      } });
    }
    i();
  }
  return () => {
    let u2 = { open: e2.popoverState.value === 0, close: e2.close }, { id: i, focus: s, ...n2 } = m$1, v = { ref: e2.panel, id: i, onKeydown: P$1, onFocusout: t$1 && e2.popoverState.value === 0 ? a$1 : void 0, tabIndex: -1 };
    return H({ ourProps: v, theirProps: { ...S, ...n2 }, attrs: S, slot: u2, slots: { ...p2, default: (...o2) => {
      var l2;
      return [h$1(Fragment, [g.value && e2.isPortalled.value && h$1(f$1, { id: d$1, ref: e2.beforePanelSentinel, features: a.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: y2 }), (l2 = p2.default) == null ? void 0 : l2.call(p2, ...o2), g.value && e2.isPortalled.value && h$1(f$1, { id: F, ref: e2.afterPanelSentinel, features: a.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: O })])];
    } }, features: N.RenderStrategy | N.Static, visible: g.value, name: "PopoverPanel" });
  };
} });
defineComponent({ name: "PopoverGroup", props: { as: { type: [Object, String], default: "div" } }, setup(m$1, { attrs: S, slots: p2, expose: h2 }) {
  let t2 = ref(null), e2 = shallowRef([]), c2 = computed(() => m(t2));
  h2({ el: t2, $el: t2 });
  function d2(P2) {
    let a2 = e2.value.indexOf(P2);
    a2 !== -1 && e2.value.splice(a2, 1);
  }
  function F(P2) {
    return e2.value.push(P2), () => {
      d2(P2);
    };
  }
  function f2() {
    var w2;
    let P2 = c2.value;
    if (!P2)
      return false;
    let a2 = P2.activeElement;
    return (w2 = o(t2)) != null && w2.contains(a2) ? true : e2.value.some((y2) => {
      var O, u2;
      return ((O = P2.getElementById(y2.buttonId.value)) == null ? void 0 : O.contains(a2)) || ((u2 = P2.getElementById(y2.panelId.value)) == null ? void 0 : u2.contains(a2));
    });
  }
  function g(P2) {
    for (let a2 of e2.value)
      a2.buttonId.value !== P2 && a2.close();
  }
  return provide(le, { registerPopover: F, unregisterPopover: d2, isFocusWithinPopoverGroup: f2, closeOthers: g }), () => H({ ourProps: { ref: t2 }, theirProps: m$1, slot: {}, attrs: S, slots: p2, name: "PopoverGroup" });
} });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Wrapper",
  __ssrInlineRender: true,
  props: {
    menu: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    useRouter();
    const isActive = computed(() => {
      var _a, _b, _c, _d;
      if (!((_a = props.menu) == null ? void 0 : _a.children))
        return false;
      const childs = ((_b = props.menu) == null ? void 0 : _b.children) || [];
      for (const child of childs) {
        const to = parseMenuRoute(child.to);
        if (typeof to === "string" && to === route.path)
          return true;
        if ((_d = route.name) == null ? void 0 : _d.toString().includes((_c = to.name) == null ? void 0 : _c.toString()))
          return true;
      }
      return false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutPageNavbarMenuItem = _sfc_main$1;
      const _component_HeadlessPopover = ge;
      const _component_HeadlessPopoverButton = je;
      const _component_Icon = __nuxt_component_0;
      const _component_HeadlessPopoverPanel = We;
      if (__props.menu.type !== "dropdown") {
        _push(ssrRenderComponent(_component_LayoutPageNavbarMenuItem, mergeProps({ menu: __props.menu }, _attrs), null, _parent));
      } else if (__props.menu.children && __props.menu.children.length > 0) {
        _push(ssrRenderComponent(_component_HeadlessPopover, _attrs, {
          default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_HeadlessPopoverButton, { class: "flex items-center transition-all duration-300 text-gray-900 dark:text-gray-100" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="${ssrRenderClass([unref(isActive) ? "font-bold" : ""])}"${_scopeId2}>${ssrInterpolate(("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))(__props.menu.title))}</span>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "carbon:chevron-down",
                      class: ["ml-1", [open ? "transform rotate-180" : ""]]
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("span", {
                        class: [unref(isActive) ? "font-bold" : ""]
                      }, toDisplayString(("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))(__props.menu.title)), 3),
                      createVNode(_component_Icon, {
                        name: "carbon:chevron-down",
                        class: ["ml-1", [open ? "transform rotate-180" : ""]]
                      }, null, 8, ["class"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(``);
              _push2(ssrRenderComponent(_component_HeadlessPopoverPanel, { class: "absolute z-10 px-2 py-2 rounded-lg min-w-[150px] bg-gray-50 border-gray-300 dark:bg-gray-900 border dark:border-gray-600" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="grid grid-cols-1"${_scopeId2}><!--[-->`);
                    ssrRenderList(__props.menu.children, (child, j) => {
                      _push3(ssrRenderComponent(_component_LayoutPageNavbarMenuItem, {
                        menu: child,
                        "is-dropdown": ""
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "grid grid-cols-1" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.menu.children, (child, j) => {
                          return openBlock(), createBlock(_component_LayoutPageNavbarMenuItem, {
                            key: j,
                            menu: child,
                            "is-dropdown": ""
                          }, null, 8, ["menu"]);
                        }), 128))
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_HeadlessPopoverButton, { class: "flex items-center transition-all duration-300 text-gray-900 dark:text-gray-100" }, {
                  default: withCtx(() => [
                    createVNode("span", {
                      class: [unref(isActive) ? "font-bold" : ""]
                    }, toDisplayString(("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))(__props.menu.title)), 3),
                    createVNode(_component_Icon, {
                      name: "carbon:chevron-down",
                      class: ["ml-1", [open ? "transform rotate-180" : ""]]
                    }, null, 8, ["class"])
                  ]),
                  _: 2
                }, 1024),
                createVNode(Transition, {
                  "enter-active-class": "transition duration-200 ease-out",
                  "enter-from-class": "translate-y-1 opacity-0",
                  "enter-to-class": "translate-y-0 opacity-100",
                  "leave-active-class": "transition duration-150 ease-in",
                  "leave-from-class": "translate-y-0 opacity-100",
                  "leave-to-class": "translate-y-1 opacity-0"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_HeadlessPopoverPanel, { class: "absolute z-10 px-2 py-2 rounded-lg min-w-[150px] bg-gray-50 border-gray-300 dark:bg-gray-900 border dark:border-gray-600" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "grid grid-cols-1" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.menu.children, (child, j) => {
                            return openBlock(), createBlock(_component_LayoutPageNavbarMenuItem, {
                              key: j,
                              menu: child,
                              "is-dropdown": ""
                            }, null, 8, ["menu"]);
                          }), 128))
                        ])
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
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/Page/NavbarMenu/Wrapper.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Wrapper-3c97827f.mjs.map
