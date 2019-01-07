#!/usr/bin/env node
const clc = require("cli-color");

console.log(clc.red(process.argv[2]));

if(process.argv[2]===undefined){
console.log("There was an error");
}
