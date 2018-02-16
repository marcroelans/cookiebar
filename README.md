# cookiebar

A really simple cookiebar plugin.

## Install

Put the script into your body

Then add this to start the cookiebar.

``` javascript

  Cookiebar.init();

```

## API 

### mount 

The cookiebar is inserted into the body. To change this use the mount var.

``` javascript

  Cookiebar.mount = document.querySelector('#app');

```

### addLanguageObject 

This functions expects an object with a least 3 keys.

__lang__ {Array} - expects the lang code that used for navigator.languages

__text__ {String} - The Text that is shown

__close__ {Text} - That that is shown in the Accept-Button

If you have a site where you have more infos.

__moreURL__ {String} - href to the site

__moreText__ {String} - the Text that is shown in this link

For example 

``` javascript

  Cookiebar.addLanguageObject(
    {
      lang: ['en'],
      text: 'This site uses cookies',
      close: 'Okay'
    }
  )

```
