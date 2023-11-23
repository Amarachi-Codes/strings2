// Given a string, return true if the first instance of "x" in the string is immediately followed by another "x".

// Examples

// doubleX('axxbb') → true
// doubleX('axaxax') → false
// doubleX('xxxxx') → true

function doubleX(str){
   let indexOfX = str.indexOf("x")
   if(indexOfX != -1 && str.charAt(indexOfX + 1) === "x"){
    return true
   }return false
  }console.log(doubleX('axaxax') );
