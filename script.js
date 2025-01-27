'use strict';

/*

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

// Static Method
Person.hey = function () {
    console.log('Hey there 👋')
    console.log(this)
}

Person.hey();
// jonas.hey(); // This doesn't work because it can't inherit this from the Person object


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

// console.log(thomas.hasOwnProperty('firstName')) // tests to see if this is directly on the object (its own property)
// console.log(thomas.hasOwnProperty('species')) // this will be false because 
// console.log(thomas.hasOwnProperty('calcAge'))

// console.log(thomas.calcAge)
// console.log(thomas)
// console.log(thomas.__proto__);
// console.log(thomas.__proto__.__proto__);
// console.log(thomas.__proto__.__proto__.__proto__); // This is past the top of the scope chain, so it returns null

// console.log(Person.prototype.constructor);
// console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3] // (it is the same as) new Array === []
console.log(arr)
// console.log(arr.__proto__)
// console.log(arr.__proto__ === Array.prototype)

// console.log(arr.__proto__.__proto__)

Array.prototype.unique = function() {
   return [...new Set(this)];
}

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x=>x + 1)

///////////////////////       CHALLENGE #1

// const Car = function(make, speed) {
//     this.make = make;
//     this.speed = speed;
// }

// My solution
// Car.prototype.accelerate = function() {
//     return console.log(`${this.make} going at ${this.speed + 10} km/h`)
// }
// Car.prototype.brake = function() {
//     return console.log(`${this.make} going at ${this.speed - 5} km/h`)
// }

// Actual solution
// Car.prototype.accelerate = function() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`)
// }
// Car.prototype.brake = function() {
//     this.speed -=5;
//     console.log(`${this.make} is going at ${this.speed} km/h`)
// }



// Solution with classes

class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`)
    }

    brake() {
        this.speed -=5;
    console.log(`${this.make} is going at ${this.speed} km/h`)
    }
}

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

// console.log(car1, car2)

// car1.accelerate()
// car1.accelerate()
// car2.brake()

console.log(bmw, mercedes)

bmw.accelerate()
bmw.accelerate()
mercedes.brake()


// class expression
// const PersonCl = class{}

// class declaration

class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    // Instance Methods
    // Methods will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.firstName}`);
    }

    get age() {
        return 2037 - this.birthYear
    }

    // Set a property that already exists
    set fullName(name) {
        console.log(name);
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`)
    }

    get fullName() {
        return this._fullName;
    }

    // Static method
    static hey() {
        console.log('Hey there 👋')
        console.log(this)
    }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age)

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function() {
//     console.log(`Hey ${this.firstName}`);
// }
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965);

PersonCl.hey();

/////////////////////////////////
// Setters and Getters

// const account = {
//     owner: 'jonas',
//     movements: [200, 530, 120, 300],

//     get latest () {
//         return this.movements.slice(-1).pop();
//     },

//     set latest(mov) {
//         this.movements.push(mov);
//     }
// }

// console.log(account.latest) // write it as if it's a property

// account.latest = 50
// console.log(account.movements)


const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear)
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this. birthYear = birthYear;
    }
};

const steven = Object.create(PersonProto);
console.log(steven)
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();


class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`)
    }

    brake() {
        this.speed -=5;
    console.log(`${this.make} is going at ${this.speed} km/h`)
    }

    get speedUS() {
        return this.speed / 1.6
    }
    set speedUS(speed) {
        this.speed = speed * 1.6
    }
}


const ford = new CarCl('Ford', 120)
console.log(ford.speedUS)
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);


const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};
   
    Person.prototype.calcAge = function() {
        console.log(2037 - this.birthYear);
};

const Student = function(firstName, birthYear, course) {
    // this.firstName = firstName;
    // this.birthYear = birthYear;
    Person.call(this, firstName, birthYear); // allows us to establish the "this" keyword
    this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype)


Student.prototype.introduce = function() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 2020, 'Computer Science')
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object); // This is the prototype chain


Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);



const CarCh = function(make, speed) {
    this.make = make;
    this.speed = speed;
}

CarCh.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`)
}

CarCh.prototype.brake = function() {
    this.speed -=5;
    console.log(`${this.make} is going at ${this.speed} km/h`)
}

const EV = function(make, speed, charge) {
    CarCh.call(this, make, speed)
    this.charge = charge;
}

EV.prototype = Object.create(CarCh.prototype)

EV.prototype.chargeBattery = function(chargeTo) {
    return this.charge = chargeTo
}

EV.prototype.accelerate = function() {
        this.speed += 20;
        // this.charge -= 1;
        this.charge--;

        console.log(`${this.make} is going ${this.speed} km/h, with a charge of ${this.charge}%`)
    }

const tesla = new EV('Tesla', 120, 23)
const toyota = new CarCh('Toyota', 150)
tesla.accelerate();
tesla.brake();
tesla.brake();
tesla.accelerate();
tesla.chargeBattery(90);
tesla.accelerate();

toyota.accelerate();
toyota.brake();
toyota.brake();
toyota.accelerate();
toyota.accelerate();



class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    // Instance Methods
    // Methods will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.firstName}`);
    }

    get age() {
        return 2037 - this.birthYear
    }

    // Set a property that already exists
    set fullName(name) {
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`)
    }

    get fullName() {
        return this._fullName;
    }

    // Static method
    static hey() {
        console.log('Hey there 👋')
        console.log(this)
    }
}
class StudentCl extends PersonCl {
constructor(fullName, birthYear, course) {
    super(fullName, birthYear); // always needs to happen first!
        this.course = course;
    }
        introduce() {
            {console.log(`My name is ${this.fullName} and I study ${this.course}`);}
       
    }
        calcAge() {
            console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10}`)
        }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();



////////////////////////////
// Inheritance Between "Classes": Object.create

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear)
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this. birthYear = birthYear;
    }
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}

StudentProto.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.calcAge();


// 1) Public fields
// 2) Private fields (fields must be outside of the constructor)
// 3) Public methods
// 4) Private methods
// (there is also the static version of these)

class Account {
    // 1) Public fields (only on instances, not prototypes)
    locale = navigator.language;
    #pin;
    // 2) Private fields (only on instances, not prototypes)
    #movements = [];

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        // Protected property
        this.#pin = pin;
        // this._movements = [];
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    // 3) Public methods

    // Public interface
    getMovements() {
        return this.#movements;
    }
    deposit(val) {
        this.#movements.push(val)
        return this;
    }

    withdraw(val) {
        this.deposit(-val)
        return this;
    }

    requestLoan(val) {
        // if(this.#approveLoan(val)) {
        if(this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Your loan of ${val} was approved`);
            return this;
        }
    }

    static helper() {
        console.log('Helper');
    }

    // 4) Private methods
    // #approveLoan(val) { // this doesn't work yet, but it should some day soon
    _approveLoan(val) {
        return true;
    }
}

const acc1 = new Account('Jonas', 'EUR', 1111, []);

// acc1._movements.push(250);
// acc1._movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
console.log(acc1._pin);
Account.helper();

// console.log(acc1.#movements); // This won't work because it's private
// console.log(acc1.#pin);
// acc1.#approveLoan(1000); // Chrome still sees this as a field, not a method

// Chaining methods
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000)
console.log(acc1.getMovements());

*/

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`)
    return this;
    }

    brake() {
        this.speed -=5;
    console.log(`${this.make} is going at ${this.speed} km/h`)
    return this;
    }

    get speedUS() {
        return this.speed / 1.6
    }
    set speedUS(speed) {
        this.speed = speed * 1.6
    }
}

class EvCl extends CarCl {
    #charge;
    constructor(make, speed, charge) {
        super(make, speed);

        this.#charge = charge;
    }

    chargeBattery = function(chargeTo) {
        this.#charge = chargeTo
        return this;
    }

    accelerate = function() {
        this.speed += 20;
        // this.charge -= 1;
        this.charge--;

        console.log(`${this.make} is going ${this.speed} km/h, with a charge of ${this.charge}%`)
        return this;
    }

}

const rivian = new EvCl('Rivian', 120, 23)
console.log(rivian);
// console.log(rivian.#charge);


rivian
    .accelerate()
    .accelerate()
    .accelerate()
    .brake()
    .chargeBattery(50)
    .accelerate()

console.log(rivian)
console.log(rivian.speedUS)