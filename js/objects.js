// (function() {
//     "use strict";
//
//     /**
//      * TODO:
//      * Create an object with firstName and lastName properties that are strings
//      * with your first and last name. Store this object in a variable named
//      * `person`.
//      *
//      * Example:
//      *  > console.log(person.firstName) // "Rick"
//      *  > console.log(person.lastName) // "Sanchez"
//      */
// an example `person` object
//}

let person = {}
    person.firstName ='Fernando',
    person.lastName = 'Rivera'
    console.log(person.firstName);
    console.log(person.lastName);
//     /**
//      * TODO:
//      * Add a sayHello method to the person object that returns a greeting using
//      * the firstName and lastName properties.
//      * console.log the returned message to check your work
//      *
//      * Example
//      * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
//      */

person.sayHello = function (){
    return "Hello from " + this.firstName + " " + this.lastName + "!";
}
console.log(person.sayHello())

//     /** TODO:
//      * HEB has an offer for the shoppers that buy products amounting to
//      * more than $200. If a shopper spends more than $200, they get a 12%
//      * discount. Write a JS program, using conditionals, that logs to the
//      * browser, how much Ryan, Cameron and George need to pay. We know that
//      * Cameron bought $180, Ryan $250 and George $320. Your program will have to
//      * display a line with the name of the person, the amount before the
//      * discount, the discount, if any, and the amount after the discount.
//      *
//      * Uncomment the lines below to create an array of objects where each object
//      * represents one shopper. Use a foreach loop to iterate through the array,
//      * and console.log the relevant messages for each person
//      */
//
    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

// shoppers.forEach(function (shopper){
//     let isDiscount = `Congrats you get $` + (shopper.amount * .12) + " off!";
//     let withDiscount = `You're new Total is $` + Number(shopper.amount - (shopper.amount * .12)).toFixed(2);
//     console.log(shopper.name);
//     console.log(`Your total is $${(shopper.amount).toFixed(2)}`);
//     if (shopper.amount > 200){
//         console.log(isDiscount);
//         console.log(withDiscount);
//     }
// })

    shoppers.forEach(function (shopper){
        if(shopper.amount > 200){
            console.log(`${shopper.name} spent $${shopper.amount}, they receive a 12% discount, their new total is $${(shopper.amount * .88).toFixed(2)}.`);
        } else {
            console.log(`${shopper.name} spent $${shopper.amount}, they didn't spend enough to get a discount`);
        }
    })

//     /** TODO:
//      * Create an array of objects that represent books and store it in a
//      * variable named `books`. Each object should have a title and an author
//      * property. The author property should be an object with properties
//      * `firstName` and `lastName`. Be creative and add at least 5 books to the
//      * array
//      *
//      * Example:
//      * > console.log(books[0].title) // "The Salmon of Doubt"
//      * > console.log(books[0].author.firstName) // "Douglas"
//      * > console.log(books[0].author.lastName) // "Adams"
//      */


        const books = [
            {
               title: 'Goosebumbs',
                author: {
                   firstName: "R.L.",
                    lastName: "Stine"
                }
            },
            {
                title: `Harry Potter`,
                author: {
                    firstName: `J.K`,
                    lastName: `Rowling`,
                }
            },
            {
                title: `ABC's`,
                author: {
                    firstName: `Lil`,
                    lastName: `Wayne`,
                }
            },
            {
                title: `Ninja Turtles`,
                author: {
                    firstName: `John`,
                    lastName: `Conner`,
                }
            },
            {
                title: `Reading Rainbow`,
                author: {
                    firstName: `Donald`,
                    lastName: `Trump`,
                }
            },
        ];

//     /**
//      * TODO:
//      * Loop through the books array and output the following information about
//      * each book:
//      * - the book number (use the index of the book in the array)
//      * - the book title
//      * - author's full name (first name + last name)
//      *
//      * Example Console Output:
//      *
//      *      Book # 1
//      *      Title: The Salmon of Doubt
//      *      Author: Douglas Adams
//      *      ---
//      *      Book # 2
//      *      Title: Walkaway
//      *      Author: Cory Doctorow
//      *      ---
//      *      Book # 3
//      *      Title: A Brief History of Time
//      *      Author: Stephen Hawking
//      *      ---
//      *      ...
//      */

let bookNum = 0;
books.forEach(function(book){
    console.log(`book # ${bookNum += 1}
    title: ${book.title}
    author: ${book.author.firstName} ${book.author.lastName}`)
});




















//     /**
//      * Bonus:
//      * - Create a function named `createBook` that accepts a title and author
//      *   name and returns a book object with the properties described
//      *   previously. Refactor your code that creates the books array to instead
//      *   use your function.
//      * - Create a function named `showBookInfo` that accepts a book object and
//      *   outputs the information described above. Refactor your loop to use your
//      *   `showBookInfo` function.
//      */
//
// })();



// Create a few beverage objects and assign values to each object for the following properties:
//     - brandName
//     - type
//     - volumeInLiters
//     - priceInCents
//     - expirationDate
//     - datesOfPreviousSips (use an array of strings)
// - isOpen
// Define your objects using both literal syntax to create all properties and values at once and also try defining empty objects and assign property values in separate statements using the dot notation.
//     white_check_mark
// +1
// raised_hands
// const drink1 = {
//     brandName: "Pepsi",
//     type: "Vanilla",
//     volumeInLiters: 0.01,
//     expirationDate: 29+"th",
//     dateOfPreviousSips: [1, 5, 7, 8, 10,'6th'],
//     isOpen: "yes"
// }
// console.log(drink1);
// console.log(drink1.isOpen);

// // - Mini Exercise 2
// //
// const users = [
//     {
//         givenName: 'Sam',
//         age: 21
//     },
//     {
//         givenName: 'Cathy',
//         age: 34
//     },
//     {
//         givenName: 'Karen',
//         age: 43
//     }
// ];
// //
// // 0. Log each given name
// // 1. Log the names of all users in a single console log separated by spaces. // output = "Sam Cathy Karen"
// // 2. Change the names of all users to "John Doe"
// // 3. Increase the current age of all users by 1
// //
// // Can you accomplish each step using iteration?
// console.log(users[0].givenName);
// console.log(users[1].givenName);
// console.log(users[2].givenName);
// console.log(`${users[0].givenName}`)
// console.log(`${users[1].givenName}`)
// console.log(`${users[2].givenName}`)
//
// users.forEach(function (user){
//     console.log(user.givenName = "john doe");
// });
//
// users.forEach(function (user){
//     console.log(user.age += 1);
// })












