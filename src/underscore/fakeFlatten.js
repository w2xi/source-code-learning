const arr = [1, [2, [3, [4]]], 5]

// console.log(fakeFlatten(arr))
// console.log(fakeFlatten(arr, 2))
// console.log(fakeFlatten(arr, 3))

function fakeFlatten(arr, depth = 1, output = []) {
  let length = arr.length, index = -1

  while (++index < length) {
    const value = arr[index]

    // array or array-like
    if ( Array.isArray(value) ){
      if ( depth > 1 ){
        fakeFlatten(value, depth - 1, output)
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

exports.fakeFlatten = fakeFlatten