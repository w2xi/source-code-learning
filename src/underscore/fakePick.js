const _ = require('underscore');
const { fakeFlatten } = require('./fakeFlatten')

// const ret = _.pick({ a: 'a', b: 'b', c: 'c' }, ['a', ['b', ['c']]])
// console.log(ret); // { a: 'a', b: 'b', c: 'c' }

// console.log(fakePick({ a: 'a', b: 'b', c: 'c' }, ['a']))
// console.log(fakePick({ a: 'a', b: 'b', c: 'c' }, ['a', ['b', ['c']]]))

function fakePick(obj, keys) {
  const result = {}

  obj = Object(obj)
  keys = fakeFlatten(keys, Infinity)

  for ( let i = 0; i < keys.length; i++ ) {
    const key = keys[i]

    if ( key in obj ) {
      result[key] = obj[key]
    }
  }

  return result
}

exports.fakePick = fakePick