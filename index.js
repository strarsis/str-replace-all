var escapeRegexp  = require('escape-string-regexp');

var strReplaceAll = function(needle, replace, haystack) {
  if(needle.length == 0 || haystack.length == 0) return haystack;
  return haystack.replace(
    new RegExp(escapeRegexp(needle), 'g'),
    replace
  );
}

module.exports = strReplaceAll;
