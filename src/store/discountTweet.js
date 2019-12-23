import contentful from '~/plugins/contentful';
const client = contentful.createClient();

export const state = () => ({
  text: '',
  hashtags: ''
});

export const mutations = {
  setDiscountTweet (state, {text, hashtags}) {
    state.text = text;
    state.hashtags = hashtags;
  }
};

export const actions = {
  async fetch({ commit }) {
    try {
      const response = await client.getEntries({ content_type: 'discountTweet'});
      const discountTweet = response.items.map(entry => {
        const text = entry.fields['text'];
        const hashtags = entry.fields['hashtags'];
        return {
          text,
          hashtags
        }
      })[0];
      commit('setDiscountTweet', discountTweet);
    } catch (e) {
      console.error(e);
    }
  }
};
