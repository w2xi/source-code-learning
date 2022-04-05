const camelCase = require('lodash/camelCase')

console.log(camelCase('Foo Bar'));
console.log(camelCase('--foo-bar--'));
console.log(camelCase('__FOO_BAR__'));

console.log('-------------------');

console.log(camelcase('Foo Bar'));
console.log(camelcase('--foo-bar--'));
console.log(camelcase('__FOO_BAR__'));

function camelcase(value)
{
  const arr = value.toLowerCase().split('')
  const chars = []

  arr.forEach((char,index) => {
    const previousChar = arr[index - 1]
    const isAlpha = /[a-zA-Z]/.test(previousChar)

    if ( /[a-zA-Z]/.test(char) ){
      chars.push(char)

      const LENGTH = chars.length

      if ( !isAlpha ){
        chars[LENGTH - 1] = char.toUpperCase()
      }

      if ( LENGTH === 1 ){
        chars[LENGTH - 1] = char
      }
    }
  })

  return chars.join('')
}