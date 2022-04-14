function isElement(value){
  return !!(value && value.nodeType === 1)
}

module.exports = isElement