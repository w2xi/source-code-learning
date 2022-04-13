const _ = require('underscore');
const flatten = require('./flatten')

// const ret = _.pick({ a: 'a', b: 'b', c: 'c' }, ['a', ['b', ['c']]])
// console.log(ret); // { a: 'a', b: 'b', c: 'c' }

// console.log(pick({ a: 'a', b: 'b', c: 'c' }, ['a']))
// console.log(pick({ a: 'a', b: 'b', c: 'c' }, ['a', ['b', ['c']]]))

function pick(obj, keys) {
  const result = {}

  obj = Object(obj)
  keys = flatten(keys, Infinity)

  for ( let i = 0; i < keys.length; i++ ) {
    const key = keys[i]

    if ( key in obj ) {
      result[key] = obj[key]
    }
  }

  return result
}

module.exports = pick