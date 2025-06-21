import { apiKey } from './util.js';
//console.log(apiKey);

//aanother way of using import
// import name from './util.js';
// console.log(name);

//aanother way of using import
//import * as utils from './util.js';
//console.log(utils.api);

//aanother way of using import -as
// import { test as content, api } from './util.js';
// console.log(content);

//variables, values and operators

//let userMessage = 'Hello Khaffy';

//console.log(userMessage);
//console.log(userMessage);

//functions

function createGreeting(userName, message = 'Hii') {
  return message + ' ' + userName;
}

const greet = createGreeting('Shile');
console.log(greet);

//exercise

// function combine(a, b, c) {
//   return (a * b) / c;
// }

// const result = combine(3, 3, 4);
// const result2 = combine(4, 5, 2);
// console.log(result, result2);

//arrow functions

// const test = (user, log) => {
//   console.log(user, log);
// };

// test('me', '8pm');

//objects nd classes

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log('Hello');
  }
}

const user1 = new User('shile', 25);
console.log(user1);
user1.greet();

//arrays nd methods

const hobbies = ['swimming', 'hiking', 'cooking'];

hobbies.push('dancing');
console.log(hobbies);

const index = hobbies.findIndex((item) => {
  return item === 'cooking';
});

console.log(index);

const editedHobbies = hobbies.map((item) => item + '!');
console.log(editedHobbies);

//creating objects with map
const editedHobbiesObject = hobbies.map((item) => ({ text: item }));
console.log(editedHobbiesObject);
