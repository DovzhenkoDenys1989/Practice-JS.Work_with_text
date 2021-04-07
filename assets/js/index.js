"use strict";

const str = "some string i need";

function capitalize(string) {
  return string.split(' ').map(element => element[0].toUpperCase() + element.slice(1)).join(' ');
}

console.log(capitalize(str));