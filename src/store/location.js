import contentful from '~/plugins/contentful';
const client = contentful.createClient();

export const state = () => ({
  name: '',
  lat: '',
  lon: '',
  link: ''
});

export const mutations = {
  setLocation(state, {name, lat, lon, link}) {
    state.name = name;
    state.lat = lat;
    state.lon = lon;
    state.link = link;
  }
};

export const actions = {
  async fetch({commit}) {
    try {
      const config = {
        content_type: 'location'
      };
      const response = await client.getEntries(config);
      const location = response.items.map((entry) => {
        const name = entry.fields['name'];
        const {lat, lon} = entry.fields['location'];
        const link = entry.fields['link'];
        return {
          name,
          lat,
          lon,
          link
        };
      })[0];
      if (location !== undefined) {
        commit('setLocation', location);
      }
    } catch (e) {
      console.error(e);
    }
  }
};
