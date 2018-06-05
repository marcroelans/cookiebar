/**
  * index.js
  */

import { getScripts } from './detector.js';
import { renderCookiebar } from './render.js';

/**
  * Init the cookiebarjs
  */
const init = (mount) => {

  // TODO: Change
  const cookieAccepted = false;

  const root = mount || document.body;

  if(!cookieAccepted) {
    renderCookiebar(getScripts(), root);
  }


}

export { init }
