// String-2 -- bobThere
// Return true if the given string contains a "bob" string, but where the middle 'o' char can be any char.

// Examples

// bobThere('abcbob') → true
// bobThere('b9b') → true
// bobThere('bac') → false


function bobThere(str){
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === 'b' && (str.charAt(i + 2) === 'b' || str.charAt(i + 1) === 'o')) {
        return true;
      }
    }
    return false;
  }console.log(bobThere('abcbob'));