import contentful from '~/plugins/contentful';
const client = contentful.createClient();

export const state = () => ({
  text: '',
  link: ''
});

export const getters = {
  existsRegistration(state) {
    return state.text !== '' && state.link !== '';
  }
};

export const mutations = {
  setRegistration(state, {text, link}) {
    state.text = text;
    state.link = link;
  }
};

export const actions = {
  async fetch({commit}) {
    try {
      const config = {
        content_type: 'registration'
      };
      const response = await client.getEntries(config);
      const registration = response.items.map((entry) => {
        const text = entry.fields['text'];
        const link = entry.fields['link'];
        return {
          text,
          link
        };
      })[0];
      if (registration !== undefined) {
        commit('setRegistration', registration);
      }
    } catch (e) {
      console.error(e);
    }
  }
};
