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

    const pets = [
    {
        name: 'Sparky',
        type: 'Fish',
        age: 4
    },
    {
        name: 'Mr. Pig',
        type: 'Cat',
        age: 4
    },
    {
        name: 'Bubba',
        type: 'Dog',
        age: 5
    },
    {
        name: 'Beans',
        type: 'Dog',
        age: 3
    },
    {
        name: 'Mr. Salmon',
        type: 'Fish',
        age: 1
    }
];

// for loop
const returnLongestPetName = (animals) => {
    let longestPetName = "";
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].name.length > longestPetName.length) {
            longestPetName = animals[i].name;
        }
    }
    return longestPetName;
};

// forEach
const returnLongestPetName = (animals) => {
    let longestPetName = "";
    animals.forEach((animal) => {
        if (animal.name.length > longestPetName.length) {
            longestPetName = animal.name;
        }
    });
    return longestPetName;
};

console.log(returnLongestPetName(pets));












