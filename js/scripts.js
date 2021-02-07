
//business logic
let vowels = ['a', 'e', 'i', 'o', 'u']
function pigLatin(word) {
  let result = ""
  let vowelIndex = 0
  if (vowels.includes(word[0]) === true) {
    result = word.concat('way')
    return result
  //first letter is consonant
  } else if (word.includes("%qu%")) {

  }
  
    else {
    for (let i of word) {
      if (vowels.includes(i)) {
        vowelIndex = word.indexOf(i);
      if(word.slice(i, i+1) === 'qu') i += 1;
      }
    }
    // construct the sentence
    result = word.slice(vowelIndex) + word.slice(0, vowelIndex) + "ay"
    return result
  }    
}

//user interface logic
$(document).ready(function() {
  $("form#formInput").submit(function(event) {
    event.preventDefault();
    var inputWord = $("input").val();
    $(".show").append("<li>Pig Latin Version of " + inputWord + " :" + pigLatin(inputWord)+ "</li>")
    $(".startOver").show();
  });
});

$(function () {
  $("#resetbtn").on("click", function (e) {
      e.preventDefault();
     // $('#theForm')[0].reset(); // Or
      $('form#formInput').trigger("reset");
   
  });
});
