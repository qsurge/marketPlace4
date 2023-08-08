import { ref, onMounted, watchEffect, computed, defineComponent } from 'vue';
import { a as c$1, o as o$1, u as u$1, H as H$1 } from './open-closed-6ea9de77.mjs';

var o = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o || {});
function m(r2) {
  if (c$1.isServer)
    return null;
  if (r2 instanceof Node)
    return r2.ownerDocument;
  if (r2 != null && r2.hasOwnProperty("value")) {
    let n = o$1(r2);
    if (n)
      return n.ownerDocument;
  }
  return document;
}
let c = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var N = ((n) => (n[n.First = 1] = "First", n[n.Previous = 2] = "Previous", n[n.Next = 4] = "Next", n[n.Last = 8] = "Last", n[n.WrapAround = 16] = "WrapAround", n[n.NoScroll = 32] = "NoScroll", n))(N || {}), T = ((o2) => (o2[o2.Error = 0] = "Error", o2[o2.Overflow = 1] = "Overflow", o2[o2.Success = 2] = "Success", o2[o2.Underflow = 3] = "Underflow", o2))(T || {}), F = ((t) => (t[t.Previous = -1] = "Previous", t[t.Next = 1] = "Next", t))(F || {});
function E(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(c)).sort((r2, t) => Math.sign((r2.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var h = ((t) => (t[t.Strict = 0] = "Strict", t[t.Loose = 1] = "Loose", t))(h || {});
function w$1(e, r2 = 0) {
  var t;
  return e === ((t = m(e)) == null ? void 0 : t.body) ? false : u$1(r2, { [0]() {
    return e.matches(c);
  }, [1]() {
    let l = e;
    for (; l !== null; ) {
      if (l.matches(c))
        return true;
      l = l.parentElement;
    }
    return false;
  } });
}
var y$1 = ((t) => (t[t.Keyboard = 0] = "Keyboard", t[t.Mouse = 1] = "Mouse", t))(y$1 || {});
let H = ["textarea", "input"].join(",");
function I(e) {
  var r2, t;
  return (t = (r2 = e == null ? void 0 : e.matches) == null ? void 0 : r2.call(e, H)) != null ? t : false;
}
function O(e, r2 = (t) => t) {
  return e.slice().sort((t, l) => {
    let o2 = r2(t), i = r2(l);
    if (o2 === null || i === null)
      return 0;
    let n = o2.compareDocumentPosition(i);
    return n & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function P(e, r2, { sorted: t = true, relativeTo: l = null, skipElements: o2 = [] } = {}) {
  var m2;
  let i = (m2 = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? m2 : document, n = Array.isArray(e) ? t ? O(e) : e : E(e);
  o2.length > 0 && n.length > 1 && (n = n.filter((s) => !o2.includes(s))), l = l != null ? l : i.activeElement;
  let x = (() => {
    if (r2 & 5)
      return 1;
    if (r2 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p = (() => {
    if (r2 & 1)
      return 0;
    if (r2 & 2)
      return Math.max(0, n.indexOf(l)) - 1;
    if (r2 & 4)
      return Math.max(0, n.indexOf(l)) + 1;
    if (r2 & 8)
      return n.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), L = r2 & 32 ? { preventScroll: true } : {}, a2 = 0, d = n.length, u2;
  do {
    if (a2 >= d || a2 + d <= 0)
      return 0;
    let s = p + a2;
    if (r2 & 16)
      s = (s + d) % d;
    else {
      if (s < 0)
        return 3;
      if (s >= d)
        return 1;
    }
    u2 = n[s], u2 == null || u2.focus(L), a2 += x;
  } while (u2 !== i.activeElement);
  return r2 & 6 && I(u2) && u2.select(), 2;
}
function r(t, e) {
  if (t)
    return t;
  let n = e != null ? e : "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function b(t, e) {
  let n = ref(r(t.value.type, t.value.as));
  return onMounted(() => {
    n.value = r(t.value.type, t.value.as);
  }), watchEffect(() => {
    var o2;
    n.value || o$1(e) && o$1(e) instanceof HTMLButtonElement && !((o2 = o$1(e)) != null && o2.hasAttribute("type")) && (n.value = "button");
  }), n;
}
function u(e, t, n) {
  c$1.isServer || watchEffect((o2) => {
    document.addEventListener(e, t, n), o2(() => document.removeEventListener(e, t, n));
  });
}
function w(e, n, t) {
  c$1.isServer || watchEffect((o2) => {
    window.addEventListener(e, n, t), o2(() => window.removeEventListener(e, n, t));
  });
}
function y(f2, c2, i = computed(() => true)) {
  function a2(e, r2) {
    if (!i.value || e.defaultPrevented)
      return;
    let t = r2(e);
    if (t === null || !t.getRootNode().contains(t))
      return;
    let m2 = function o2(n) {
      return typeof n == "function" ? o2(n()) : Array.isArray(n) || n instanceof Set ? n : [n];
    }(f2);
    for (let o2 of m2) {
      if (o2 === null)
        continue;
      let n = o2 instanceof HTMLElement ? o2 : o$1(o2);
      if (n != null && n.contains(t) || e.composed && e.composedPath().includes(n))
        return;
    }
    return !w$1(t, h.Loose) && t.tabIndex !== -1 && e.preventDefault(), c2(e, t);
  }
  let u$12 = ref(null);
  u("pointerdown", (e) => {
    var r2, t;
    i.value && (u$12.value = ((t = (r2 = e.composedPath) == null ? void 0 : r2.call(e)) == null ? void 0 : t[0]) || e.target);
  }, true), u("mousedown", (e) => {
    var r2, t;
    i.value && (u$12.value = ((t = (r2 = e.composedPath) == null ? void 0 : r2.call(e)) == null ? void 0 : t[0]) || e.target);
  }, true), u("click", (e) => {
    u$12.value && (a2(e, () => u$12.value), u$12.value = null);
  }, true), u("touchend", (e) => a2(e, () => e.target instanceof HTMLElement ? e.target : null), true), w("blur", (e) => a2(e, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}
var a = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(a || {});
let f = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(r2, { slots: t, attrs: d }) {
  return () => {
    let { features: e, ...o2 } = r2, n = { "aria-hidden": (e & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e & 4) === 4 && (e & 2) !== 2 && { display: "none" } } };
    return H$1({ ourProps: n, theirProps: o2, slot: {}, attrs: d, slots: t, name: "Hidden" });
  };
} });

export { E, N, O, P, T, a, b, w as c, f, h, m, o, w$1 as w, y };
//# sourceMappingURL=hidden-6a6c0b28.mjs.map
