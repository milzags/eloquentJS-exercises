//write a function that takes two arguments and returns their minimum
const minFuncArrow = (a,b) => (Math.min(a,b));

function minFunc(a,b) {
    return Math.min(a,b);
};

// define a recursive function isEven
// that accepts a single parameter and returns a boolean
// if the number is even

function isEven(number) {
    if (number < 0) {
        return isEven(-1*number);
    }

    if (number === 0) {
        return true;
    } else if (number === 1) {
        return false;
    } else {
        return isEven(number -2);
    }
};

const isEvenArrowFunction = (number) => {
    if (number < 0) {
        return isEven(-1*number);
    }

    if (number === 0) {
        return true;
    } else if (number === 1) {
        return false;
    } else {
        return isEven(number -2);
    }
};

//count Beans problem; write a function that takes a string as an argument and
// returns the number of of uppercase 'B' chars there are in the string.

function countBs(string) {
    let count = 0;
    for (let char of string) {
        if (char.indexOf('B') !== -1) {
            count += 1;
        }
    }
    return count;
}

// pass a second parameter, the letter to be counted
// writing this as an arrow function

const countChar = (string, letter) => {
    let count = 0;
    for (let char of string) {
        if (char.indexOf(letter) !== -1) {
            count += 1;
        }
    }
    return count; 
};




