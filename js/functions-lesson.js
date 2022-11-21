//let message = myFunction('Jason');
//console.log(message);
let person1 = "Billy",
    person2 = "Bob";
fight(person1, person2);

fight("Billy", "Bob");
let x = isEven(5654575676);
console.log(x);
let y = isEven(24356737);
console.log(y);
let iBreakThings = isEven(true);
isEven(true);

function myFunction(name){
   return "Thank you, " + name + ". You have ran my Function";
}

function fight(person1, person2){
    console.log(person1 + " punched " + person2 + "right in the kisser.");
}

function isEven(num){
    //GET THE PIECES TO THE PUZZLE
    // Put the pieces of the puzzle into variables
    let number = num;
    let answer = (number % 2 == 0);
    // finally return the answer
    return answer;
}