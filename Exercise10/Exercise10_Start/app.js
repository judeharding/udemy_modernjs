/*For a possible game, set up the creation of an object that uses a prototype.
  Use Object.create(), a constructor function, or a class, to create a game
  character object. Set up the prototype to have the following properties:
-speed (default value: 6)
-stregnth (default value: 8)
-hitpoints (default value 150)
-a method that determines damage per second and returns it. That is equal
to speed * stregnth
Create one object providing values for speed and hitpoints. Let stregnth
use default value. Then display damage per second*/
//---------------------
//Object.create
//
// var character = {  //creates the object literal
//   speed: 6,        //defaults for properties
//   strength: 8,
//   hitpoints: 150,
//
//   damage: function(){     // the method function
//     return this.speed * this.strength;
//   }
// };
//
// // the above is the prototype for any objects below that we create
//
//
// var character1 = Object.create(character);    // creates an object with the character defaults
//
// character1.speed = 9;  // overriding the defaults in the prototype
// character1.hitpoints = 205;
//
// console.log(character1.damage());


//---------------------
//constructor function -- i missed this one

function Character(speed, strength, hitpoints){
  if (speed) {  //truthy if value provided = true if not, = false
    this.speed = speed;
  }
  if (strength) { //truthy if value provided = true if not, = false
    this.strength = strength;
  }
  if (hitpoints) { //truthy if value provided = true if not, = false
    this.hitpoints = hitpoints;
  }
}

Character.prototype.speed = 6;  // sets default values
Character.prototype.strength = 8;
Character.prototype.hitpoints = 150;

Character.prototype.damage = function(){
  return this.speed * this.strength;
};

var character1 = new Character (9, null, 205); // overwrites the defaults above and the null will indicate noting being passed in.

console.log(character1.damage());
