"use strict";

const str = "0 12 -5 123 -18";
const regex = /(?<!-)\b\d+/g;
alert(str.match(regex));
