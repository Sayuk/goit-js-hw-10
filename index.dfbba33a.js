var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var r=o[e];delete o[e];var t={id:e,exports:{}};return n[e]=t,r.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequired7c6=r),r.register("gXocT",(function(e,n){var o;fetch(`https://restcountries.com/v3.1/name/${o}?fields=name,capital,population,flags,languages`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>console.log(e)))})),r("gXocT");
//# sourceMappingURL=index.dfbba33a.js.map
