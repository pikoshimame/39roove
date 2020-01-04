import contentful from '~/plugins/contentful';
import MarkdownIt from 'markdown-it';
const client = contentful.createClient();
const md = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true
});

export const state = () => ({
  main: '',
  lounge: ''
});

export const getters = {
  timeTableHtml(state) {
    return {
      main: md.render(state.main),
      lounge: md.render(state.lounge)
    };
  }
};

export const mutations = {
  setTimeTable(state, {main, lounge}) {
    state.main = main;
    state.lounge = lounge;
  }
};

export const actions = {
  async fetch({commit}) {
    try {
      const config = {
        content_type: 'timeTable'
      };
      const response = await client.getEntries(config);
      const timetable = response.items.map((entry) => {
        const main = entry.fields['mainFloor'];
        const lounge = entry.fields['loungeFloor'];
        return {
          main,
          lounge
        };
      })[0];
      commit('setTimeTable', timetable);
    } catch (e) {
      console.error(e);
    }
  }
};
