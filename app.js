// //LOGGING OUTPUT///
// alert('Hello World'); // not to use for debugging. Stops script and only strings///
// console.log('Hello World');
// console.error('This is an error');
// console.warn('This is a warning');


// //VARIABLES - var (is of global scope and creates a lot of bugs), let, const (cannot be changed)////
//let age = 30;

// //let can be re-assigned, const cannot///
// age = 31;


// //DATA TYPES - String, Number, Boolean, null, undefined///
//const name = 'Brad';
//const age = 37;
//const rating = 3.5;
//const isCool = true;
//const x = null; //gives the error of being an OBJECT when using typeof
//const y = undefined;
//let z; // undefined and is initialized

// //Check type//
//console.log(typeof z);

////////////////////
// //STRINGS /////////
///////////////////

// //String Concatenation//  
//console.log('My name is ' + name + ' and I am ' + age);
// //Template literal (is better)  use the back ticks 
//console.log(`My name is ${name} and I am ${age}`);

// //String methods & properties//

//const s = 'I'm the king of the World!';
//let val;

// //Get length//
//val = s.length;

// //Change case//
//val = s.toUpperCase();
//val = s.toLowerCase();

// //Get sub string//
//val = s.substring(0, 5);

// //Split into array//
//val = s.split('');


/////////////////////////////////////////////////////
// //ARRAYS - Store multiple values in a variable//////
/////////////////////////////////////////////////////
//const numbers = [1,2,3,4,5];
//const fruits = ['apples', 'oranges', 'pears', 'grapes'];
//console.log(numbers, fruit);

// Get one value - Arrays start at 0 - All programming language are 0-based ///
//console.log(fruits[1]);

// Add an additional value//
//fruits[4] = 'blueberries';

// Add value in an array by using push()////
//fruits.push('strawberries');

// Add to beginning of the array/////////////
//fruits.unshift('mangos');

// Remove last value, the last item in the array///////
//fruits.pop();

// // Check if a variable ia an array [varname].isArray()////////////
//console.log(Array.isArray(fruits));

// // Get index on items in arrays, get the number of position in the array using .indexOf()/////
//console.log(fruits.indexOf('oranges'));



// //OBJECT LITERALS///////
//const person = {
//   firstName: 'John',
//   age: 30,
//   hobbies: ['music', 'movies', 'sports'],
//   address: {
//     street: '50 Main st',
//     city: 'Boston',
//     state: 'MA'
//   }
// }

// //Get single value////
//console.log(person.name)

// //Get array value/////
//console.log(person.hobbies[1]);

// //Get embedded object////
//console.log(person.address.city);

// //Add property////
//person.email = 'jdoe@gmail.com';

// // //Array of objects/
// //FOR EXAMPLES UP TO LINE 213//////

// const toDos = [
//   {
//     id: 1,
//     text: 'Take out trash',
//     isComplete: false
//   },
//   {
//     id: 2,
//     text: 'Dinner with boyfriend',
//     isComplete: false
//   },
//   {
//     id: 3,
//     text: 'Meeting with mom on messenger',
//     isComplete: true
//   }
// ];

// // //Get specific object value///
// // console.log(toDos[1].text);

// // // Format as JSON
// // console.log(JSON.stringify(toDos));


// // // LOOPS

// // // For
// // for(let i = 0; i <= 10; i++){
// //   console.log(`For Loop Number: ${i}`);
// // }

// // // While
// // let i = 0
// // while(i <= 10) {
// //   console.log(`While Loop Number: ${i}`);
// //   i++;
// // }

// // //Loop Through Arrays///////
// // //For Loop////////
// // for(let i = 0; i < toDos.length; i++){
// //   console.log(` Todo ${i + 1}: ${toDos[i].text}`);
// // }

// // // For...of Loop - an easier way of listing through an array of objects//////
// // for(let todo of toDos) {
// //   console.log(todo.text);
// // }


// // //High order Array Methods take in a function/////Suggested way of iteration of arrays, forEach, map, filter based on a condition////
// // //.forEach()
// console.warn('----------------------------------------------------');
// console.log('.forEach() example1');

// toDos.forEach(function(list) {//name a new variable. in this case it's 'list'. 
//     console.log(list.text);//we're getting a text for each To-do in this case variable 'list'
// });

// console.log('.forEach() example2');
// toDos.forEach(function(todo) {
//     console.log(todo.id);
// });

// // //.map()//// assigns an array so we are goign to do a const - loops through and return an array of just the text values of the toDos Array of objects
// console.warn('----------------------------------------------------');
// console.log('.map() Example1');

// const todoText = toDos.map(function(list) { //I changed his todo variable with the word List becasue he was confusing with all the todo repeats
//   return list.text;
  
// });
// console.log(todoText);


// console.log('.map() Example2');

// const todoId = toDos.map(function(numb){
//     return numb.id;
// })
// console.log(todoId);


// // //.filter()//////pulls the complete array to matches the filtered value
// console.warn('----------------------------------------------------');
// console.log('.filter() Example1');

// const todoComplete = toDos.filter(function(list) {
//     return list.isComplete === true;
// });

// console.log(todoComplete);

// console.log('.filter() Example2 but with .map()');

// const todoIncomplete = toDos.filter(function(pending) {
//     return pending.isComplete === false;
// }).map(function(todo) { //added .map()
//     return todo.text;
// });
// console.log(todoIncomplete)

// console.warn('----------------------------------------------------');

// //Conditionals/////
// //else...if/////
// const x = 15;

// if(x === 10) {
// console. log('x is 10');
// } else if (x > 10) {
// console.log('x is greater than 10');
// }else {
// console. log('x is less than 10');
// }


// // Example 2 if...else///

// const x = 4;
// const y = 11;

// if(x > 5 || y >  10) {
// console. log('x is more than 5 or y is more than 10');
// } 

// //Ternary Operator shorthand for conditional "?" means 'then', ":" means 'else'

// const x = 11;

// const color = x > 10 ? 'red' : 'blue';

// console.log(color);
// /////////////////////////////////////////////////
// //SWITCH/////sounds better than a conditional 
// /////////////////////////////////////////////////
// color = 'red';

// switch(color) {
//   case 'red':
//     console.log('color is red');
//     break; //when this condition is met, the break causes it to stop evaluating
//   case 'blue':
//     console.log('color is blue');
//     break;
//   default:  
//     console.log('color is not red or blue')
//     break;
// }

// /////////////////////
// // FUNCTIONS/////////////
// //////////////////////

// function

// function addNums (num1 = 1, num2 = 2) { //values in the parenthesis are the defaults if nothing is called in the function below.
//     console.log(num1 + num2);
// }
// addNums(5, 6);


// //ARROW FUNCTION/////// very handy and clean things up

// const addNums = (num1, num2) => { //curly braces are not needed in this case becasue there is no expressin being made.
//     return num1 + num2;
// }
// console. log(addNums(5, 2));

// //another way/////////////////////////////////

// const addNums = (num1 =1, num2 = 10) => num1 + num2; //no need to put return

// console.log(addNums(5, 5));

// //if you don't more than one variable (num1)

// const addNums = num1 => num1 + 5;

// console.log(addNums(5));

// //Constructor Functions //// start with a capital letter

function Person(firstName, lastName, dob) {
   this.firstName = firstName;
   this.lastName = lastName;
   this.dob = new Date(dob);//turn the dob into an actual date object
   this.getBirthYear = function() {
    return this.dob.getFullYear();//Introduction of methods
   }
   this.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
   }
}

//Instantiate an object with the constructor fucntion

const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Dane', '2-14-2022')
console.log(person1);
console.log(person1.firstName);
console.log(person2);
console.log(person2.lastName);
console.log(person2.dob);
console.log(person2.dob.getFullYear()); //date object comes with other options for output VS code suggests them
console.log(person1.getBirthYear());
console.log(person1.getFullName());

// //Object oriented programming