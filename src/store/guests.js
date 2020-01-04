import contentful from '~/plugins/contentful';
const client = contentful.createClient();

export const state = () => ({
  list: []
});

export const mutations = {
  setGuests(state, guests) {
    state.list = guests;
  }
};

export const actions = {
  async fetch({commit}) {
    try {
      const config = {
        content_type: 'guests',
        order: 'fields.order'
      };
      const response = await client.getEntries(config);
      const guests = response.items.map((entry) => {
        const name = entry.fields['name'];
        const credit = entry.fields['credit'];
        const imageWidth = entry.fields.image.fields.file.details.image.width;
        const imageHeight = entry.fields.image.fields.file.details.image.height;
        const image = {
          path: entry.fields.image.fields.file.url,
          type: (imageHeight >= imageWidth) ? 'portrait' : 'landscape'
        };
        const text = entry.fields['text'];
        const twitter = entry.fields['twitter'];
        return {
          name,
          credit,
          image,
          text,
          twitter
        };
      });
      commit('setGuests', guests);
    } catch (e) {
      console.error(e);
    }
  }
};
