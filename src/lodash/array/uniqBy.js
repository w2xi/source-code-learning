const uniqBy = require('lodash/uniqBy')
const uniq = require('lodash/uniq')
const isFunction = require('lodash/isFunction' )

console.log(uniqBy([1.2, 0.1, 1.4], Math.floor))
console.log(uniqBy([{id: 1}, {id:2}, {x:1}, 1, 1], 'id'))
console.log(uniqBy([{id: 1}, {id:2}, {id:1}]))
console.log(uniqBy([1,2,1]))
console.log(uniqBy([1,2,1], 'x'))

console.log('----------------------------');

console.log(arrayUniqBy([1.2, 0.1, 1.4], Math.floor))
console.log(uniqBy([{id: 1}, {id:2}, {x:1}, 1, 1], 'id'))
console.log(uniqBy([{id: 1}, {id:2}, {id:1}]))
console.log(uniqBy([1,2,1]))
console.log(uniqBy([1,2,1], 'x'))


function arrayUniqBy(arr, on){
  if ( Array.isArray(arr) ){
    if ( on ){
      if ( isFunction(on) ){
        const tmp = arr.map(on)
        const duplicateFreeVal = []
        const duplicateFreeIndex = []

        tmp.forEach((val, idx) => {
          if ( duplicateFreeVal.indexOf(val) === -1 ){
            duplicateFreeVal.push(val)
            duplicateFreeIndex.push(idx)
          }
        })

        return duplicateFreeIndex.map(idx => arr[idx])
      }else {
        const ret = {}

        arr.filter(x => x).forEach(item => {
          if ( !ret[item[on]] ){
            ret[item[on]] = item
          }
        })

        return Object.values(ret)
      }
    }else {
      return uniq(arr)
    }
  }else {
    return []
  }
}