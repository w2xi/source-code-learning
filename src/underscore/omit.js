const _ = require('underscore');
const flatten = require('./flatten')
const pick = require('./pick')

// const obj = { a: 'a', b: 'b', c: 'c' }

// console.log(_.omit(obj, ['b']))

// console.log(omit(obj, ['a', ['b', ['c']]]))

function omit(obj, keys) { 
  const pickKeys = []

  keys = flatten(keys, Infinity)

  for ( let key in obj ) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && !~keys.indexOf(key) ) {
      pickKeys.push(key)
    }
  }

  // omit 与 pick 是相反的操作

  return pick(obj, pickKeys)
}

module.exports = omit