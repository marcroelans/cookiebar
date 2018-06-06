/**
  * index.js
  */

import { getScripts } from './detector.js';
import { renderCookiebar } from './render.js';

var Cookie = require('js-cookie');

/**
  * Init the cookiebarjs
  */
const init = (mount) => {

  const cookieAccepted = Cookie.get('cookieAccepted');

  const root = mount || document.body;

  if(cookieAccepted !== '0') {
    renderCookiebar(getScripts(), root);
  }

}

export { init }
