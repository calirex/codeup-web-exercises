console.log('Running while.js');



let numMultiplyBy =2;
let counter = 0;
while(counter < 16) {
    console.log(numMultiplyBy);
    numMultiplyBy = numMultiplyBy *= 2;
    counter++;
}

for (let i = 0, num = 2; i < 16; i++) {
    console.log(num);
    num *= 2;
}
// same as saying all of these below
// num +=2; // num = num +2;
// num -= 2;// num = num -2;
// num *= 2;// num = num *2;
// num /= 2;// num = num /2;

//5
for(let i = 100; i >=5; i -= 5){
    console.log(i);
}

let conesToSell = Math.floor(Math.random() * 50) + 50;
console.log(`this is the number of cones to sell: ${conesToSell}`);


//Do while
do {
    let conesToBuy = Math.floor(Math.random() * 5) + 1;
    if (conesToBuy <= conesToSell) {
        console.log(`${conesToBuy} cones sold...`);
            conesToSell -= conesToBuy; // which is just like writing conesToSell = conesToSell - conesToBuy;
    } else {
        console.log(`Cannot sell you ${conesToBuy} cones, I have only ${conesToSell} ....`);
        console.log(`${conesToSell} cones sold...`);
        conesToSell -= conesToBuy;
        console.log(`I sold them all!`)
        break;
    }
} while (conesToSell > 0)

