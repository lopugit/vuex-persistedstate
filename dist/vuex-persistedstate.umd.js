!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):e.createPersistedState=r()}(this,function(){var e=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===r}(e)}(e)},r="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function t(e,r){return!1!==r.clone&&r.isMergeableObject(e)?c(Array.isArray(e)?[]:{},e,r):e}function n(e,r,n){return e.concat(r).map(function(e){return t(e,n)})}function o(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(r){return e.propertyIsEnumerable(r)}):[]}(e))}function u(e,r){try{return r in e}catch(e){return!1}}function c(r,i,a){(a=a||{}).arrayMerge=a.arrayMerge||n,a.isMergeableObject=a.isMergeableObject||e,a.cloneUnlessOtherwiseSpecified=t;var f=Array.isArray(i);return f===Array.isArray(r)?f?a.arrayMerge(r,i,a):function(e,r,n){var i={};return n.isMergeableObject(e)&&o(e).forEach(function(r){i[r]=t(e[r],n)}),o(r).forEach(function(o){(function(e,r){return u(e,r)&&!(Object.hasOwnProperty.call(e,r)&&Object.propertyIsEnumerable.call(e,r))})(e,o)||(i[o]=u(e,o)&&n.isMergeableObject(r[o])?function(e,r){if(!r.customMerge)return c;var t=r.customMerge(e);return"function"==typeof t?t:c}(o,n)(e[o],r[o],n):t(r[o],n))}),i}(r,i,a):t(i,a)}c.all=function(e,r){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(e,t){return c(e,t,r)},{})};var i=c;return function(e){var r=(e=e||{}).storage||window&&window.localStorage,t=e.key||"vuex";(e.assertStorage||function(){r.setItem("@@",1),r.removeItem("@@")})(r);var n,o=function(){return(e.getState||function(e,r){var t;try{return(t=r.getItem(e))&&void 0!==t?JSON.parse(t):void 0}catch(e){}})(t,r)};return e.fetchBeforeUse&&(n=o()),function(u){e.fetchBeforeUse||(n=o()),"object"==typeof n&&null!==n&&(u.replaceState(e.overwrite?n:(e.merge||i)(u.state,n,e.mergeOptions||{arrayMerge:e.arrayMerger||function(e,r){return r},clone:!1})),(e.rehydrated||function(){})(u)),(e.subscriber||function(e){return function(r){return e.subscribe(r)}})(u)(function(n,o){(e.filter||function(){return!0})(n)&&(e.setState||function(e,r,t){return t.setItem(e,JSON.stringify(r))})(t,(e.reducer||function(e,r){return Array.isArray(r)?r.reduce(function(r,t){return function(e,r,t,n){return(r=r.split?r.split("."):r).slice(0,-1).reduce(function(e,r){return e[r]=e[r]||{}},e)[r.pop()]=t,e}(r,t,function(e,r,t){return void 0===(e=(r.split?r.split("."):r).reduce(function(e,r){return e&&e[r]},e))?void 0:e}(e,t))},{}):e})(o,e.paths),r)})}}});
//# sourceMappingURL=vuex-persistedstate.umd.js.map
