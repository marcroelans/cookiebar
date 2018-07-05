/**
  * render.js
  */

import { getLanguage } from './languages';
import { removeElement } from './utils';

var Cookie = require('js-cookie');

/**
  * returns the html list of the script list
  *
  * @param {Array} scripts
  * @returns {VNODE}
  */
const renderList = scripts => {

  const container = document.createElement('div');
  container.classList.add('scripts');

  const text = document.createElement('p');
  const textNode = document.createTextNode(getLanguage().scriptText);
  text.appendChild(textNode);

  container.appendChild(text);

  // creating the ul element
  const ulEl = document.createElement('ul');

  // loop through the script and create the li elements
  scripts.forEach(script => {

    const liEl = document.createElement('li');

    const textNode = document.createTextNode(script);
    liEl.appendChild(textNode);

    ulEl.appendChild(liEl);
  })

  container.appendChild(ulEl);

  return container;
}

/**
  * Render the main Text
  *
  * @returns {VNODE}
  */
const renderMainText = () => {

  const container = document.createElement('div');
  container.classList.add('text');

  const text = document.createElement('p');
  const textNode = document.createTextNode(getLanguage().mainText);
  text.appendChild(textNode);

  container.appendChild(text);

  return container;
};

/**
  * render close button
  *
  * @param {VNODE} cookiebar
  * @returns {VNODE}
  */
  const renderCloseButton = cookiebar => {

    const button = document.createElement('button');
    button.classList.add('button');
    const text = document.createTextNode(getLanguage().buttonText);
  button.appendChild(text);

  button.addEventListener('click', () => {
    removeElement(cookiebar);
    Cookie.set('cookieAccepted', '1');
  })

  return button;
};

/**
  * main render function of the cookiebar
  *
  * @param {Array} scripts
  * @param {String} language
  */
export const renderCookiebar = (scripts, root) => {

  // create the cookiebar
  const cookiebar = document.createElement('div');
  cookiebar.classList.add('cookiebar');

  if(scripts.length > 0) {
    cookiebar.appendChild(renderList(scripts))
  }

  cookiebar.appendChild(renderMainText())

  cookiebar.appendChild(renderCloseButton(cookiebar));

  root.appendChild(cookiebar)
}
