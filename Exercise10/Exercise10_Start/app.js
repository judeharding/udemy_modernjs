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

//Object.create

var character = {
  speed: 6,
  strength: 8,
  hitpoints: 150,

  damage: function(){
    return this.speed * this.strength;
  }
};


var character1 = Object.create(character);
//
// character1();
character1.speed = 9;
character1.hitpoints = 205;

console.log(character1.damage());
