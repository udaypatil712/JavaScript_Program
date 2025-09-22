//METHOD 2 - using typeof keyword
console.log("Printing nested array using typeof keyword!");
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] == "number") console.log(arr[i]);
  else {
    // since arr[i] is an array, we'll use a for loop to print this array
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }
}

//METHOD 3 - using isArray() method
// isArray(arr) -> returns boolean value determining if a variable "arr" is an array or not
console.log("Printing nested array using isArray() method!");
for (let i = 0; i < arr.length; i++) {
  if (!Array.isArray(arr[i])) console.log(arr[i]);
  else {
    // since arr[i] is an array, we'll use a for loop to print this array
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }
}

//function to check if a nested array is a matrix or not
function isMatrix(arr) {
  if (!Array.isArray(arr)) return false; // if arr = 5; OR arr = 'a'
  if (!Array.isArray(arr[0])) return false; // arr = [1,2,3,4]
  let colSize = arr[0].length;

  for (let array of arr) if (array.length != colSize) return false;

  return true;
}

console.log("Single Dimensional Array", isMatrix([2, 3, 4, 5, 6]));
console.log("Nested (Mixed) array", isMatrix(arr));
console.log(
  "an actual matrix of 3*3",
  isMatrix([
    [1, 2, 3],
    [2, 3, 4],
    [1, 4, 5],
  ])
);

console.log(
  "a nested array with different number of columns in rows",
  isMatrix([
    [1, 2, 3],
    [2, 3],
    [1, 4, 5],
  ])
);

const arr3 = [" "];
console.log(-4 / (arr3[0] * 1)); //gives zero

// function to calculate product of sum of rows in a nested array
function calRowSumProduct(arr) {
  let ans = 1;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
    ans *= sum;
  }

  return ans;
}

console.log(
  "Product of sum of rows: ",
  calRowSumProduct([
    [1, 2, 3],
    [2, 3],
    [1, 4, 5],
  ])
);

// write a function to calculate the sum of nested arrays
function calNestedArraySum(arr) {
  let ans = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
    ans += sum;
  }

  return ans;
}

console.log(
  "Sum of all elements of Nested array: ",
  calNestedArraySum([
    [1, 2, 3],
    [2, 3],
    [1, 4, 5],
  ])
);