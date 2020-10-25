// write a loop that outputs a triangle

function createTriangleLoop(n) {
    let number = '';
    for (let i = 1; i <= n; i++) {
        number += 1;
        console.log(number);
    }
}

//fizzBuzz - print all numbers between 1 to 100.
// for numbers divisible by 3, print "Fizz" and for 
// numbers divisible by 5, print "buzz". For numbers
// divisible by both 3 and 5, print "FizzBuzz"

// I've modified this function to allow for an input
// argument. The loop will perform this task from 1 to this
// input number. Testing with 100 as that's the assignment

function fizzBuzz(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 5 == 0 && i % 3 == 0) {
            console.log('FizzBuzz')
        } else if (i % 5 == 0) {
            console.log('Buzz')
        } else if (i % 3 ==0 ){
            console.log('Fizz')
        } else {
            console.log(i);
        }
    }
};

// chessboard pattern
// 8 x 8 grid, alternating blank space and '#' char

function chessBoard() {
    //create rows and columns
    let rowChars = '';
    for (let i = 1; i <= 8; i++){
        for (let j = 1; j <= 8; j++) {
          if ((i+j) % 2 == 0) {
              rowChars += " ";
          } else {
              rowChars += "#";
          }
        }
        rowChars += "\n";
    }  
    console.log(rowChars); 
}