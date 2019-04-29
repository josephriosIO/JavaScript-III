/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. window binding
 * 2. implicit binding
 * 3.  Explicit binding
 * 4.  New Binding
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding

const lion = {
  name: "lion",
  speak: function() {
    console.log(this.name);
  }
};

lion.speak();
// Principle 3

// code example for New Binding
function Animals(obj) {
  (this.name = obj.name), (this.talk = obj.speak);
}

const tiger = new Animals({
  name: "leroy",
  speak: function() {
    console.log(this.name);
  }
});

tiger.talk();

// Principle 4

// code example for Explicit Binding
function Persons(person) {
  (this.name = person.name),
    (this.age = person.age),
    (this.saying = person.saying);
}

const name1 = {
  name: "Joseph",
  age: 21,
  saying: function() {
    console.log(`my name is ${this.name}`);
  }
};

const name2 = {
  name: "matt",
  age: 25,
  saying: function() {
    console.log(`my name is ${this.name} and im ${this.age}`);
  }
};

const joseph = new Persons(name1);
const matt = new Persons(name2);

joseph.saying();

joseph.saying.call(matt);
