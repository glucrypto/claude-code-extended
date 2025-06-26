"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unpipe";
exports.ids = ["vendor-chunks/unpipe"];
exports.modules = {

/***/ "(rsc)/./node_modules/unpipe/index.js":
/*!**************************************!*\
  !*** ./node_modules/unpipe/index.js ***!
  \**************************************/
/***/ ((module) => {

eval("/*!\n * unpipe\n * Copyright(c) 2015 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = unpipe\n\n/**\n * Determine if there are Node.js pipe-like data listeners.\n * @private\n */\n\nfunction hasPipeDataListeners(stream) {\n  var listeners = stream.listeners('data')\n\n  for (var i = 0; i < listeners.length; i++) {\n    if (listeners[i].name === 'ondata') {\n      return true\n    }\n  }\n\n  return false\n}\n\n/**\n * Unpipe a stream from all destinations.\n *\n * @param {object} stream\n * @public\n */\n\nfunction unpipe(stream) {\n  if (!stream) {\n    throw new TypeError('argument stream is required')\n  }\n\n  if (typeof stream.unpipe === 'function') {\n    // new-style\n    stream.unpipe()\n    return\n  }\n\n  // Node.js 0.8 hack\n  if (!hasPipeDataListeners(stream)) {\n    return\n  }\n\n  var listener\n  var listeners = stream.listeners('close')\n\n  for (var i = 0; i < listeners.length; i++) {\n    listener = listeners[i]\n\n    if (listener.name !== 'cleanup' && listener.name !== 'onclose') {\n      continue\n    }\n\n    // invoke the listener\n    listener.call(stream)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvdW5waXBlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isc0JBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQixzQkFBc0I7QUFDeEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyIvaG9tZS9nbHUvUHJvamVjdHMvYWxsL2NsYXVkZS1leHQvbm9kZV9tb2R1bGVzL3VucGlwZS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIHVucGlwZVxuICogQ29weXJpZ2h0KGMpIDIwMTUgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICogQHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gdW5waXBlXG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHRoZXJlIGFyZSBOb2RlLmpzIHBpcGUtbGlrZSBkYXRhIGxpc3RlbmVycy5cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gaGFzUGlwZURhdGFMaXN0ZW5lcnMoc3RyZWFtKSB7XG4gIHZhciBsaXN0ZW5lcnMgPSBzdHJlYW0ubGlzdGVuZXJzKCdkYXRhJylcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChsaXN0ZW5lcnNbaV0ubmFtZSA9PT0gJ29uZGF0YScpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8qKlxuICogVW5waXBlIGEgc3RyZWFtIGZyb20gYWxsIGRlc3RpbmF0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gc3RyZWFtXG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gdW5waXBlKHN0cmVhbSkge1xuICBpZiAoIXN0cmVhbSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IHN0cmVhbSBpcyByZXF1aXJlZCcpXG4gIH1cblxuICBpZiAodHlwZW9mIHN0cmVhbS51bnBpcGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBuZXctc3R5bGVcbiAgICBzdHJlYW0udW5waXBlKClcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIE5vZGUuanMgMC44IGhhY2tcbiAgaWYgKCFoYXNQaXBlRGF0YUxpc3RlbmVycyhzdHJlYW0pKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgbGlzdGVuZXJcbiAgdmFyIGxpc3RlbmVycyA9IHN0cmVhbS5saXN0ZW5lcnMoJ2Nsb3NlJylcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldXG5cbiAgICBpZiAobGlzdGVuZXIubmFtZSAhPT0gJ2NsZWFudXAnICYmIGxpc3RlbmVyLm5hbWUgIT09ICdvbmNsb3NlJykge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICAvLyBpbnZva2UgdGhlIGxpc3RlbmVyXG4gICAgbGlzdGVuZXIuY2FsbChzdHJlYW0pXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/unpipe/index.js\n");

/***/ })

};
;