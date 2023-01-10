// // Create a function, returnPetsWithNoFish, that takes in a array of pet objects and returns an array of pet objects with no pets of type 'Fish'.
//
//     const pets = [
//     {
//         name: 'Sparky',
//         type: 'Fish',
//         age: 4
//     },
//     {
//         name: 'Mr. Pig',
//         type: 'Cat',
//         age: 4
//     },
//     {
//         name: 'Bubba',
//         type: 'Dog',
//         age: 5
//     },
//     {
//         name: 'Beans',
//         type: 'Dog',
//         age: 3
//     },
//     {
//         name: 'Mr. Salmon',
//         type: 'Fish',
//         age: 1
//     }
// ];
//
// function returnPetsWithNoFish(pets){
//     const output = [];
//     pets.forEach(pet => {
//         if (pet.type !== `Fish`) {
//             output.push(pet);
//         }
//     })
//     return output;
// }
//
// console.log(returnPetsWithNoFish(pets);
// returnPetsWithNoFish(pets) // returns...
//
//     [
//     {
//         name: 'Mr. Pig',
//         type: 'Cat',
//         age: 4
//     },
//         {
//             name: 'Bubba',
//             type: 'Dog',
//             age: 5
//         },
//         {
//             name: 'Beans',
//             type: 'Dog',
//             age: 3
//         }
//     ]
//
// =======================================================================================================================
// ================================= WARM UP
//
// Create a function, returnLongestPetName, that takes in a array of pet objects and returns a string of the longest name for a pet.
//
//     const pets = [
//     {
//         name: 'Sparky',
//         type: 'Fish',
//         age: 4
//     },
//     {
//         name: 'Mr. Pig',
//         type: 'Cat',
//         age: 4
//     },
//     {
//         name: 'Bubba',
//         type: 'Dog',
//         age: 5
//     },
//     {
//         name: 'Beans',
//         type: 'Dog',
//         age: 3
//     },
//     {
//         name: 'Mr. Salmon',
//         type: 'Fish',
//         age: 1
//     }
// ];
//
// // for loop
// const returnLongestPetName = (animals) => {
//     let longestPetName = "";
//     for (let i = 0; i < animals.length; i++) {
//         if (animals[i].name.length > longestPetName.length) {
//             longestPetName = animals[i].name;
//         }
//     }
//     return longestPetName;
// };
//
// // forEach
// const returnLongestPetName = (animals) => {
//     let longestPetName = "";
//     animals.forEach((animal) => {
//         if (animal.name.length > longestPetName.length) {
//             longestPetName = animal.name;
//         }
//     });
//     return longestPetName;
// };
//
// console.log(returnLongestPetName(pets));
//
// Write a function, returnLastTwoChars that returns the last two characters of an input string. Assume a string input of at least two characters.
// returnLastTwoChars(‘cat’) // returns ‘at’
// returnLastTwoChars(‘hello’) // returns ‘lo’
// returnLastTwoChars(‘hi’) // returns ‘hi’
//
// function returnLastTwoChars(input){
//     return input.slice(-2);
// }
//
// // EXTRA CHALLENGE
// // Create a function, returnLastCharsReversed that takes in two arguments:
// //     1. a string of characters
// // 2. an integer that represents how many characters should be returned
// // The function should return a string of characters, equal to the number specified
// // by the second argument, in reverse order. If 0 is passed as a second argument,
// // return an empty string. Assume only valid inputs and that the second argument
// // will NOT exceed the length of the input string.
// //     Examples:
// // returnLastCharsReversed(‘cat’, 0) // returns ‘’
// // returnLastCharsReversed(‘cat’, 1) // returns ‘t’
// // returnLastCharsReversed(‘cat’, 2) // returns ‘ta’
// // returnLastCharsReversed(‘cat’, 3) // returns ‘tac’
// // returnLastCharsReversed(‘codeup’, 1) // returns ‘p’
// // returnLastCharsReversed(‘codeup’, 3) // returns ‘pue’
// // returnLastCharsReversed(‘codeup’, 4) // returns ‘pued’
//
// function returnLastCharsReversed(str,noOfChars){
//     return str.split('').reverse().slice(0,noOfChars).join('');
// }
// Write a function, iBeforeE that takes in a string and returns the string with any ‘ei’ characters replaced with ‘ie’.
//
// function iBeforeE(string){
//     let newString = string.replace(/ei/g, "ie");
//     return newString;
// }
//
// function iBeforeE (input){
//     return input.replace("ei", "ie")
// }
//
// Create a function, filterList, that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// filterList([1,2,‘a’,‘b’]) // returns [1,2]
// filterList([1,‘a’,‘b’,0,15]) // returns [1,0,15]
// filterList([1,2,‘1’,‘123’,123]) // returns [1,2,123]

// function filterList(list) {
//     return list.filter(function(input) {
//         return typeof input === 'number';
//     });
// }
//
// function filterList(input){
//     let array = [];
//     for(let i = 0; i < input.length; i++){
//         if(typeof input[i] !== 'string'){
//             // console.log(input[i]);
//             array.push(input[i]);
//         }
//     }
//     return array;
// }
// console.log(filterList([1, 2, "a", "b"]));
// console.log(filterList([1,2,"1","123",123]));

// Create a function, zipArrays, that takes two array inputs of the same length and returns an array with the elements of both arrays alternating in the order of first[0], second[0], first[1], second[1], etc. If both arrays are empty, return an empty array.

function zipArrays(input1, input2) {
    let result = [];
    for (let i = 0; i < first.length; i++) {
        result.push(input1[i]);
        result.push(input2[i]);
    }
    return result;
}