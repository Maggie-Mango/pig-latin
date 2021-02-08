
//business logic
let vowels = ['a', 'e', 'i', 'o', 'u']
function pigLatin(word) {
  let result = ""
  let vowelIndex = 0
  //checks if first character is a vowel
  if (vowels.includes(word[0]) === true) {
    result = word.concat('way')
    return result
  //checks to see if more than one word is inserted
  } else if (word.includes(" ")) {
    alert("this looks like more than one word... try again.");
    $("#resetbtn").show();

  }
  
    else {
    //loops through inputted word until they hit a vowel
    for (let i of word) {
      if (vowels.includes(i)) {
        vowelIndex = word.indexOf(i);
        //this break is hella important or else the loop will keep trying to find vowels
        break;
      //checks to if `qu` is part of the
      if(word.slice(i, i+1) === 'qu') i += 1;
      }
    }
    // constructs the sentence
    result = word.slice(vowelIndex) + word.slice(0, vowelIndex) + "ay"
    return result
  }    
}

/* Another way to solve it
function pigLatin(word) {
	let vowels = ['a','e','i','o','u']

  if (vowels.includes(word[0]) === true) {
    word = word.concat('way')
    return word
  }
	for (let i = 0; i<word.length; i++){
  	//The indexOf() method returns the position of the first occurrence of a specified value in a string. This method returns -1 if the value to search for never occurs.
  if (["a", "e", "i", "o", "u"].indexOf(word[i]) > -1){
      var firstcons = word.slice(0, i);
      console.log(word.slice(0,i))
      var middle = word.slice(i, word.length);
      console.log(word.slice(i, word.length))
      word = middle+firstcons+"ay";
      break;}
  }
    return word;
}

console.log(pigLatin("apple"))
*/

//user interface logic
$(document).ready(function() {
  $("form#formInput").submit(function(event) {
    event.preventDefault();
    var inputWord = $("input").val();
    $(".show").append("<li>Pig Latin Version of " + inputWord + ": " + pigLatin(inputWord)+ "</li>")
    $("#resetbtn").show();
  });
});

$(function () {
  $("#resetbtn").on("click", function (e) {
      e.preventDefault();
     // $('#theForm')[0].reset(); // Or
      $('form#formInput').trigger("reset");
      $("#resetbtn").hide();
  });
});
