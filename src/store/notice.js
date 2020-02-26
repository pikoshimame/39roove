import contentful from '~/plugins/contentful';
import MarkdownIt from 'markdown-it';
const client = contentful.createClient();
const md = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true
});

export const state = () => ({
  title: '',
  text: ''
});

export const getters = {
  isExists(state) {
    return state.title !== '' && state.text !== '';
  },
  textHtml(state) {
    return md.render(state.text);
  }
};

export const mutations = {
  setNotice(state, {title, text}) {
    state.title = title;
    state.text = text;
  }
};

export const actions = {
  async fetch({commit}) {
    try {
      const config = {
        content_type: 'notice'
      };
      const response = await client.getEntries(config);
      const notice = response.items.map((entry) => {
        const title = entry.fields['title'];
        const text = entry.fields['text'];
        return {
          title,
          text
        };
      })[0];
      if (notice !== undefined) {
        commit('setNotice', notice);
      }
    } catch (e) {
      console.error(e);
    }
  }
};
