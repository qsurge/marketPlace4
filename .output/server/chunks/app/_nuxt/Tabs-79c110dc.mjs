import { defineComponent, useSlots, ref, provide, watch, mergeProps, useSSRContext, createElementBlock } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';

const __nuxt_component_0 = /* @__PURE__ */ defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Tabs",
  __ssrInlineRender: true,
  emits: ["click"],
  setup(__props) {
    useSlots();
    const tabs = ref();
    const tabHeaderIndicator = ref();
    const tabItems = ref([]);
    const activeTab = ref();
    provide("activeTab", activeTab);
    const updateIndicator = () => {
      if (!tabs.value || !tabHeaderIndicator.value)
        return;
      const dom = tabHeaderIndicator.value;
      const currentActiveIndex = tabItems.value.findIndex(
        ({ name }) => name === activeTab.value
      );
      const tabItem = tabs.value.querySelectorAll(".tabs-header-item")[currentActiveIndex];
      if (!tabItem)
        return;
      const padding = 24;
      const diff = 30;
      dom.style.width = `${tabItem.offsetWidth + diff}px`;
      dom.style.left = `${tabItem.offsetLeft - padding - diff / 2}px`;
    };
    watch(tabItems, () => updateIndicator());
    watch(activeTab, () => updateIndicator());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "tabs",
        ref: tabs,
        class: "tabs"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<div class="tabs-body relative text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-800 shadow rounded-b-lg">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/awesome/Tabs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Tabs-79c110dc.mjs.map
