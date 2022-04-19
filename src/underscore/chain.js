function _$1(obj){
  if (!(this instanceof _$1)) {
    return new _$1(obj)
  }

  this._wrapped = obj
}

_$1.prototype.value = function(){
  return this._wrapped
}

function chain(obj){
  const instance = _$1(obj)
  instance._chain = true

  // _$1 { _wrapped: [1,2,3,4], _chain: true }

  return instance
}

function isFunction(value){
  return typeof value === 'function'
}

function isArrayLike(obj){
  return obj && typeof obj.length === 'number' && obj.length >= 0 && obj.length <= Number.MAX_SAFE_INTEGER
}

function isObject(obj){
  return obj && typeof obj === 'object' || typeof obj === 'function'
}

function keys(obj){
  return isObject(obj) ? Object.keys(obj) : []
}


function functions(obj){
  const result = []

  for (let key in obj) {
    if ( isFunction(obj[key]) ) {
      result.push(key)
    }
  }

  return result.sort()
}

function each(obj, callback){
  if (isArrayLike(obj)) {
    for (let i = 0; i < obj.length; i++) {
      callback(obj[i], i, obj)
    }
  } else {
    const _keys = keys(obj)

    for (let i = 0; i < _keys.length; i++){
      callback(obj[keys[i]], _keys[i], obj)
    }
  }

  return obj
}

function chainResult(instance, obj){
  return instance._chain ? _$1(obj).chain() : obj
}

function mixin(obj){
  each(functions(obj), function(name){
    const func = _$1[name] = obj[name]

    _$1.prototype[name] = function(){
      var args = [this._wrapped]

      Array.prototype.push.apply(args, arguments)

      // return func.apply(_$1, args)

      return chainResult(this, func.apply(_$1, args))
    }
  })

  return _$1
}

const allExports = {
  isFunction,
  isArrayLike,
  isObject,
  keys,
  functions,
  each,
  mixin,
  chain,
}

const _ = mixin(allExports)

global._ = _

var ret = _.chain([1,2,3,4]).each(item => {
  console.log(item);
}).value()

console.log(ret)

// _.each([1,2,3], function(item){
//   console.log(item);
// })

// _([1,2,3]).each(function(item){
//   console.log(item);
// })

