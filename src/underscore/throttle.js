function throttle(fn, await, options){
  let timeout, result, lastTime = 0

  options || (options = {})

  // leading：false 表示禁用第一次执行
  // trailing: false 表示禁用停止触发的回调
  const { leading, trailing } = options

  const throttled = function(){
    const now = Date.now()

    if (!leading && !lastTime){
      lastTime = now
    }

    const remaining = await - (now - lastTime)

    if (remaining <= 0 || remaining > await){
      if (timeout){
        clearTimeout(timeout)
        timeout = null
      }

      lastTime = Date.now()
      result = fn.apply(this, arguments)
    } else if (!timeout && trailing) {
      timeout = setTimeout(() => {
        lastTime = leading ? Date.now() : 0
        timeout = null
        result = fn.apply(this, arguments)
      }, remaining)
    }

    // timestamp version
    // const now = Date.now()

    // if (now - lastTime > await){
    //   result = fn.apply(this, arguments)
    //   lastTime = now
    // }

    // timeout version
    // if (!timeout){
    //   timeout = setTimeout(() => {
    //     result = fn.apply(this, arguments)
    //     timeout = null
    //   }, await)
    // }

    return result
  }

  throttled.cancel = function(){
    clearTimeout(timeout)
    timeout = null
    lastTime = 0
  }

  return throttled
}