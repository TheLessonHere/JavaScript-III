/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding or Global Binding is where "this" refers to the global object or window which contains the entirety of Javascript.
* 2. Implicit Binding is where "this" refers to the object that its housing function or method is calling.
* 3. New Binding is where "this" refers to the specific instance of an object that is created and returned by a constructor function.
* 4. Explicit Binding is where "this" refers to the object that is explicitly defined when using the .call, .apply, or .bind methods.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// function sayName(name) {
//     console.log(this);
//     return name;
// }

// Principle 2

// code example for Implicit Binding

// const myObj = {
//     greeting: 'Hello',
//     sayHello: function(name) {
//         console.log(`${this.greeting} my name is ${name}`);
//         console.log(this);
//     }
// };

// Principle 3

// code example for New Binding

// function meetingPerson(person_name) {
//     this.greeting = 'Hello ';
//     this.person_name = person_name;
//     this.speak = function() {
//         console.log(this.greeting + this.person_name);
//         console.log(this);
//     };
// }

// const levi = new meetingPerson('Thomas');

// levi.speak();

// Principle 4

// code example for Explicit Binding

// function meetingPerson(person_name) {
//     this.greeting = 'Hello ';
//     this.person_name = person_name;
//     this.speak = function() {
//         console.log(this.greeting + this.person_name);
//         console.log(this);
//     };
// }

// const levi = new meetingPerson('Thomas');
// const thomas = new meetingPerson('Levi');

// levi.speak.call(thomas);
// thomas.speak.apply(levi);

// levi.speak();
// thomas.speak();