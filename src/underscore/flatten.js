const arr = [1, [2, [3, [4]]], 5]

// console.log(flatten(arr))
// console.log(flatten(arr, 2))
// console.log(flatten(arr, 3))

function flatten(arr, depth = 1, output = []) {
  let length = arr.length, index = -1

  while (++index < length) {
    const value = arr[index]

    // array or array-like
    if ( Array.isArray(value) ){
      if ( depth > 1 ){
        flatten(value, depth - 1, output)
      } else {
        let i = -1, len = value.length, offset = output.length

        while ( ++i < len ){
          output[offset + i] = value[i]
        }
      }
    } else {
      output[output.length] = value
    }
  }

  return output 
}

module.exports = flatten