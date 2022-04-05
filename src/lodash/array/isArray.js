const isArray = require('lodash/isArray')

console.log(isArray({}))
console.log(isArray([]))

console.log('------------------------');

console.log(isArr({}))
console.log(isArr([]))

function isArr(value){
  return Array.isArray(value)
}