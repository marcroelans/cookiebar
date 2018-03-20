'use strict';

var Cookiebar = function Cookiebar() {
  /**
    * Lighweight vanilla js cookiebar
    *
    * @author Jan-Markus Langer
    * @license MIT
    */

  /**
    * version
    *
    * @type {string}
    */
  var version = '1.0.0';

  /**
    * mount
    *
    * @type {dom}
    */
  var mount = document.body;

  /**
    * default data
    */
  var defaultData = {
    template: '<p>This Site uses Cookies.</p><button data-cookiebar-close>Accept!</button>'
  };

  /**
    * data
    *
    * @type {array}
    */
  var langData = [{
    name: 'german',
    lang: ['de-CH', 'de-AT', 'de-LU', 'de-LI', 'de'],
    template: '<p>Diese Seite benutzt Cookies.</p><button data-cookiebar-close>Einverstanden!</button>'
  }, {
    name: 'english',
    lang: ['en', 'en-US', 'en-EG', 'en-AU', 'en-GB', 'en-CA', 'en-NZ', 'en-IE', 'en-ZA', 'en-JM', 'en-BZ', 'en-TT'],
    template: '<p>This Site uses Cookies.</p><button data-cookiebar-close>Accept!</button>'
  }, {
    name: 'polish',
    lang: ['pl', 'pl-PL'],
    template: '<p>Ta strona używa ciasteczek.</p><button data-cookiebar-close>Akceptuj!</button>'
  }];

  /**
    * get cookie getcookie
    *
    * @returns {string}
    */
  var getCookieValue = function getCookieValue() {
    return document.cookie.replace(/(?:(?:^|.*;\s*)cookieAccepted\s*\=\s*([^;]*).*$)|^.*$/, '$1');
  };

  /**
    * set cookie value
    *
    * @param {String} value
    */
  var setCookieValue = function setCookieValue() {
    document.cookie = 'cookieAccepted=1;';
  };

  /**
    * get current language object
    *
    * @private
    * @return {Object}
    */
  var getLanguageTemplate = function getLanguageTemplate() {
    var lang = navigator.language;

    var resultLang = langData.filter(function (dataItem) {
      return dataItem.lang.indexOf(lang) > -1;
    });
    return resultLang.length > 0 ? resultLang : defaultData;
  };

  /**
    * renderCookiebar
    */
  var renderCookie = function renderCookie() {
    // cookiebar
    var cookiebar = document.createElement('div');
    cookiebar.classList.add('cookiebar');

    // cookiebar innerHTML
    cookiebar.innerHTML = getLanguageTemplate()[0].template;

    cookiebar.querySelector('[data-cookiebar-close]').addEventListener('click', function () {
      cookiebar.outerHTML = '';
      setCookieValue();
    });

    mount.appendChild(cookiebar);
  };

  /**
    * init the cookiebar
    *
    */
  var init = function init() {
    if (getCookieValue() === '') {
      renderCookie();
    }
  };

  return {
    version: version,
    init: init
  };
}();

// https://gist.github.com/gillesruppert/4564755
if (typeof define === 'function' && define.amd) {
  define(function () {
    return Cookiebar;
  });
} else if (typeof exports !== 'undefined') {
  if (typeof module !== 'undefined' && module.exports) {
    exports = module.exports = Cookiebar;
  }
  exports.Cookiebar = Cookiebar;
} else {
  window.Cookiebar = Cookiebar;
}
