//spec test 1
let vowels = ['a', 'e', 'i', 'o', 'u']
function pigLatin(word) {
  if (vowels.includes(word[0]) === true) {
    return true
  }
}

console.log(pigLatin('a'))