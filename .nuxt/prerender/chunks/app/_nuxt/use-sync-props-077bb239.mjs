import { computed } from 'file:///home/agile/Downloads/GA-Nuxt/marketPlace4/node_modules/vue/index.mjs';

const useSyncProps = (props, key, emit) => {
  return computed({
    get() {
      return props[key];
    },
    set(value) {
      emit(`update:${key}`, value);
    }
  });
};

export { useSyncProps as u };
//# sourceMappingURL=use-sync-props-077bb239.mjs.map
