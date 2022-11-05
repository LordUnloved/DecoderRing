// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  //establish a variable for the alphabet
  const alpha = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    // create an if for guard clause if no alphabet or the alphabet length is not exactly 26 return false
    if (!alphabet || alphabet.length !== 26) return false;
    //create final message variable
    let finalMessage = "";
    //iterate through the alphabet 
    for (let i = 0; i < alphabet.length; i++) {
      //if the alphabet undexof alphabet is not deeply equal to the alphabets last index of alphabet
      if (alphabet.indexOf(alphabet[i]) !== alphabet.lastIndexOf(alphabet[i])) {
        //return false
        return false;
      }
    }
    //create a variable for input to be lowercase
    lowerInput = input.toLowerCase();
    //start encode section
    //if encode is true
    if (encode) {
      //iterate through using the key in lower case input
      for (let key of lowerInput) {
        //if my alphabet includes the key
        if (alpha.includes(key)) {
          //create a variable to object shorthand alpha.indexOf(key)
          keyIndex = alpha.indexOf(key);
          //final message += alphabet[keyIndex]
          finalMessage += alphabet[keyIndex];
          //else
        } else {
          //if the key is deeply equal to a space
          if (key === " ") {
            //final message with the space
            finalMessage += key;
          }
        }
      }
      //return the final encoded message
      return finalMessage;
    }
        //start decode section
    //if encode is false
    if (!encode) {
      //loop through using the key in lower case input
      for (let key of lowerInput) {
        //if the given alphabet includes the key
        if (alphabet.includes(key)) {
          //create a variable to object shorthand alphabet.indexOf(key)
          keyIndex = alphabet.indexOf(key);
          //final message += my alphabet[keyIndex]
          finalMessage += alpha[keyIndex];
          //else
        } else {
          //if key is deeply equal to a space
          if (key === " ") {
            //final message plus the space
            finalMessage += key;
          }
        }
      }
      //return final message
      return finalMessage;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
