import contentful from '~/plugins/contentful';
const client = contentful.createClient();

export const state = () => ({
  text: ''
});

export const mutations = {
  setIllustrations (state, illustrations) {
    state.text = illustrations;
  }
};

export const actions = {
  async fetch({ commit }) {
    try {
      const response = await client.getEntries({ content_type: 'illustrations', order: '-fields.illustrations' });
      const illustrations = response.items.map(entry => {
        return entry.fields['illustrations'];
      })[0];
      commit('setIllustrations', illustrations);
    } catch (e) {
      console.error(e);
    }
  }
};
