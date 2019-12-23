export const actions = {
  async nuxtServerInit({ dispatch }) {
    const promises = [];
    promises.push(dispatch('next/fetch'));
    promises.push(dispatch('guests/fetch'));
    promises.push(dispatch('residents/fetch'));
    promises.push(dispatch('timeTable/fetch'));
    promises.push(dispatch('discountTweet/fetch'));
    promises.push(dispatch('copyright/fetch'));
    await Promise.all(promises);
  }
};
