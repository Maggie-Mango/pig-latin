//spec test 2
let vowels = ['a', 'e', 'i', 'o', 'u']
function pigLatin(word) {
  if (vowels.includes(word[0]) === true) {
    word.concat('way')
  }
}

console.log(pigLatin('a'))