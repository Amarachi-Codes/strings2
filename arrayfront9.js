// Warmup-2 -- arrayFront9
// Given an array of ints, return true if one of the first 4 elements in the array is a 9. The array length may be less than 4.

// Examples

// arrayFront9([1,2,9,3,4]) → true
// arrayFront9([1,2,3,4,9]) → false
// arrayFront9([1,2,3,4,5]) → false

function arrayFront9(arr){
    if(arr[0] === 9 || arr[1] === 9 || arr[2] === 9 || arr[3] === 9){
    return true
    
    }return false
    
  }