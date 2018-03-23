const Cookiebar = (function Cookiebar() {
  /**
    * Lightweight vanilla js cookiebar
    *
    * @author Jan-Markus Langer
    * @license MIT
    */

  /**
    * version
    *
    * @type {string}
    */
  const version = '1.0.0';

  /**
    * mount
    *
    * @type {dom}
    */
  const mount = document.body;

  /**
    * default data
    */
  const defaultData = {
    template: '<p>This Site uses Cookies.</p><button data-cookiebar-close>Accept!</button>',
  };

  /**
    * data
    *
    * @type {array}
    */
  const langData = [
    {
      name: 'german',
      lang: ['de', 'de-DE', 'de-CH', 'de-AT', 'de-LU', 'de-LI'],
      template: '<p>Diese Seite benutzt Cookies.</p><button data-cookiebar-close>Einverstanden!</button>',
    },
    {
      name: 'english',
      lang: ['en', 'en-US', 'en-EG', 'en-AU', 'en-GB', 'en-CA', 'en-NZ', 'en-IE', 'en-ZA', 'en-JM', 'en-BZ', 'en-TT'],
      template: '<p>This Site uses Cookies.</p><button data-cookiebar-close>Accept!</button>',
    },
    {
      name: 'polish',
      lang: ['pl', 'pl-PL'],
      template: '<p>Ta strona używa ciasteczek.</p><button data-cookiebar-close>Akceptuj!</button>',
    },
    {
      name: 'french',
      lang: ['fr', 'fr-FR'],
      template: '<p>Ce site utilise des cookies.</p><button data-cookiebar-close>D\'accord!</button>',
    },
    {
      name: 'chinese',
      lang: ['zh-CN', 'zh-HK', 'zh-MO', 'zh-SG', 'zh-TW', 'zh-CHS', 'zh-CHT'],
      template: '<p>這個網站使用 Cookies.</p><button data-cookiebar-close>接受!</button>'
    },
    {
      name: 'dansk',
      lang: ['da'],
      template: '<p>Denne side anvender cookies.</p><button data-cookiebar-close>Enige!</button>'
    }
  ];

  /**
    * get cookie getcookie
    *
    * @returns {string}
    */
  const getCookieValue = function getCookieValue() {
    return document.cookie.replace(/(?:(?:^|.*;\s*)cookieAccepted\s*\=\s*([^;]*).*$)|^.*$/, '$1');
  };

  /**
    * set cookie value
    *
    * @param {String} value
    */
  const setCookieValue = function setCookieValue() {
    document.cookie = 'cookieAccepted=1;';
  };

  /**
    * get current language object
    *
    * @private
    * @return {Object}
    */
  const getLanguageTemplate = function getLanguageTemplate() {
    const lang = navigator.language;

    const resultLang = langData.filter(dataItem => dataItem.lang.indexOf(lang) > -1);
    return resultLang.length > 0 ? resultLang : defaultData;
  };

  /**
    * renderCookiebar
    */
  const renderCookie = function renderCookie() {
    // cookiebar
    const cookiebar = document.createElement('div');
    cookiebar.classList.add('cookiebar');

    // cookiebar innerHTML
    cookiebar.innerHTML = getLanguageTemplate()[0].template;

    cookiebar.querySelector('[data-cookiebar-close]').addEventListener('click', () => {
      cookiebar.outerHTML = '';
      setCookieValue();
    });

    mount.appendChild(cookiebar);
  };

  /**
    * init the cookiebar
    *
    */
  const init = function init() {
    if (getCookieValue() === '') {
      renderCookie();
    }
  };

  return {
    version,
    init,
  };
}());

// https://gist.github.com/gillesruppert/4564755
if (typeof define === 'function' && define.amd) {
  define(() =>{
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
