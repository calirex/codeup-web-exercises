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

for (let i = 0; i < 10; i) {
    console.log("The value of i is " + i);
    i++;
}

// desired output : 0, 1 ,2,  3, 4, 5, 6, 7, 8, 9