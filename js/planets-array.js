// (function(){
//     "use strict";
//
//     var planets = [
//         'Mercury',
//         'Venus',
//         'Earth',
//         'Mars',
//         'Jupiter',
//         'Saturn',
//         'Uranus',
//         'Neptune'
//     ];
//
//     /**
//      * TODO:
//      * Read each console log below, and write some javascript code to perform
//      * the step that it describes
//      */
//
//     console.log('Adding "The Sun" to the beginning of the planets array.');
//     console.log(planets);
//
//     console.log('Adding "Pluto" to the end of the planets array.');
//     console.log(planets);
//
//     console.log('Removing "The Sun" from the beginning of the planets array.');
//     console.log(planets);
//
//     console.log('Removing "Pluto" from the end of the planets array.');
//     console.log(planets);
//
//     console.log('Finding and logging the index of "Earth" in the planets array.');
//
//     console.log("Reversing the order of the planets array.");
//     console.log(planets);
//
//     console.log("Sorting the planets array.");
//     console.log(planets);
// })();

// // ============================= !! MINI-EXERCISE 1 !!
//
// /*
//     1. Create an array the string elements 'April', 'May', 'June'
//     2. Add 'July' in the correct place of the array
//     3. Add 'March' in the correct place of the array
//     4. July is too hot; remove it from the array.
//     Console log the result and verify you get ['March', 'April', 'May', 'June']
//  */
//
// // const months = [April', 'May', 'June',];
// //     months.push(`July`);
// // console.log(months);
// // months.unshift(`March`);
// // console.log(months);
// // months.pop;
// //
// //
// // console.log(pies.slice(0, 2));
//
//
// // function threeMostRecentPies(pies) {
// //     return pies.slice(pies.lenght - 3);
// // }
// //
// // console.log(threeMostRecentPies(pies));
// // const = pies = [`apple`, ]
// // pies.sort();
// // console.log(pies);
//
// ============================= !! MINI-EXERCISE 2 !!

/*
    1. Put the first names of everyone in your row in the order they are sitting (just your half of the classroom)
    2. Log the alphabetical order of everyone in your row
    3. Log the reverse alphabetical order of everyone in your row
    4. Log everyone in the row in reverse order
    5. Log an array of just the first two students in the row (left to right)
    6. Log everyone in the row in a single string separated by spaces
    7. Log everyone in the row in a single string separated by underscores
 */

// 1.

// const names = ['Action', 'Fernando', 'Jona', 'mike'];

// 2.

// names.forEach(function(name) {
// });

// 3.

// const reverseAlphaNames = names.slice().sort().reverse();

// 4.

// reverseAlphaNames.forEach(function(name) {
// console.log(name);
// });


// 5.

// const firstTwoNames = names.slice(0, 2);
//
// firstTwoNames.forEach(function(name) {
// console.log(name);
// });

// 6.

// console.log(names.join(' '));

// 7.

// console.log(names.join('_'));

(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log(planets);

    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.unshift('The Sun');
    console.log(planets);


    console.log('Adding "Pluto" to the end of the planets array.');
    planets.push('Pluto');
    console.log(planets);


    console.log('Removing "The Sun" from the beginning of the planets array.');
    planets.shift();
    console.log(planets);


    console.log('Removing "Pluto" from the end of the planets array.');
    planets.pop();
    console.log(planets);

    console.log('Finding and logging the index of "Earth" in the planets array.');
    var index = planets.indexOf('Earth');
    console.log(index);

    console.log("Reversing the order of the planets array.");
    console.log(planets);
    planets.sort().reverse();
    console.log(planets);

    console.log("Sorting the planets array.");
    console.log(planets);
    planets.sort();
    console.log(planets);

})();