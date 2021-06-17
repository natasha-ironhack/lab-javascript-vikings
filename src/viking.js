// Soldier
/*
Modify the Soldier class and add 2 methods to it: attack(), and receiveDamage().

class
should receive 2 arguments (health & strength)
should receive the health property as its 1st argument
should receive the strength property as its 2nd argument

attack() method
should be a function
should receive 0 arguments
should return the strength property of the Soldier

receiveDamage() method
should be a function
should receive 1 argument (the damage)
should remove the received damage from the health property
shouldn't return anything
*/

class Soldier {
constructor (health, strength) {
     this.health = health
     this.strength = strength
 }
attack () {
  return `My strength is ${this.strength}, which I implement with my spear.`
}
receiveDamage(damage) {

}
}

let achilles = new Soldier ("excellent", "good aim")
console.log (achilles)
console.log(achilles.attack())





// Viking

/*
A Viking is a Soldier with an additional property, their name. They also have 
a different receiveDamage() method and new method, battleCry().

Modify the Viking class, have it inherit from Soldier, re-implement the 
receiveDamage() method for Viking, and add a new battleCry() method.

inheritance
Viking should extend Soldier

class
should receive 3 arguments (name, health & strength)
should receive the name property as its 1st argument
should receive the health property as its 2nd argument
should receive the strength property as its 3rd argument

attack() method
(This method should be inherited from Soldier, no need to re-implement it.)

should be a function
should receive 0 arguments
should return the strength property of the Viking

receiveDamage() method
(This method needs to be re-implemented for Viking because the Viking version 
  needs to have different return values.)

should be a function
should receive 1 argument (the damage)
should remove the received damage from the health property
if the Viking is still alive, it should return "NAME has received DAMAGE points 
of damage"
if the Viking dies, it should return "NAME has died in act of combat"

battleCry() method
(Learn more about battle cries.) (link)

should be a function
should receive 0 arguments
should return "Odin Owns You All!"

*/
class Viking extends Soldier {
  constructor (name, health, strength) {
    super (name, health, property)
  }
  attack() {

  }
  receiveDamage(damage) {
    if (Viking.length === 6) {
      return `${this.name} has received DAMAGE points of damage`
    } 
      return `${this.name} has died in the act of combat`
    }
  }
  battleCry() {
      return `Odin Owns You All!`
  }
}
console.log()






// Saxon

/*
A Saxon is a weaker kind of Soldier. Unlike a Viking, a Saxon has no name. 
Their receiveDamage() method will also be different than the original Soldier 
version.

Modify the Saxon, constructor function, have it inherit from Soldier and 
re-implement the receiveDamage() method for Saxon.

inheritance
Saxon should extend Soldier

class
You don't have to include constructor method since this class will inherit 
perfectly from the parents class, both, the health and the strength 
(it extends Soldier class 😉 )

attack() method
(This method should be inherited from Soldier, no need to re-implement it.)

should be a function
should receive 0 arguments
should return the strength property of the Saxon

receiveDamage() method
(This method needs to be re-implemented for Saxon because the Saxon version 
  needs to have different return values.)

should be a function
should receive 1 argument (the damage)
should remove the received damage from the health property
if the Saxon is still alive, it should return "A Saxon has received DAMAGE
 points of damage"
if the Saxon dies, it should return "A Saxon has died in combat"
*/

class Saxon {}






// BONUT: War

class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
