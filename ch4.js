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

//modify the range function to take an optional third argument that indicates the "step"
//value used when building the array. if no step is given, the element go up by
//increments of one. 

const rangeOfNumsWithSteps = (start, end, step = 1) => {
    let numsArray = [];
    if (step < 0) {
        for (let i = start; i >= end; i+=step) {
            numsArray.push(i);
        };

        return numsArray;
    } else {
        for (let i = start; i <= end; i+=step) {
            numsArray.push(i);
        };

    return numsArray;
    }
};

// added the logic check as the loop would be different depending on the value of the step
// The next thing to do would be to throw an error if start > end and the default step
// value was being used. Current calling the function with 5,1, default results in 
// an empty array

// write two functions reverseArray and reverseArrayInPlace -> reverse the array 
//without using the built in .reverse() method. 
// which is more useful and which runs faster? 

const reverseArray = (array) => {
    let reversedArray = [];
    for (i = array.length -1 ; i >= 0; i--) {
        reversedArray.push(array[i]);
    }

    return reversedArray;
}

const reverseArrayInPlace = (array) => {
    for (let i = 0; i <= Math.floor((array.length-1)/2); i++) {
        let element = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = element;
    }
    return array;
};

// reversing the array in place is more difficult as values can be over-written
// I would suggest that both functions run equally quickly in time but the 
// reverseArray function takes up more space in memory as a new array is created
// I will be able to re-analyze this after learning more about big O notation





