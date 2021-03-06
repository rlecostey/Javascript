// Function Constructor

// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function() {
//         console.log(2017 - this.yearOfBirth);
// };

// Person.prototype.lastname = 'Smith';

// var john = new Person('John', 1990, 'teacher');
// var jane = new Person('Jane', 1969, 'Designer');
// var marc = new Person('Marc', 1949, 'retired');

// john.calculateAge();
// jane.calculateAge();
// marc.calculateAge();

// console.log(john.lastname);
// console.log(jane.lastname);
// console.log(marc.lastname);


// Object.create
// var


// Primitives vs objects

// Primitives
// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b);

// // Objects
// var obj1 = {
//     name: 'John',
//     age: 26
// }

// var obj2 = obj1;
// obj1.age = 30;

// console.log(obj1.age);
// console.log(obj2.age);

// // Functions
// var age = 27;
// var obj = {
//     name: 'Toto',
//     city: 'Nantes'
// };

// function change(a, b) {
//     a = 30;
//     b.city = "Paris"
// }

// change(age, obj);

// console.log(age);
// console.log(obj.city);


// First Class function

// 


// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ', can you please explain what UX design is?')
//         }
//     } else if (job === 'teacher') {
//         return function(name) {
//             console.log('What subject do you teach, ' + name + '?');
//         }
//     } else {
//         return function(name) {
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer')
// teacherQuestion('John');
// designerQuestion('John');
// designerQuestion('Jane');

// interviewQuestion('designer')('John'); 


// IIFE : Immediately Invoked Function Expression

// function game() {
//     var score = Math.random() * 10
//     console.log(score >= 5);
// }
// game();

// (function() {
//     var score = Math.random() * 10
//     console.log(score >= 5);
// })();


// Closures
// An inner function has always access to the variables and paramaters of
// its outer function, even after the outer function has returned.
// function retirement(retirementAge) {
//     var a = ' years left until retirement.';
//     return function(yearOfBirth) {
//         var age = 2017 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }
// }

// var retirementUS = retirement(66);
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);

// retirementUS(1990);
// retirementGermany(1990);
// retirementIceland(1990);

// Without Closures Ex
// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ', can you please explain what UX design is?')
//         }
//     } else if (job === 'teacher') {
//         return function(name) {
//             console.log('What subject do you teach, ' + name + '?');
//         }
//     } else {
//         return function(name) {
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }

// With Closures Ex
// function interviewQuestion(job) {
//     return function(name) {
//         if (job === 'designer') {
//             console.log(name + ', can you please explain what UX design is?')
//         } else if (job === 'teacher') {
//             console.log('What subject do you teach, ' + name + '?');
//         } else {
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }

// interviewQuestion('teacher')('John');


// Bind, call and apply methods

var john = {
    name: 'John',
    age: 28,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! Whats\'s up?  I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
}

var jane = {
    name: 'Jane',
    age: 35,
    job: 'designer'
}

john.presentation('formal', 'morning');
john.presentation('friendly', 'morning');

// When we use call function, the first argument is the this variable.
// In our example, we set the this variable to Jane Object
john.presentation.call(jane, 'friendly', 'afternoon')

// When we use call function, the first argument is the this variable.
// The bind function, return a function that can be saved in a new variable.
// We can choose to pass only the 'friendly' argument and use the new 
// johnFriendly variable to specify the last argument ('night').
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');

// New example
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrResult = [];
    for (var i = 0; i < arr.length; i++) {
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

function calculateAge(element) {
    return 2017 - element;
}

function isFullAge(limit, element) {
    return element >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);