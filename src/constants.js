/**
  * This file stores the contants
  */

export const DEFAULT_TEXT = {
  scriptText: 'This site uses....',
  mainText: 'Lorem',
  buttonText: 'Ok!'
};

export const LANGUAGES = [
  {
    name: 'de',
    lang: [
      'de',
      'de-DE',
      'de-CH',
      'de-AT',
      'de-LU',
      'de-LI'
    ],
    scriptText: 'Diese Seite nutzt folgende Scripte:',
    mainText: 'Durch die Nutzung der Seite stimmen Sie zu.',
    buttonText: 'Einverstanden!'
  }
];

export const LINKS = [
  {name: 'Google Fonts', type: 'link', keyword: 'fonts.googleapis'},
  {name: 'Fonts.com', type: 'link', keyword: 'fast.fonts.net'},
  {name: 'Fonts.com', type: 'script', keyword: 'fast.fonts.net'}
];

export const TAG_ATTRIBUTES = {
  'link': 'href',
  'script': 'src'
};
