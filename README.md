# Pig Latin Converter

### A simple program that converts your words into Pig Latin!

#### By Maggie Saldivia **{Maggie-Mango}**

## Technologies Used
* HTML
* CSS
* Bootstrap
* JQuery
* JavaScript


## Description
* For words beginning with a vowel, add "way" to the end.
* For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
* If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!
* For words beginning with "y", treat "y" as a consonant.


## Setup/Installation Requirements

* Clone this repository to your desktop.
* Navigate to the top level of the directory.
* Open pig-latin/index.html in your browser.

## Link

Unavailable until more features are added

## Specs

| Describe | Test | Expect |
|:--------:|:--------:|:--------:|
|`pigLatin()`| "It will check for words beginning with a vowel" | (pigLatin("a")).toEqual(true)) |
|`pigLatin()`| "It will add 'way' to the end of words that begin with a vowel" | (pigLatin("a")).toEqual("away") |
|`pigLatin()`| "It will move the first one or two consonants to the end and add 'way'" | (pigLatin("chair")).toEqual("airchay") |
|`pigLatin()`| "It will check for the first one or two consonants that also include 'qu'" | (pigLatin("squeal")).toEqual("true") |



## Known Bugs

* Does not take more than one word
* User needs to refresh to try again
* Does not use a declarative approach

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contact Information

maggiesaldivia@gmail.com