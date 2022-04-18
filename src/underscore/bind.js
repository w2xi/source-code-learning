const _ = require('underscore')

function foo(name, age){
  this.habbit = 'reading'
  console.log(this.value) // underscore 
  console.log(name) // w2xi 
  console.log(age)  // 26
}

var caller = _.bind(foo, { value: 'hello' }, 'w2xi')
var obj = new caller(26)
console.log(obj.__proto__ === foo.prototype) // true

console.log('-------------------');

function bind(fn, context, ...args){
  return function Bound(...rest){
    args = args.concat(rest)

    if (this instanceof Bound){
      return new fn(...args)
    }

    return fn.apply(context, args)
  }
}

var caller = bind(foo, { value: 'hello' }, 'w2xi')
var obj = new caller(26)
console.log(obj.__proto__ === foo.prototype) // true 
