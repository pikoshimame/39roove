import MarkdownIt from 'markdown-it';
const md = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true
});

export const state = () => ({
  name: '',
  credit: '',
  image: {
    path: '',
    type: ''
  },
  text: '',
  twitter: ''
});

export const getters = {
  imagePath(state) {
    const type = (state.image.type === 'portrait') ? '?w=' : '?h=';
    const size = 279;
    return {
      x1: `${state.image.path}${type}${size}&fit=scale`,
      x2: `${state.image.path}${type}${size * 2}&fit=scale`,
      x3: `${state.image.path}${type}${size * 3}&fit=scale`,
    };
  },
  textHtml(state) {
    return md.render(state.text);
  }
};

export const mutations = {
  setProfile(state, {name, credit, image, text, twitter}) {
    state.name = name;
    state.credit = credit;
    state.image = image;
    state.text = text;
    state.twitter = twitter;
  }
};
