// // Create a function, zipArrays, that takes two array inputs of the same length and returns an array with the elements of both arrays alternating in the order of first[0], second[0], first[1], second[1], etc. If both arrays are empty, return an empty array.
//
// // function zipArrays(input1, input2) {
// //     let result = [];
// //     for (let i = 0; i < first.length; i++) {
// //         result.push(input1[i]);
// //         result.push(input2[i]);
// //     }
// //     return result;
// // }
// // function zipArrays(first, second) {
// //     let output = [];
// //     if (first.length === 0){
// //         return [];
// //     }
// //     for (let i = 0; i < first.length; i+= 1) {
// //         output.push(first[i]);
// //         output.push(second[i]);
// //         result.push(input1[i]);
// //         result.push(input2[i]);
// //     }
// //     return output;
// // }
// // 01/23
// //
// //
// // ================================= WARM UP
// //
// // Write a function, getUserCredentials, that takes in a list of user objects and returns a list of user objects with only the username and password properties. Assume at least an array of one user object.
//
//
//     const users = [
//     {
//         firstName: 'Justin',
//         lastName: 'Reich',
//         dob: '1923-01-01',
//         username: 'jreich',
//         password: '$2y$10$UJlsa5vWq5DUKJjyO38gM.dCZfudWOFCrLWQosh0mhXKaZmRmvDse'
//     },
//     {
//         firstName: 'Sally',
//         lastName: 'Smith',
//         dob: '1935-03-11',
//         username: 'ssmith',
//         password: '$2y$10$VaLGU5.7uQLr.eg6kSI9seOcP4JY4XktWt28I9JgblAGIDpkDXbya'
//     },
//     {
//         firstName: 'Fred',
//         lastName: 'Smith',
//         dob: '1999-01-21',
//         username: 'fsmith',
//         password: '$2y$10$3USt6Dl8TNMkeh0KioPnfeVpynAotXvSIJ5xrzAHragPEAWMYEBNS'
//     },
// ]
//
// getUserCredentials(users) // returns...
//
// /*
//
// [
//   {
//     username: 'jreich',
//     password: '$2y$10$UJlsa5vWq5DUKJjyO38gM.dCZfudWOFCrLWQosh0mhXKaZmRmvDse'
//   },
//   {
//     username: 'ssmith',
//     password: '$2y$10$VaLGU5.7uQLr.eg6kSI9seOcP4JY4XktWt28I9JgblAGIDpkDXbya'
//   },
//   {
//     username: 'fsmith',
//     password: '$2y$10$3USt6Dl8TNMkeh0KioPnfeVpynAotXvSIJ5xrzAHragPEAWMYEBNS'
//   }
// ]
//
// */
//
// function getUserCredentials(users) {
//     const credentials = [];
//     for (let i = 0; i < users.length; i++) {
//         const user = users[i];
//         credentials.push({ username: user.username, password: user.password });
//     }
//     return credentials;
// }

// This loop should print the numbers from 0 through 9 in the console

// for (let i = 0; i < 10; i) {
//     console.log("The value of i is " + i);
//     i++;
// }
//
// // desired output : 0, 1 ,2,  3, 4, 5, 6, 7, 8, 9

// let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 65, 65]
// let konamiRev = konamiCode.reverse();
// function returnLast (array){
//     return array[array.length -1];
// }
// console.log(konamiCode);
// console.log(returnLast(konamiCode), "65");
//
// // write me a function that takes in two arrays of numbers and returns the fourth indexed number from the first array times the sixth indexed number of the second array
//
// function twoArrays (arr1, arr2){
//     console.log(arr1[3], arr2[5]);
//     return arr1[3] * arr2[5];
// }
//
// console.log(konamiCode, konamiRev);
// console.log(twoArrays(konamiCode, konamiRev), '1480');

// ================================= WARM UP

// Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable if the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.

// example data...

//

// Create a function, encodeStr, that takes in a string and returns the string of characters with the following substitutions:

// function removeA2 (input){
//     let lowered = input.toLowerCase();
//     lowered = lowered.replaceAll('a', '@');
//     lowered = lowered.replaceAll('i', '1');
//     lowered = lowered.replaceAll('s', '$');
//     return lowered;
// }
//
// function encodeStr(str) {
//     let encodedStr = '';
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (char === 'a') {
//             encodedStr += '1';
//         } else if (char === 'e') {
//             encodedStr += '2';
//         } else if (char === 'i') {
//             encodedStr += '3';
//         } else if (char === 'o') {
//             encodedStr += '4';
//         } else if (char === 'u') {
//             encodedStr += '5';
//         } else {
//             encodedStr += char;
//         }
//     }
//     return encodedStr;
// }
//
// /* ‘a’ or ‘A’ becomes ‘@’ */
// function encodeStr(str) {
//     let encodedStr = '';
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (char === 'a' || char === 'A') {
//             encodedStr += '@';
//         } else if (char === 'e') {
//             encodedStr += '2';
//         } else if (char === 'i') {
//             encodedStr += '3';
//         } else if (char === 'o') {
//             encodedStr += '4';
//         } else if (char === 'u') {
//             encodedStr += '5';
//         } else {
//             encodedStr += char;
//         }
//     }
//     return encodedStr;
// }
//
// // ‘a’ or ‘A’ becomes ‘@’
// // ‘i’ or ‘I’ becomes ‘1’
// // ‘s’ or ‘S’ becomes ‘$’
// //
// // encodeStr(‘apple’) // returns ‘@pple’
// // encodeStr(‘codeup’) // returns ‘codeup’
// // encodeStr(‘SASS’) // returns ‘$@$$’
// // encodeStr(‘bike’) // returns ‘b1ke’

// Make a function, reverseStrings, that takes in an array of objects and reverses the value of the 'str' properties.

function reverseStrings(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].str = array[i].str.split('').reverse().join('');

        return str;

    }
}

    const strs = [
    {
        id: 1,
        str: 'hello'
    },
    {
        id: 2,
        str: 'world'
    },
    {
        id: 3,
        str: 'codeup'
    },
    {
        id: 4,
        str: 'x'
    }
]

// reverseStrings(strs) // returns...
//
//     [
//     {
//         id: 1,
//         str: 'olleh'
//     },
//         {
//             id: 2,
//             str: 'dlrow'
//         },
//         {
//             id: 3,
//             str: 'puedoc'
//         },
//         {
//             id: 4,
//             str: 'x'
//         }
//     ]






