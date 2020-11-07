// use the reduce method in combination with the concat method to "flatten"
// an array of arrays into a single array that has all the elements of the 
//original arrays

const flattenFunction = (arrays) => {
    return arrays.reduce(function(flattened, nextArray) {
        return flattened.concat(nextArray)
    },[]);
};

//flattenFunction([[1,2,3],[4,5],[6]]) returns [1,2,3,4,5,6]; 

//