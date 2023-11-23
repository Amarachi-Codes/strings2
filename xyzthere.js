// String-2 -- xyzThere
// Return true if the given string contains an appearance of "xyz" where the xyz is not directly preceeded by a period (.). So "xxyz" counts but "x.xyz" does not.

// Examples

// xyzThere('abcxyz') → true
// xyzThere('abc.xyz') → false
// xyzThere('xyz.abc') → true

function xyzThere(str){
    if(str.endsWith(".xyz")){
    return false
    }if(str.includes("xyz")){
    return true
    }return false
  }