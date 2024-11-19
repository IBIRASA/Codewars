/*our coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. it must make the first character in the string upper case).

The string will always start with a letter and will never be empty.

Examples:

"hello" --> "Hello"
"Hello" --> "Hello" (the first letter was already capitalized)
"a"     --> "A" */

/*Retrieves the first char of the string*/
/*converts frist chr to uppercse*/
/*retrieves the rest of the string from the second character*/

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  console.log(capitalize("hello"));
  console.log(capitalize("Hello")); 
  console.log(capitalize("a")); 
  