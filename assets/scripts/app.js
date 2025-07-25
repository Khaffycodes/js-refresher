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

const user1 = new User('shile', 15);
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

//exercise
//Your task is to add the missing logic to a transformToObjects() function that should transform a
//  list of numbers into a list of JavaScript objects.In the newly returned array,
// every object must have a val key and the input array's number as a value.

function transformToObjects(numbers) {
  return numbers.map((item) => ({ text: item }));
}

const result = transformToObjects([2, 3, 4]);
console.log(result);

//destructuring []

const [firstName, lastName] = ['Kafayat', 'Salau'];
console.log(firstName);
console.log(lastName);

//destructuring {}
const { name: username, age } = {
  name: 'Shile',
  age: 6,
};

console.log(username);
console.log(age);

//spread operator
const hobbies2 = ['swimming', 'hiking'];
const newHobbies = ['reading'];

const mergedHobbies = [...hobbies2, ...newHobbies];
console.log(mergedHobbies);

const user = {
  name: 'Shile',
  age: 6,
};

const extendedUser = {
  isAdmin: true,
  ...user,
};

console.log(extendedUser);

//control structure

const password = prompt('Your password');

if (password === 'Hello') {
  console.log('Hello works');
} else if (password === 'hello') {
  console.log('hello works');
} else {
  console.log('access not granted');
}

const hobbies3 = ['swimming', 'hiking'];
for (const hobby of hobbies3) {
  console.log(hobby);
}

//using functions as values

function handleTimeout() {
  console.log('time out');
}

function handleTimeout2() {
  console.log('time out....again');
}

setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 3000);
setTimeout(() => {
  console.log('time out using anon function');
}, 4000);

//function inside function

function init() {
  function greet() {
    console.log('Hiiiiiii');
  }
  greet();
}
init();
