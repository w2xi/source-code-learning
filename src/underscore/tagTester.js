function tagTester(name){
  const tag = '[object ' + name + ']'

  return function(value){
    return Object.prototype.toString.call(value) === tag
  }
}

module.exports = tagTester