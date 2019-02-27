/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.

  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(obj) {
  (this.createdAt = obj.createdAt),
    (this.name = obj.name),
    (this.dimensions = obj.dimensions),
    (this.destroy = function() {
      return `${this.name} was removed from the game at ${this.createdAt}`;
    });
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(obj) {
  GameObject.call(this, obj);
  (this.healthPoints = obj.healthPoints),
    (this.takeDamage = function() {
      return `${this.name} took damage.`;
    });
}

//CharacterStats.prototype = Object.create(GameObject.prototype);

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid(obj) {
  CharacterStats.call(this, obj);
  (this.team = obj.team),
    (this.weapons = obj.weapons),
    (this.language = obj.language),
    (this.greet = function() {
      return `${this.name} offers a greeting in ${this.language}.`;
    });
}

//Humanoid.prototype = Object.create(CharacterStats.prototype);
/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

function Villain(obj) {
  Humanoid.call(this, obj);
  (this.destruction = function() {
    if (this.fighting() <= 0) {
      return this.destroy();
    } else {
      return `${this.name} is still alive`;
    }
  }),
    (this.getDamage = function() {
      return Math.floor(Math.random() * 25) - 1;
    }),
    (this.fighting = function() {
      let health = obj.healthPoints;

      health -= this.getDamage();

      if (health > 0) {
        console.log(`${this.name} has ${health} health left.`);
      } else {
        console.log(`${this.name} has no health left.`);
      }

      return health;
    }); //,
  // (this.healthSaved = function() {
  //   let health = obj.healthPoints;
  //
  //   return {
  //     decrement: function() {
  //       return --this.getDamage();
  //     }
  //   };
  // });
}

function Hero(obj) {
  Villain.call(this, obj);
}

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

const mrHero = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 15,
  name: "the villian",
  team: "Forest Kingdom",
  weapons: ["Bow", "small spoon"],
  language: "whaha"
});

const mrVillian = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 15,
  name: "the hero",
  team: "Forest Kingdom",
  weapons: ["Bow", "small spoon"],
  language: "English"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
console.log(`--------- FIGHING BELOW-----------`);
console.log(mrVillian.destruction()); //
console.log(mrHero.destruction());
// console.log(mrVillian.getDamage());
// console.log(mrVillian.fighting());

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!
