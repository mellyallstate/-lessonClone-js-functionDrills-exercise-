// #1
// Input: an array of numbers
// Output: the sum of the numbers that were passed in
// Edge Case: If the array is empty, return 0
// Test Cases:
//   Expect sumOfNums([1,2,3,4,5]) to equal 15
//   Expect sumOfNums([0,0,5]) to equal 5
//   Expect sumOfNums([-1,0,1])) to equal 0
//   Expect sumOfNums([])) to equal 0

const sumOfNums = function (numsArray) {
  let result = 0
 for (let i in numsArray) {
  result += numsArray[i]
 } 
 return result

}



// #2
// Input: an array of numbers
// Output: an array of the numbers from the first array that are strictly
//         greater (i.e. greater than but not equal to) than 10
// Test Case:
//   Expect numsGreaterThanTen([-1, 0, 1, 9, 9.5, 9.99, 10, 11, 20, 100]) to equal [11, 20, 100]

const numsGreaterThanTen = function (numsArray) {

    let result = []
 for (let i in numsArray) {
   if (numsArray[i] > 10)
  result.push(numsArray[i])
 } 
 return result
}

// #3
// Input: an array of numbers
// Output: `true` if ALL numbers passed in are strictly greater than 10;
//         `false` otherwise
// Edge Case: If the input array is empty, the function should return `true`.
// Test Cases:
//   Expect allGreaterThanTen([11, 20, 100]) to equal true
//   Expect allGreaterThanTen([9, 100, 299])) to equal false
//   Expect allGreaterThanTen([1, 2])) to equal false
//   Expect allGreaterThanTen([10])) to equal false
//   Expect allGreaterThanTen([])).to.equal(true);

const allGreaterThanTen = function (numsArray) {
  if(numsArray.length === 0 ) {
    return true
  }
  
  for (let i = 0; i < numsArray.length; i++) 
    if (numsArray[i] <= 10 ){
       return false
    }
}
 return true 
}

// #4
// Input: an array of words
// Output: an array of all words from the first array with five or more letters
// Test Cases:
//  Expect wordsWithAtLeastFiveLetters(['alphabet', 'banana', 'carrot', 'doe', 'egg'])
//    to equal ['alphabet', 'banana', 'carrot']


const wordsWithAtLeastFiveLetters = function (words) {

  const fiveLettersOrMore = []
   for(let i = 0; i < words.length; i++) {
   if(words[i].length >= 5) {
     fiveLettersOrMore.push(words[i])
   }
}

return fiveLettersOrMore

}

// #5
// Input: an array of words
// Output: `true` if ALL words start with the letter 'a' (case-insensitive),
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
// Test Cases:
//  Expect allStartingWithA(['apple', 'alligator', 'Arkansas'])) to equal true
//  Expect allStartingWithA(['Amy', 'Bob'])) to equal false
//  Expect allStartingWithA([]) to equal true


Const allStartingWithA = function (words) {
    if (word.length === 0){

    }
  for ( let i = 0; i < words.length; i++ ){
        let splitWord = words[i].split 
         if(splitWord[0] !== 'A' && splitWord !== 'a')
             return false 
  }
  
}

// #6
// Input: an array of words
// Output: `true` if there are ANY words that start with the letter 'b'
//          (case-insensitive), `false` otherwise
// Test Cases:
//   Expect anyStartingWithB(['Amy', 'Bob']) to equal true
//   Expect anyStartingWithB(['apple', 'alligator', 'Arkansas'])) to equal false
const anyStartingWithB = function (words) {

  // Your Code Here
}

// This last set of functions are all related to one another! Use functions 7 to solve function 8,
// use function 8 to solve 9, 10, and 11.

// #7
// Input: a single word and a number (`n`)
// Output: `true` if the word has at least some number (`n`) of vowels,
//          `false` otherwise
//    Assume that vowels are 'a', 'e', 'i', 'o', and 'u' (NOT 'y')
// Edge Case: If `n` is less than zero, return `null`.
// Test Cases:
//  Expect hasAtLeastNVowels('uncopywriteable', 0)) to equal true
//    This case should be true as long as n is less or equal to 6
//  Expect hasAtLeastNVowels('dangerous', 5) to equal false
//  Expect hasAtLeastNVowels('banana', -1) to equal null
const hasAtLeastNVowels = function (word, n) {

  // Your Code Here
}

// #8
// Input: an array of words
// Output: an array of words from the original array that have at least two
//          vowels
// Test Cases:
//   Expect wordsWithAtLeastTwoVowels(['alphabet', 'bun', 'can', 'doe', 'egg'])
//     to equal ['alphabet', 'doe']

const wordsWithAtLeastTwoVowels = function (_words, n) {
      if (n < o) { 
        return null
      }
      
      const vowels = "aeiou"
      let vowelCount = 0 

      for (let i = 0; i <  word.length; i++) {  
        for (let j = 0; j < vowels.length; j++) {
          vowelCount++
        }
       }
      }
// console.log(vowel count = ',vowelCount)
if (vowelCount >= n) {
} else {
  return false 
 }
}
console.log(hasAtLeastNVowels('uncopywriteable',2))


// #9
// Input: an array of words
// Output: `true` if ALL words have two or more vowels, `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
//  Expect allHaveAtLeastTwoVowels(['apple', 'alligator', 'Arkansas']) to equal true
//  Expect allHaveAtLeastTwoVowels(['Al', 'Barbara']) to equal false
//  Expect allHaveAtLeastTwoVowels(['Al', 'buck', 'can']) to equal false
//  Expect allHaveAtLeastTwoVowels([]) to equal true

const allHaveAtLeastTwoVowels = function (words) {

  // Your Code Here
}

// #10
// Input: an array of words
// Output: `true` if there are ANY words have two or more vowels,
//          `false` otherwise.
// Test Cases:
//  Expect anyHaveAtLeastTwoVowels(['apple', 'alligator', 'Arkansas'])) to equal true
//  Expect anyHaveAtLeastTwoVowels(['APPLE', 'bun', 'CAT'])) to equal true
const anyHaveAtLeastTwoVowels = function (words) {

  // Your Code Here
}

// #11
// Input: an array of words
// Output: `true` if NONE of the words have two or more vowels,
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
// Test Cases:
//   Expect noneHaveTwoOrMoreVowels(['Al', 'buck', 'can'])) to equal true
//   Expect noneHaveTwoOrMoreVowels(['Al', 'Barbara'])) to equal false
//   Expect noneHaveTwoOrMoreVowels(['apple', 'alligator', 'Arkansas']) to equal false
//   Expect noneHaveTwoOrMoreVowels([]) to equal true

const noneHaveTwoOrMoreVowels = function (words) {

  // Your Code Here
}

// #12
// Input: an array of words
// Output: an object ({}) where each word in the array is a key, and the value
//          tied to that key is the length of the word.
// e.g. given ['cat', 'horse', 'elephant'],
//      return { cat: 3, horse: 5, elephant: 8}
// Test Cases:
//  Expect buildObjectFromWords(['apple', 'banana', 'cranberry'])
//    to equal {'apple': 5, 'banana': 6, 'cranberry': 9}

const buildObjectFromWords = function (words) {

  // Your Code Here
}




