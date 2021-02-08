
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
      //checks to if `qu` is part of the word
      if(word.slice(i, i+1) === 'qu') i += 1;
      }
    }
    // constructs the sentence
    result = word.slice(vowelIndex) + word.slice(0, vowelIndex) + "ay"
    return result
  }    
}

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
