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

/**
 * @param {Object} req
 * @param {Object} res
 * @return {Promise}
 */
function handleRequest(req, res) {
  res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
  return new Promise((resolve) => {
    nuxt.render(req, res);
    resolve();
  });
}

app.use(handleRequest);
exports.app = functions.https.onRequest(app);
