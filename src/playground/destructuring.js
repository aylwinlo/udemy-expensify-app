//
// Object destructuring
//

// const person = {
//   name: 'Aylwin',
//   age: 37,
//   location: {
//     city: 'Toronto',
//     temp: -16
//   }
// };

// const { name: firstName = 'Anonymous' , age } = person;
// // same as 
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`)
// }

//
// Array destructuring
//

const address = ['1224 Albert St', 'Regina', 'SK', 'S4R3L7'];

const [ , city, province = 'BC'] = address;

console.log(`You are in ${city} ${province}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ name, , price ] = item;

console.log(`A medium ${name} costs ${price}.`);