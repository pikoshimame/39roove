import contentful from '~/plugins/contentful';
const client = contentful.createClient();

export const state = () => ({
  main: '',
  lounge: ''
});

export const mutations = {
  setTimeTable (state, {main, lounge}) {
    state.main = main;
    state.lounge = lounge;
  }
};

export const actions = {
  async fetch({ commit }) {
    try {
      const response = await client.getEntries({ content_type: 'timeTable'});
      const timetable = response.items.map(entry => {
        const main = entry.fields['mainFloor'];
        const lounge = entry.fields['loungeFloor'];
        return {
          main,
          lounge
        }
      })[0];
      commit('setTimeTable', timetable);
    } catch (e) {
      console.error(e);
    }
  }
};
