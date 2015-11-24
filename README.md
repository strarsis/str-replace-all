str-replace-all
===============
Replaces all occurences of a string in another string.

[![david](https://david-dm.org/strarsis/str-replace-all.svg)](https://david-dm.org/strarsis/str-replace-all)

[![Build Status](https://travis-ci.org/strarsis/str-replace-all.svg)](https://travis-ci.org/strarsis/str-replace-all)

[![NPM](https://nodei.co/npm/str-replace-all.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/str-replace-all/)


Installation
------------
````
npm install --save str-replace-all
````


Arguments
---------
### needle
The string to be searched for

### replace
The string which replaces the needle string.

### haystack
The string which is searched for the needle string.


Usage
-----
````
var strReplaceAll = require('str-replace-all');
strReplaceAll('lorem ipsum lorem ipsum lorem ipsum', 'ipsum', 'lorem');
  => "lorem lorem lorem lorem lorem lorem"
````
