import contentful from '~/plugins/contentful';
const client = contentful.createClient();

export const state = () => ({
  date: '',
  time: '',
  datetime: ''
});

export const mutations = {
  setNext(state, {date, time, datetime}) {
    state.date = date;
    state.time = time;
    state.datetime = datetime;
  }
};

export const actions = {
  async fetch({commit}) {
    try {
      const config = {
        content_type: 'next',
        order: '-fields.datetime'
      };
      const response = await client.getEntries(config);
      const next = response.items.map((entry) => {
        const date = entry.fields['date'];
        const time = entry.fields['time'];
        const datetime = entry.fields['datetime'];
        return {
          date,
          time,
          datetime
        };
      })[0];
      if (next !== undefined) {
        commit('setNext', next);
      }
    } catch (e) {
      console.error(e);
    }
  }
};
