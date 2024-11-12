/*

Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi!!"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"
*/ 

function removeExclamationMarks(s) {
    if (s.endsWith('!')) {
        s = s.slice(0, -1);  
    }
    return s;
}
console.log(removeExclamationMarks('hello!!!')); 
console.log(removeExclamationMarks('Hi!'));  
console.log(removeExclamationMarks('Hi!!!'));  
console.log(removeExclamationMarks('!Hi!'));  
console.log(removeExclamationMarks('!Hi'));  
console.log(removeExclamationMarks('Hi! Hi!'));


   



  