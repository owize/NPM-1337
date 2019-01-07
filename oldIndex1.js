#!/usr/bin/env node
var clc = require("cli-color");

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});




let number = 0;
for (let i = 0; i < 100; i++) {
  number++;
  isEven(number);
}

function isEven(number) {
  if (number % 2 == 0) return console.log(clc.blue(number));
  else return console.log(clc.red(number));
}
