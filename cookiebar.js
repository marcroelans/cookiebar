/**
  * Lighweight cookiebar
  *
  * @author Jan-Markus Langer
  * @license MIT
  */

var Cookiebar = (function () {


  /**
    * version
    *
    * @type {String}
    */
  version = '1.0.0';


  /**
    *
    * Utility
    *
    */


  /**
    * check if item is in Array
    *
    * @private
    * @param {Array} langArray
    * @param {String}
    */
  var isInArray = function isInArray (langArray, item) {
    for (var i = 0; i < langArray.length; i++) {
      if (langArray[i] === item) {
        return true;
      }
    }
    return false;
  };

  /**
    * mount
    *
    * @type {dom}
    */
  var mount = document.body;

  /**
    * data
    *
    * @type {Array}
    */

  var defaultData = {
    lang: ['en', 'en-US', 'en-EG', 'en-AU', 'en-GB', 'en-CA', 'en-NZ', 'en-IE', 'en-ZA', 'en-JM', 'en-BZ', 'en-TT'],
    text: 'This Site uses Cookies.',
    close: 'Accept!'
  };

  var data = [
    {
      lang: ['de-CH', 'de-AT', 'de-LU', 'de-LI', 'de'],
      text: 'Diese Seite benutzt Cookies.',
      close: 'Einverstanden!'
    },
    {
      lang: ['en', 'en-US', 'en-EG', 'en-AU', 'en-GB', 'en-CA', 'en-NZ', 'en-IE', 'en-ZA', 'en-JM', 'en-BZ', 'en-TT'],
      text: 'This Site uses Cookies.',
      close: 'Accept!'
    }
  ];


  /**
    * get cookie value
    *
    * @return {String}
    */
  var getCookieValue = function getCookieValue () {
    var cookieAccepted = document.cookie.replace(/(?:(?:^|.*;\s*)cookieAccepted\s*\=\s*([^;]*).*$)|^.*$/, '$1');
    return cookieAccepted;
  };


  /**
    * set cookie value
    *
    * @param {String} value
    */
  var setCookieValue = function setCookieValue (value) {
    document.cookie = value;
  };


  /**
    * get current language object
    *
    * @private
    * @return {Object}
    */
  var getLanguageObject = function getLanguageObject () {

    var lang = navigator.language;

    for (var i = 0; i < data.length; i++) {

      if (isInArray(data[i].lang, lang)) {
        return data[i];
      }

    }

    return defaultData;

  };


  /**
    * add language object
    *
    * @public
    * @param {Object}
    */
  var addLanguageObject = function addLanguageObject (langObj) {

    data.unshift(langObj);

  }


  /**
    * render Cookiebar
    *
    * @private
    */
  var renderCookiebar = function renderCookiebar () {

    var cookiebar = document.createElement('div');
    cookiebar.classList.add('cookiebar');

    var cookiebar_inside = document.createElement('div');
    cookiebar_inside.classList.add('inside');
    cookiebar.appendChild(cookiebar_inside);


    var langObj = getLanguageObject();

    var text = document.createElement('p');
    text.classList.add('text');
    text.innerText = langObj.text;
    cookiebar_inside.appendChild(text);

    var button_container = document.createElement('div');
    button_container.classList.add('buttoncontainer');
    cookiebar_inside.appendChild(button_container);

    var acceptButton = document.createElement('button');
    acceptButton.classList.add('button', 'accept');
    acceptButton.innerText = langObj.close;
    button_container.appendChild(acceptButton);
    acceptButton.addEventListener('click', function(){
      setCookieValue('cookieAccepted=1');
      cookiebar.outerHTML = '';
    })


    if (langObj.infoUrl !== undefined && langObj.infoUrl !== '') {

      var moreButton = document.createElement('a');
      moreButton.setAttribute('href', langObj.infoUrl);
      moreButton.classList.add('button', 'more');

      if (langObj.infoText !== undefined && langObj.infoText !== '') {
        moreButton.innerText = langObj.infoText;
      } else {
        moreButton.innerText = 'Ok';
      }

      button_container.appendChild(moreButton)

    }

    mount.appendChild(cookiebar)

  };


  /**
    * Init
    *
    * @public
    */
  var init = function init () {

    var cookieVal = getCookieValue();

    if (cookieVal === '' || cookieVal === '0') {
      renderCookiebar()
    }

  }


  // Export

  return {
    mount: mount,
    addLanguageObject: addLanguageObject,
    init: init
  }

}());
