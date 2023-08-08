import { cloneVNode, h, Fragment, inject, provide } from 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/vue/index.mjs';

function u(r, n2, ...a) {
  if (r in n2) {
    let e2 = n2[r];
    return typeof e2 == "function" ? e2(...a) : e2;
  }
  let t2 = new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u), t2;
}
var N = ((o2) => (o2[o2.None = 0] = "None", o2[o2.RenderStrategy = 1] = "RenderStrategy", o2[o2.Static = 2] = "Static", o2))(N || {}), S = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(S || {});
function H({ visible: r = true, features: t2 = 0, ourProps: e2, theirProps: o2, ...i2 }) {
  var a;
  let n2 = j(o2, e2), l2 = Object.assign(i2, { props: n2 });
  if (r || t2 & 2 && n2.static)
    return y(l2);
  if (t2 & 1) {
    let d2 = (a = n2.unmount) == null || a ? 0 : 1;
    return u(d2, { [0]() {
      return null;
    }, [1]() {
      return y({ ...i2, props: { ...n2, hidden: true, style: { display: "none" } } });
    } });
  }
  return y(l2);
}
function y({ props: r, attrs: t2, slots: e2, slot: o2, name: i2 }) {
  var m, h$1;
  let { as: n2, ...l2 } = T(r, ["unmount", "static"]), a = (m = e2.default) == null ? void 0 : m.call(e2, o2), d2 = {};
  if (o2) {
    let u2 = false, c2 = [];
    for (let [p2, f] of Object.entries(o2))
      typeof f == "boolean" && (u2 = true), f === true && c2.push(p2);
    u2 && (d2["data-headlessui-state"] = c2.join(" "));
  }
  if (n2 === "template") {
    if (a = b(a != null ? a : []), Object.keys(l2).length > 0 || Object.keys(t2).length > 0) {
      let [u2, ...c2] = a != null ? a : [];
      if (!v(u2) || c2.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i2} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l2).concat(Object.keys(t2)).map((s2) => s2.trim()).filter((s2, g, R) => R.indexOf(s2) === g).sort((s2, g) => s2.localeCompare(g)).map((s2) => `  - ${s2}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((s2) => `  - ${s2}`).join(`
`)].join(`
`));
      let p2 = j((h$1 = u2.props) != null ? h$1 : {}, l2), f = cloneVNode(u2, p2);
      for (let s2 in p2)
        s2.startsWith("on") && (f.props || (f.props = {}), f.props[s2] = p2[s2]);
      return f;
    }
    return Array.isArray(a) && a.length === 1 ? a[0] : a;
  }
  return h(n2, Object.assign({}, l2, d2), { default: () => a });
}
function b(r) {
  return r.flatMap((t2) => t2.type === Fragment ? b(t2.children) : [t2]);
}
function j(...r) {
  if (r.length === 0)
    return {};
  if (r.length === 1)
    return r[0];
  let t2 = {}, e2 = {};
  for (let i2 of r)
    for (let n2 in i2)
      n2.startsWith("on") && typeof i2[n2] == "function" ? (e2[n2] != null || (e2[n2] = []), e2[n2].push(i2[n2])) : t2[n2] = i2[n2];
  if (t2.disabled || t2["aria-disabled"])
    return Object.assign(t2, Object.fromEntries(Object.keys(e2).map((i2) => [i2, void 0])));
  for (let i2 in e2)
    Object.assign(t2, { [i2](n2, ...l2) {
      let a = e2[i2];
      for (let d2 of a) {
        if (n2 instanceof Event && n2.defaultPrevented)
          return;
        d2(n2, ...l2);
      }
    } });
  return t2;
}
function K(r) {
  let t2 = Object.assign({}, r);
  for (let e2 in t2)
    t2[e2] === void 0 && delete t2[e2];
  return t2;
}
function T(r, t2 = []) {
  let e2 = Object.assign({}, r);
  for (let o2 of t2)
    o2 in e2 && delete e2[o2];
  return e2;
}
function v(r) {
  return r == null ? false : typeof r.type == "string" || typeof r.type == "object" || typeof r.type == "function";
}
let e = 0;
function n$2() {
  return ++e;
}
function t() {
  return n$2();
}
function o(n2) {
  var l2;
  return n2 == null || n2.value == null ? null : (l2 = n2.value.$el) != null ? l2 : n2.value;
}
var i = Object.defineProperty;
var d = (t2, e2, r) => e2 in t2 ? i(t2, e2, { enumerable: true, configurable: true, writable: true, value: r }) : t2[e2] = r;
var n$1 = (t2, e2, r) => (d(t2, typeof e2 != "symbol" ? e2 + "" : e2, r), r);
class s {
  constructor() {
    n$1(this, "current", this.detect());
    n$1(this, "currentId", 0);
  }
  set(e2) {
    this.current !== e2 && (this.currentId = 0, this.current = e2);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return "server";
  }
}
let c$1 = new s();
let n = Symbol("Context");
var l = ((e2) => (e2[e2.Open = 1] = "Open", e2[e2.Closed = 2] = "Closed", e2[e2.Closing = 4] = "Closing", e2[e2.Opening = 8] = "Opening", e2))(l || {});
function C() {
  return p() !== null;
}
function p() {
  return inject(n, null);
}
function c(o2) {
  provide(n, o2);
}

export { C, H, K, N, S, T, c$1 as a, c, l, o, p, t, u };
//# sourceMappingURL=open-closed-6ea9de77.mjs.map
