// use the reduce method in combination with the concat method to "flatten"
// an array of arrays into a single array that has all the elements of the 
//original arrays

const flattenFunction = (arrays) => {
    return arrays.reduce(function(flattened, nextArray) {
        return flattened.concat(nextArray)
    },[]);
};

//flattenFunction([[1,2,3],[4,5],[6]]) returns [1,2,3,4,5,6]; 

// Your own Loop

//write a higher order function that provides something like a for loop
//it takes a value, a test function, an update function and a body function
// Each iteration, it first runs the test function on the current loop value and 
//stop if that returns false. Then it calls the body function, giving it the current value. 
//Finally it calls the update function to create a new value and starts from the beginning

function somethingLikeAFoorLoop(value, testFunction, updateFunction, bodyFunction) {
    if (testFunction(value) === false) return;

    bodyFunction(value); 
    updateFunction(
        somethingLikeAFoorLoop(updateFunction(value), testFunction, updateFunction, bodyFunction));
    };

// everything
//every method returns true when the given function returns true for every element
// in the array. Implement every as a fuynction that takes an array and a predicate function 
// as parameters. Write two versions, one using a loop and one using the some method.

function every(array, testFunction) {
    for (let i = 0; i < array.length; i++) {
        if (!testFunction(array[i])) {
            return false;
        }
    }
    return true;
};

const some = (array) => {
    return array.some((input) => {
        return true;
    })
};

