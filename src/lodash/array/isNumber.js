const isNumber = require('lodash/isNumber')

console.log(isNumber(1));
console.log(isNumber('a'));
console.log(isNumber(new Number(1)));

console.log('---------------');

console.log(isNum(1));
console.log(isNum('a'));
console.log(isNum(new Number(1)));

function isNum(value)
{
  // Checks whether value is new String(value) or not
  const isWrappedStringType = isObjectLike(value) && Object.prototype.toString.call(value) === '[object Number]'

  return typeof value == 'number' || isWrappedStringType
}

function isObjectLike(value)
{
  return value != null && typeof value === 'object'
}