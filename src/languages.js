/**
  * languages.js
  */

import {
  LANGUAGES,
  DEFAULT_TEXT } from './constants';

/**
  * get the user language
  */
export const getLanguage = () => {

  const userLang = navigator.language;
  const resultLang = LANGUAGES.filter(item => item.lang.indexOf(userLang) > -1);

  return resultLang.length > 0 ? resultLang[0] : DEFAULT_TEXT;
};
