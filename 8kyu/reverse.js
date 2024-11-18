
/*arr is the original array that is passed to the function when you call it.
[...arr] creates a new array by copying all the elements of arr.
The reverse() method then reverses this new array, not the original one.*/




function reverseList(arr) {
    return [...arr].reverse();  // Create a new array and reverse it
}

console.log(reverseList([1, 2, 3, 4]));  
console.log(reverseList([9, 2, 0, 7]));  
