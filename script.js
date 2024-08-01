'use strict';

const Person = function(firstName, birthYear) {
    // Instance properties
    //  console.log(this);
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this (create a method in a constructor function)
    // this.calcAge = function() {
    //     console.log(2037 - this.birthYear);
    // }
}

const thomas = new Person('Thomas', 1994);
console.log(thomas)

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

const jacob = new Person('Jacob', 2017);
const jack = new Person('Jack', 1975);
console.log(jacob, jack);


console.log(thomas instanceof Person); // True or False

// Prototypes
console.log(Person.prototype)

Person.prototype.calcAge = function() {
        console.log(2037 - this.birthYear);
};

thomas.calcAge();
jacob.calcAge();

console.log(thomas.__proto__)
console.log(Person.prototype)
console.log(thomas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(thomas)) // confirms person.prototype is prototype of thomas, not prototype of Person
console.log(Person.prototype.isPrototypeOf(Person)) // This is false

// Prototype property is a "prototype of linked objects"

Person.prototype.species = 'Homo Sapien';
console.log(thomas.species, jacob.species)

console.log(thomas.hasOwnProperty('firstName')) // tests to see if this is directly on the object (its own property)
console.log(thomas.hasOwnProperty('species')) // this will be false because 
console.log(thomas.hasOwnProperty('calcAge'))

console.log(thomas.calcAge)
console.log(thomas)
console.log(thomas.__proto__);
console.log(thomas.__proto__.__proto__);
console.log(thomas.__proto__.__proto__.__proto__); // This is past the top of the scope chain, so it returns null

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

