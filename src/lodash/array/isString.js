const isString = require('lodash/isString')
const isObjectLike = require('lodash/isObjectLike')

console.log(isString(1));
console.log(isString('1'));
console.log(isString(new String(1)));

console.log('---------------');

console.log(isStr(1));
console.log(isStr('1'));
console.log(isStr(new String(1)));


function isStr(value)
{ 
  return typeof value === 'string' || isObjectLike(value) && Object.prototype.toString.call(value) === '[object String]'
}