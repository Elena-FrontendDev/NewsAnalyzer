const presets = [
    [
      "@babel/env",
      {
        targets: { // указать цели, для полифилов
          
        },
        useBuiltIns: "usage", // эта настройка babel-polyfill, если стоит значение usage, то будут подставлятся полифилы для версий браузеров которые указали ниже.
        corejs: "3.4.1" // явно проставить версию corejs
      }
    ],
  ];
  
  module.exports = { presets };