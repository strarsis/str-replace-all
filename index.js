var escapeRegexp  = require('escape-string-regexp');

var strReplaceAll = function(search, replace, input) {
  return input.replace(
    new RegExp(escapeRegexp(search), 'g'),
    replace
  );
}

module.exports = strReplaceAll;
