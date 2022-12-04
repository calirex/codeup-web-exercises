console.log('Running break_and_continue.js');


// while(true) {
//     let userNum = prompt("Enter an odd number between 1 and 50");
//     userNum = parseFloat(userNum);
//     console.log(`The number to skip is ${userNum}`);
//     if (userNum % 2 === 1 && userNum <= 50 && userNum >= 1) {
//         for (let i = 1; i <= 50; i += 2)
//             if (i === userNum) {
//                 console.log(`Yikes! Skipping number ${i}`)
//             } else {
//                 console.log(`Here is an odd number: ${i}`);
//                 {
//
//                 }
//                 break;
//             }
//     }
// }

while(true){
    let userNum = prompt("Enter an odd number between 1 and 50:");
    userNum = parseFloat(userNum);
    console.log(`Number to skip is: ${userNum}`)
    if (userNum % 2 === 1 && userNum <= 50 && userNum >= 1) {
        for (let i = 1; i <= 50; i+=2){
            if(i === userNum){
                console.log(`Yikes! Skipping number ${i}`)
            }else{
                console.log(`Here is an odd number: ${i}`);
            }
        }
        break;
    }
}
