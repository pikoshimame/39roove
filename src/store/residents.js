import contentful from '~/plugins/contentful';
const client = contentful.createClient();

export const state = () => ({
  list: []
});

export const mutations = {
  setResidents (state, residents) {
    state.list = residents;
  }
};

export const actions = {
  async fetch({ commit }) {
    try {
      const response = await client.getEntries({ content_type: 'residents', order: 'fields.order' });
      const residents = response.items.map(entry => {
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
      commit('setResidents', residents);
    } catch (e) {
      console.error(e);
    }
  }
};
