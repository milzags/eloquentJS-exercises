// let protoRabbit = {
//     speak(line) {
//         console.log(`The ${this.type} rabbit says ${line}`);
//     }
// };

// let killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = 'killer';
// killerRabbit.speak('says');

// Javascript classes are constructor functions with a prototype property. 
// and had to be written this way until 2015. Now there is a much more elegant
// solution:

class Rabbit {
    constructor(type) {
        this.type = type
    };
    speak(line) {
        console.log(`The ${this.type} rabbit says ${line}`); 
    }
}

let killerRabbit = new Rabbit('killer');
let blackRabbit = new Rabbit('black');

// the class keyword starts a declaration which allows us to define
// a constructor and a set of methods all in one place. Any number
// of methods may be written inside the declaration's curly brackets
// The one named constructor is treated specially. It provides the
// constructor function which will be bound to the name Rabbit. 

function isPangram(string){
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    string = string.toLowerCase();
    for (let i = 0; i < string.length; i++) {
      if (letters.indexOf(string[i] !== -1)) {
        return true;
      }
      
    } 
    
    return false; 
    
   }