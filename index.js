'use strict';

var escapeRegexp  = require('escape-string-regexp');

/**
 * Replaces all occurences of a string in another string.
 * @constructor
 * @param {string} needle   - The string to be searched.
 * @param {string} replace  - The string which replaces the needle string.
 * @param {string} haystack - The string which is searched for the needle string.
 */
var strReplaceAll = function(needle, replace, haystack) {
  if(needle.length === 0 || haystack.length === 0) {
    return haystack;
  }
  return haystack.replace(
    new RegExp(escapeRegexp(needle), 'g'),
    replace
  );
};

module.exports = strReplaceAll;
