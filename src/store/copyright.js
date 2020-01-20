import contentful from '~/plugins/contentful';
const client = contentful.createClient();

export const state = () => ({
  text: 'Copyright 2018- 39roove'
});

export const mutations = {
  setCopyright(state, copyright) {
    state.text = copyright;
  }
};

export const actions = {
  async fetch({commit}) {
    try {
      const config = {
        content_type: 'copyright',
        order: '-fields.copyright'
      };
      const response = await client.getEntries(config);
      const copyright = response.items.map((entry) => {
        return entry.fields['copyright'];
      })[0];
      if (copyright !== undefined) {
        commit('setCopyright', copyright);
      }
    } catch (e) {
      console.error(e);
    }
  }
};
