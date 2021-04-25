import contentful from '~/plugins/contentful';
const client = contentful.createClient();

export const state = () => ({
  list: []
});

export const mutations = {
  setEntranceFees(state, entranceFee) {
    state.list = entranceFee;
  }
};

export const actions = {
  async fetch({commit}) {
    try {
      const config = {
        content_type: 'entranceFees',
        order: 'fields.order'
      };
      const response = await client.getEntries(config);
      const entranceFees = response.items.map((entry) => {
        const term = entry.fields['term'];
        const fee = entry.fields['fee'];
        const drink = entry.fields['drink'] || '';
        return {
          term,
          fee,
          drink
        };
      });
      commit('setEntranceFees', entranceFees);
    } catch (e) {
      console.error(e);
    }
  }
};
