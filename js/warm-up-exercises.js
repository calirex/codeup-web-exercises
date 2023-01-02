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

// =======================================================================================================================
// ================================= WARM UP
//
// Create a function, returnLongestPetName, that takes in a array of pet objects and returns a string of the longest name for a pet.

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

// Write a function, returnLastTwoChars that returns the last two characters of an input string. Assume a string input of at least two characters.
// returnLastTwoChars(‘cat’) // returns ‘at’
// returnLastTwoChars(‘hello’) // returns ‘lo’
// returnLastTwoChars(‘hi’) // returns ‘hi’

function returnLastTwoChars(input){
    return input.slice(-2);
}

// EXTRA CHALLENGE
// Create a function, returnLastCharsReversed that takes in two arguments:
//     1. a string of characters
// 2. an integer that represents how many characters should be returned
// The function should return a string of characters, equal to the number specified
// by the second argument, in reverse order. If 0 is passed as a second argument,
// return an empty string. Assume only valid inputs and that the second argument
// will NOT exceed the length of the input string.
//     Examples:
// returnLastCharsReversed(‘cat’, 0) // returns ‘’
// returnLastCharsReversed(‘cat’, 1) // returns ‘t’
// returnLastCharsReversed(‘cat’, 2) // returns ‘ta’
// returnLastCharsReversed(‘cat’, 3) // returns ‘tac’
// returnLastCharsReversed(‘codeup’, 1) // returns ‘p’
// returnLastCharsReversed(‘codeup’, 3) // returns ‘pue’
// returnLastCharsReversed(‘codeup’, 4) // returns ‘pued’

function returnLastCharsReversed(str,noOfChars){
    return str.split('').reverse().slice(0,noOfChars).join('');
}








