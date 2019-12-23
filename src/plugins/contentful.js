import * as contentful from 'contentful';

const isDevelopment = process.env.NODE_ENV === 'development';
const config = {
  space: process.env.CTF_SPACE_ID,
  accessToken: (isDevelopment) ? process.env.CTF_CDA_ACCESS_TOKEN_DEV : process.env.CTF_CDA_ACCESS_TOKEN
};
if (isDevelopment) { config.host = 'preview.contentful.com'; }

export default {
  createClient() {
    return contentful.createClient(config);
  }
};
