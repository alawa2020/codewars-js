// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

//****** My first code */

function alphabetPositionFirst(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    const result = [];
    for ( let i = 0; i < text.length; i++ ){
      if( alphabet.includes(text.toLowerCase()[i]) ){
        result.push(alphabet.indexOf(text[i].toLowerCase()) +1);
      }
    }
    
    let result2 = result.join(' ');
    return result2;
  }

//my second code

const alphabetPositionSecond = ( text ) => {
    return textArray = text.toUpperCase().split('')
    .map( letter => {
        let current_letter = letter.charCodeAt(0);
        if ( current_letter > 64 && current_letter < 91){
            return current_letter - 64
        }
    } )
    .filter( index_letter => typeof index_letter == 'number')
    .join(' ')
}


console.log(alphabetPositionSecond("The sunset sets at twelve o' clock."))

// *********otheres solutions
function alphabetPosition2(text) {
    return text
      .toUpperCase()
      .match(/[a-z]/gi)
      .map( (c) => c.charCodeAt() - 64)
      .join(' ');
}

function alphabetPosition3(text) {
    var result = "";
    for (var i = 0; i < text.length; i++){
      var code = text.toUpperCase().charCodeAt(i)
      if (code > 64 && code < 91) result += (code - 64) + " ";
    }
  
    return result.slice(0, result.length-1);
  }

function alphabetPosition(text) {
    return text.toLowerCase().split('').map(a => a.charCodeAt(0) - 96).filter(a => a > 0 && a < 27).join(' ');
  }

