const isFunction = require('lodash/isFunction')

console.log(isFunction({}))
console.log(isFunction(() => {}))
console.log(isFunction(Math.floor))

console.log('----------------');

console.log(isFunc({}))
console.log(isFunc(() => {}))
console.log(isFunc(Math.floor))

function isFunc(value)
{
  return Object.prototype.toString.call(value) === '[object Function]'
}

