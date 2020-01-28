const functions = require('firebase-functions');
const express = require('express');
const {Nuxt} = require('nuxt');

const app = express();
const nuxt = new Nuxt({
  dev: false,
  buildDir: '.nuxt',
  build: {
    publicPath: '/assets/'
  }
});

app.use(async (req, res) => {
  res.set('Cache-Control', 'public, max-age=10, s-maxage=10');
  await nuxt.ready();
  nuxt.render(req, res);
});

exports.app = functions.https.onRequest(app);
