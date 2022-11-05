// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  // declare alphabet as var
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  function caesar(input, shift, encode = true) {
    // for no shift argument if shift is more than 25 or less than -25 return false
    if (!shift || shift > 25 || shift < -25) return false;
    // declare a variable to lower case any input message
    let lowerCaseInput = input.toLowerCase();
    //declar a var with an empty string for the final message
    let finalMessage = "";
    //declare a var for checking wether encode is true then shift positive if false shift neg
    const shiftCode = encode ? shift : -(shift)
    //loop through the var
    for (let i = 0; i < lowerCaseInput.length; i++) {
      //var current established alphabet at index of the lowercase input[i]
      let current = alpha.indexOf(lowerCaseInput[i]);
      //declare an empty variable for storage
      let newLetter
      //if statement
      if (current === -1) {
        //empty variable = input[i]
        newLetter = input[i];
        //else statement
      } else {
        //create a new variable that is current + shiftcode 
        let newPos = current + shiftCode;
        //if var above is greater then 25
        if (newPos > 25) {
          //var -= 26 (to loop back around)
          newPos -= 26;
          //else if var is less then 0
        } else if (newPos < 0) {
          //var += 26 (also to loop back around)
          newPos += 26;
        }
        //empty variable = my alphabet[variable above](finish the looping)
        newLetter = alpha[newPos]
      }
      //final message += empty variable(that now has information from above)
      finalMessage += newLetter
    }
    //return result
    return finalMessage
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
