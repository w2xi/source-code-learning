const _ = require('underscore')
const functionsCount = _.functions(_).length

// console.log(_.keys(_).length);// 147
// console.log(functionsCount);  // 145

const ins = _([1,2,3])
console.log(ins)
console.log(ins instanceof _)

_([1,2,3]).each(function(item){
  console.log(item)
})