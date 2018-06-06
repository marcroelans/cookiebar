/**
  * detector.js
  */

// IMport
import { LINKS, TAG_ATTRIBUTES } from './constants';
import { hasKeyword, isArray } from './utils';


/**
  * Function that retutns the list of the script names which are included
  *
  * @param {Array} links
  * @returns {Array}
  */
export const getScripts = () => {

  // List of scripts
  let scriptNames = [];

  // Looping through
  LINKS.forEach(link => {

    // Link is included
    let isIncluded = false;

    // Element type
    const type = link.type;

    // Element attribute
    let attribute = TAG_ATTRIBUTES[type];

    // get all Elements with the type in DOM
    const elements = [].slice.call(document.querySelectorAll(type));

    for (let element of elements) {

      if( element.getAttribute(attribute) === null &&
          element.innerHTML.includes(link.keyword)) {
            isIncluded = true;
      }

      if( element.getAttribute(attribute) !== null &&
          element.getAttribute(attribute).includes(link.keyword)) {
            isIncluded = true;
      }

    }

    if(isIncluded) {
      scriptNames.push(link.name)
    }

  })

  return scriptNames;
}
