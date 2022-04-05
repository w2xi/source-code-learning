const _ = require('underscore');
const { fakeFlatten } = require('./fakeFlatten')
const { fakePick } = require('./fakePick')

// const obj = { a: 'a', b: 'b', c: 'c' }

// console.log(_.omit(obj, ['b']))

// console.log(fakeOmit(obj, ['a', ['b', ['c']]]))

function fakeOmit(obj, keys) { 
  const pickKeys = []

  keys = fakeFlatten(keys, Infinity)

  for ( let key in obj ) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && !~keys.indexOf(key) ) {
      pickKeys.push(key)
    }
  }

  // omit 与 pick 是相反的操作

  return fakePick(obj, pickKeys)
}

exports.fakeOmit = fakeOmit