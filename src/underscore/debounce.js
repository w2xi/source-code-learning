function debounce(fn, wait, immediate) {
  let timer, result

  const debounced = function(){
    let context = this, args =  arguments

    clearTimeout(timer)

    if (immediate) {
      const callNow = !timer

      timer = setTimeout(() => {
        timer = null
      }, wait)

      if (callNow) {
        result = fn.apply(context, args)
      }
    } else {
      timer = setTimeout(() => {
        result = fn.apply(context, args)
      }, wait)
    }

    return result
  }

  debounced.cancel = function() {
    clearTimeout(timer)
    timer = null
  }

  return debounced
}

module.exports = debounce