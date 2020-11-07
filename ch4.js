//sum of a range
// wrate a range function that takes two arguments, start and end
// and returns an array containing all the numbers from start up to
// and including end

const rangeOfNums = (start, end) => {
    let numsArray = [];
    for (let i = start; i <= end; i++) {
        numsArray.push(i);
    }
    return numsArray;
}

// write a sum function that takes an array of numbers and returns the 
// sum of these numbers

const sum = (arr) => {
    return arr.reduce(function(acc, next) {
        return acc + next;
    },0);
};

// OR

function regularSum(array) {
    let sum = 0;
    for (let number of array) {
        sum  += number;
    }
    return sum;
}

//both of these work but reduce is a lot cleaner, though can be a bit more cumbersome
// to write. it's a lot easier to make a mistake using reduce