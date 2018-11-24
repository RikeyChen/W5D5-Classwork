Function.prototype.myBind = function(context, ...arg) {
  return () => {
    this.apply(context, ...arg);
  };
};

// class Lamp {
//   constructor() {
//     this.name = "a lamp";
//   }
// }
//
// const turnOn = function() {
//    console.log("Turning on " + this.name);
// };
//
// const lamp = new Lamp();
//
// turnOn(); // should not work the way we want it to
//
// const boundTurnOn = turnOn.bind(lamp);
// const myBoundTurnOn = turnOn.myBind(lamp);
//
// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"
// //

class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }
}

function chase(thing) {
  console.log(`${this.name} chases ${thing}!`);
}

const oscar = new Dog('Oscar');
const garfield = new Cat('Garfield');
let arg1 = 'UPS Truck';
let arg2 = ' and ice cream truck';
let arg3 = ['ferrari', 'lambo'];
const dg = chase.myBind(oscar, arg3);
const ct = chase.myBind(garfield, arg3);
ct();
dg();
