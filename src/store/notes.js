import contentful from '~/plugins/contentful';
const client = contentful.createClient();

export const state = () => ({
  list: []
});

export const mutations = {
  setNotes(state, notes) {
    state.list = notes;
  }
};

export const actions = {
  async fetch({commit}) {
    try {
      const config = {
        content_type: 'notes',
        order: 'fields.order'
      };
      const response = await client.getEntries(config);
      const notes = response.items.map((entry) => {
        const text = entry.fields['text'];
        return {
          text
        };
      });
      commit('setNotes', notes);
    } catch (e) {
      console.error(e);
    }
  }
};
