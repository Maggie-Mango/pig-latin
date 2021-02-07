//spec test 3

let vowels = ['a', 'e', 'i', 'o', 'u']
let result = " "
function pigLatin(word) {
  if (vowels.includes(word[0]) === true) {
    result = word.concat('way')
    return result
  } else if ((vowels.includes(word[0]) === false) || (vowels.includes(word[1]) === false)) {
    alert("this works")
  }    
}


pigLatin("chair")