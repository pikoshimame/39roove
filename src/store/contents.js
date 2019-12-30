export const state = () => ({
  visibility: false
});

export const mutations = {
  setVisibility(state, visibility) {
    state.visibility = visibility;
  }
};
