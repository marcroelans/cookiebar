# cookiebar 🍪

<p align="left">
  <img src="http://img.badgesize.io/janmarkuslanger/cookiebar/master/cookiebar.min.js.svg">
</p>

A really simple cookiebar plugin. The plugin detects the browser language via `navigator.language`.


## Install

You can put the script tag into the body, or import it via CommonJS or AMD.

## Usage

``` javascript

cookiebar.init();

```

## Language Support

Currently supported languages:

- English
- German
- Polish
- French
- Chinese
- Spanish

If you want to help then fork this repo and add your language to
the langData array in [cookiebar-src.js](cookiebar-src.js) like this.

``` javascript
{
  name: 'english',
  lang: ['en', 'en-US', 'en-EG', 'en-AU', 'en-GB', 'en-CA', 'en-NZ', 'en-IE', 'en-ZA', 'en-JM', 'en-BZ', 'en-TT'],
  template: '<p>This Site uses Cookies.</p><button data-cookiebar-close>Accept!</button>'
}
```

## mount

By default the cookiebar appends to the `document.body`

With

``` javascript
Cookiebar.mount = document.querySelector('.renderCookiebarHere')
```

you can append the cookiebar where you want to.

## Thanks to

- karolsw2
- <a href="https://github.com/devmount">devmount</a>
- <a href="https://github.com/jonathanleeee">jonathanleeee</a>
- <a href="https://github.com/naitszox">naitszox</a>
- <a href="https://github.com/onmax">onmax</a>

for the contribution
