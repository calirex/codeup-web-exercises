"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// let color = "blue"
 //console.log(color)

 //analyzeColor(color);

 //function analyzeColor(color){
    // if (color === "blue") {
         //console.log("Blue is the color of the ocean.");
     //} else if  (color === "red") {
        // console.log("Clowns have red noses.");
     //} else {
         //console.log(`I don't know anything about ${color}.`);
     //}
 //}

// function analyzeColor(color){
//      let colorLower = color.toLowerCase();
//      if(colorLower === "blue"){
//          return "blue is the color of the sky";
//      } else if(colorLower === "red"){
//          return "Strawberries are Red";
//      } else if(colorLower === "orange"){
//          return "pumpkins are orange";
//      } else {
//          return "I don't know what the color is";
//      }
// }
// let result = analyzeColor("Red");
// console.log(result);

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
let result2 = analyzeColor(randomColor);
console.log(result2);

 //analyzeColor(randomColor);
 //console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzeColor(color){
    let colorLower = color.toLowerCase();
    switch(colorLower){
        case "blue":
            return "blue is the color of the sky";
            break;
        case "red":
            return "Strawberries are Red";
            break;
        case "orange":
            return "pumpkins are orange";
            break;
        default:
            break;
    }
}

 // var analyzeColor = randomColor;
 // console.log(randomColor);
 //
 // switch (analyzeColor) {
 //     case "blue":
 //         console.log("Blue is the color of the ocean.");
 //         break;
 //     case "red":
 //         console.log("Clowns have a red nose");
 //         break;
 //     case "yellow":
 //         console.log("Sunflowers are yellow.");
 //         break;
 //     case "green":
 //         console.log("Green is the color of my grass.")
 //         break;
 //     default:
 //         console.log("I dont know anything about that color.")
 }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
let userColor = prompt("What is your favorite color?");
let userColorResult = analyzeColor(userColor);
console.log(userColorResult);

 // var analyzeColor = prompt("what is your favorite color?");
 // switch (analyzeColor) {
 //     case "blue":
 //         alert("Blue is the color of the ocean.");
 //         break;
 //     case "red":
 //        alert("Clowns have a red nose");
 //         break;
 //     case "yellow":
 //         alert("Sunflowers are yellow.");
 //         break;
 //     case "green":
 //         alert("Green is the color of my grass.");
 //         break;
 //     default:
 //         alert("I dont know anything about that color.");
 //         break;
 // }

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNum, total){
    let discount,
        discountedPrice;
    switch (luckyNum) {
        case 0:
            discount = 0;
            break;
        case 1:
            discount = 0.1;
            break;
        case 2:
            discount = 0.25;
            break;
        case 3:
            discount = 0.35;
            break;
        case 4:
            discount = 0.5;
            break;
        case 5:
            discount = 1;
            break:
        default:
            return "Incorrect lucky Number Provided";
            break;
    }
    if ( !isNaN(Total) ){
        discountedPrice = (total * (1 - discounted));
    } else {
        return "the Total Provided is not a Number stupid!";
    }
    return discountedPrice;
}

 // let luckyNumber = Math.floor((Math.random() * 6) + 0);
 // console.log(`The random discount number is ${luckyNumber}`);
 // let userAmount = prompt(`What is the total amount of your bill?`);
 // console.log(`The user's bill is ${userAmount}`);
 // console.log(`Your new discounted total is ${calculateTotal(luckyNumber, userAmount)}.`);

 //function calculateTotal(luckyNumber, userAmount) {

 //    if (luckyNumber === 0) {
 //return `Sorry no discount`;
 //    } else if (luckyNumber === 1) {
 //        return "$" + (.9 * userAmount);
 //    } else if (luckyNumber === 2) {
 //        return "$" + (.75 * userAmount);
 //    } else if (luckyNumber === 3) {
 //        return "$" + (.65 * userAmount);
 //    } else if (luckyNumber === 4) {
 //        return "$" + (.5 * userAmount);
 //    } else {
 //        return `Congratulations, you get everything for FREE!!!`
 //    }
 //}
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
 var luckyNumber = Math.floor(Math.random() * 6);
 let userNumberPrompt = prompt("What was the total of your bill?");
 let userResult2 = calculateTotal(luckyNumber, userNumberPrompt);
 alert(`Your lucky number Was ${luckyNumber}.
 The price before the discount was $${userNumberPrompt}.
 The price after the discount is $${userResult2}`);

 // let luckyNumber = 1;
 // console.log(`The random discount number is ${luckyNumber}`);
 // let userAmount = prompt(`What is the total amount of your bill?`);
 // console.log(`The user's bill is ${userAmount}`);
 //
 // calculateTotal();
 //
 // function calculateTotal(luckyNumber, userAmount) {
 //
 //     if (luckyNumber === 0) {
 //         alert(`Your lucky number was 0, Sorry no discount`);
 //     } else if (luckyNumber === 1) {
 //         alert("Your lucky number was 1, your new discounted price is $" + (.9 * userAmount));
 //     } else if (luckyNumber === 2) {
 //         alert("Your lucky number was 2, your new discounted price is $" + (.75 * userAmount));
 //     } else if (luckyNumber === 3) {
 //         alert("Your lucky number was 3, your new discounted price is $" + (.65 * userAmount));
 //     } else if (luckyNumber === 4) {
 //         alert("Your lucky number was 4, your new discounted price is $" + (.5 * userAmount));
 //     } else {
 //         alert(`Your lucky number was 5, Congratulations, you get everything for FREE!!!`);
 //     }
 // }



/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

let userConfirm = confirm("Would you like to eneter a number?");
let userNumber;
if (userConfirm) {
    userNumber = prompt("Please enter a number");
    if ( !isNaN(userNumber)){

    if (isEven(userNumber) )
    alert('The number is even');
} else {
    alert('The number is odd');
}
    let plus100 = parseFloat(userNumber) + 100;
    alert ('The number plus 100 equals: ' + plus100);

    if(usernumber > 0 ) {
        alert('The number is positive');
    } else {
        alert('The number is negative');
    }
} else {
    alert('Incorrect data type provided.');
}
}

function isEven(num){
    return num % 2 === 0;
}
function add100(num) {
    return parseFloat(num) + 100;
}

function isPositive(num){
    return num > 0;
}



// let result = confirm("Would you like to enter a number?");
// if (result == true) {
//     let userNumber = prompt("What number would you like to enter?");
//     if (userNumber % 2 == 0) {
//         alert("Your number is even.");
//     } else {
//         alert("Your number is odd.");
//     }
//     alert("Your number plus 100 equals " + (parseFloat(userNumber) + 100));
//     if (userNumber > 0) {
//         alert("Your number is positive.");
//     } else {
//         alert("Your number is negative.");
//     }
// } else {
//     console.log("User didn't want to enter a number");
// }







