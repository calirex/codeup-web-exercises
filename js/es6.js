/*
 * Complete the TODO items below
 */

const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
let name = 'fernando_rivera';
let email = 'fernando.rivera0011@gmail.com';
let languages = [`html`, `js`, `css`, `Bootstrap`, `jquery`];

// TODO: rewrite the object literal using object property shorthand

let user = {
    name,
    email,
    languages,
}
users.push(user);
console.log(users);


// users.push({
//     name: name,
//     email: email,
//     languages: languages
// });

console.log(users);

// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
users.forEach(function(user) {
    return emails.push(user.email);
});

users.forEach( user => emails.push(user.email) );

users.forEach(function(user) {
    return names.push(user.name);

});

// TODO: replace `var` with `let` in the following declaration
var developers = [];
users.forEach(function(user) {
    // TODO: rewrite the code below to use object destructuring assignment
    //       note that you can also use destructuring assignment in the function
    //       parameter definition
    const name = user.name;
    const email = user.email;
    const languages = user.languages;

    // TODO: rewrite the assignment below to use template strings
    developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
});

// TODO: Use `let` for the following variable
var list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
developers.forEach(function (developer) {

    // TODO: rewrite the assignment below to use template strings
    list += '<li>' + developer + '</li>';
});
list += '</ul>';





//
// users.push({
//     name,
//     email,
//     languages
// });
//
// console.log(users);
//
// let emails = [];
// let names = [];
//
// users.forEach( user => emails.push(user.email) );
//
// users.forEach( (user) => names.push(user.name));
//
// // doing everything at once
// // users.forEach( user => {
// //   names.push(user.name);
// //   emails.push(user.email);
// // });
//
// console.log(emails);
// console.log(names);
//
// let developers = [];
//
// users.forEach( (user) => {
//     const {name, email, languages} = user;
//     developers.push(`${name}\'s email is ${email} ${name} knows ${languages.join(', ')}.`);
// });
//
// console.log('devs', developers);
//
// let list = '<ul>';
// for(let developer of developers){
//     list += `<li>${developer}</li>`;
// }
// list += '</ul>';
// document.write(list);
