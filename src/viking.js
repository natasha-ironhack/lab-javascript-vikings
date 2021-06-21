// Soldier
/*
Modify the Soldier class and add 2 methods to it: attack(), 
and receiveDamage().

class:
should receive 2 arguments (health & strength)
should receive the health property as its 1st argument
should receive the strength property as its 2nd argument

attack() method:
should be a function
should receive 0 arguments
should return the strength property of the Soldier

receiveDamage() method:
should be a function
should receive 1 argument (the damage)
should remove the received damage from the health property
shouldn't return anything
*/

class Soldier {
constructor (health, strength) {
       this.health = health,
       this.strength = strength
   }
  attack() {
    return this.strength
  }
  receiveDamage(damage) {
      this.health = this.health - damage
  }
  }
  

  // Viking
  class Viking extends Soldier {
    constructor (name, health, strength) {
      super (health, strength)
      this.name = name
    }
    
    attack() {
      return this.strength
    }

    receiveDamage(damage) {
      this.health = this.health - damage;
      if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`
      }
      else if (this.health == 0) {
        return `${this.name} has died in act of combat`
      }
    }

    battleCry() {
        return `Odin Owns You All!`
      }
  }

  // Saxon
  class Saxon {}
  
  
  // War
  class War {}


  
  // The following is required to make unit tests work.
  /* Environment setup. Do not modify the below code. */
  if (typeof module !== 'undefined') {
    module.exports = { Soldier, Viking, Saxon, War };
  }
  
  