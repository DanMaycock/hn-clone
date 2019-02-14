import Vuex from 'vuex';

export const storeFactory = (getters: any, actions: any) => {
  const stories = {
    namespaced: true,
    getters,
    actions,
  };

  return new Vuex.Store({
    modules: {
      stories,
    },
  });
};