import contentful from '~/plugins/contentful';
import MarkdownIt from 'markdown-it';
const client = contentful.createClient();
const md = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true
});

export const state = () => ({
  text: ''
});

export const getters = {
  textHtml(state) {
    return md.render(state.text);
  }
};

export const mutations = {
  setNotes(state, {text}) {
    state.text = text;
  }
};

export const actions = {
  async fetch({commit}) {
    try {
      const config = {
        content_type: 'notes'
      };
      const response = await client.getEntries(config);
      const notes = response.items.map((entry) => {
        const text = entry.fields['text'];
        return {
          text
        };
      })[0];
      commit('setNotes', notes);
    } catch (e) {
      console.error(e);
    }
  }
};
