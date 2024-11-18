function removeEverySecondElement(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  // Example usage
  const array = ["Keep", "Remove", "Keep", "Remove", "Keep"];
  const result = removeEverySecondElement(array);
  console.log(result);
  