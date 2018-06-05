/**
  * Util js
  */

  /**
    * validate a String
    *
    * @param {*} expectedString
    * @returns {Boolean}
    */
  export const isString = expectedString => typeof expectedString === 'string';

/**
  * validate an Array
  *
  * @param {*} expectedArray
  * @returns {Boolean}
  */
export const isArray = expectedArray => Array.isArray(expectedArray);

/**
  * removes an element in the DOM
  *
  * @param {DOM} element
  */
export const removeElement = element => {
  element.parentElement.removeChild(element);
}
