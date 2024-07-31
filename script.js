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