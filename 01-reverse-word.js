//*****************my solution
const reverse_text = text => {
    const text2 = text.split(' ');
    const text3 = [];

    for ( let i = 0; i < text2.length; i++){
        text3.push(text2[i].split('').reverse().join(''));
    }

    return text3.join(' ');

}

const text = 'hola como estas mel';
const text_2 = 'Mel  Cary'


// console.log(reverse_text(text));
// console.log(reverse_text(text_2));


//*****************the best solution
function reverseWords(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
  }

//****************other solutions
function reverseWords(str) {
    // Go for it
    //split words into seperate arrays
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
  }

  //**********trying to do other solution */
  const my_other_solution = text => {
      return text.split(' ').map( word => (
          word.split('').reverse().join('')
      ) ).join(' ')
  }

  console.log(my_other_solution('Mel  Cary'))