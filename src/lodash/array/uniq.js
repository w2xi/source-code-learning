const uniq = require('lodash/uniq')

console.log(uniq([1, 2, 1]))
console.log(uniq())
console.log(uniq(null))
console.log(uniq(false))
console.log(uniq(1))
console.log(uniq('a'))
console.log(uniq({}))
console.log(uniq([]))
console.log(uniq([{}, {}, 1, null, 0, false]))

console.log('-----------------------------------')

console.log(arrayUniq([1, 2, 1]))
console.log(arrayUniq())
console.log(arrayUniq(null))
console.log(arrayUniq(false))
console.log(arrayUniq(1))
console.log(arrayUniq('a'))
console.log(arrayUniq({}))
console.log(arrayUniq([]))
console.log(arrayUniq([{}, {}, 1, null, 0, false]))

// 数组去重
function arrayUniq(arr){
  if ( Array.isArray(arr) ){
    return [...new Set(arr)]

    // is equality to

    // const ret = []

    // arr.forEach(val => {
    //   if ( ret.indexOf(val) === -1 ){
    //     ret.push(val)
    //   }
    // })

    // return ret
  }else {
    return []
  }
}