export const actions = {
  async nuxtServerInit({dispatch}) {
    const promises = [];
    promises.push(dispatch('next/fetch'));
    promises.push(dispatch('guests/fetch'));
    promises.push(dispatch('residents/fetch'));
    promises.push(dispatch('entranceFees/fetch'));
    promises.push(dispatch('location/fetch'));
    promises.push(dispatch('timeTable/fetch'));
    promises.push(dispatch('discountTweet/fetch'));
    promises.push(dispatch('notes/fetch'));
    promises.push(dispatch('illustrations/fetch'));
    promises.push(dispatch('copyright/fetch'));
    promises.push(dispatch('notice/fetch'));
    promises.push(dispatch('registration/fetch'));
    await Promise.all(promises);
  }
};
