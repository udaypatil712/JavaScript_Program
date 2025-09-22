
//QUESTIONS ON FUNCTIONS AND ARRAYS
/*
Q1: Find factorial of a number. 
Input
5
Output
120
Explanation: 5! = 1*2*3*4*5;
*/

function factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
}

console.log("Factorial of 5", factorial(5));
console.log("Factorial of 0", factorial(0));
console.log("Factorial of 10", factorial(10));

/* 
Bachaa Question: 
Part1: Write a function to calculate the average of an array
Part2: Print the average upto 6 decimal places

Input
[4, 8, 3, 5]

Output
5

Explanation
sum of array = 20, total number of elements = 4
hence average = sum of array/total number of elements 
              = 20/4 
              = 5
*/

/*
===============================
Q2: Given an array -> [4, 10, 6, 8] and r = 4; 
Find nCr of each element of this array.

nCr = n!/[(n-r)!*r!]

input:
[4, 10, 6, 8]

output:
[1, 210, 15, 70]

explanation:
nCr for this array:
nCr(4) = 1,
nCr(10) = 210
nCr(6) = 15
nCr(8) = 70


STEPS:
1 - write a function to calculate factorial
2 - write a function to calculate nCr, according to formula
3 - write a function to calculate nCr for an array
    - loop over array, and for each element of this array, call nCr(element, r)
    - whatever value nCr is returning, store it inside an array
4 - print the nCr array for this given array
 */
function nCr(n, r) {
  if (n - r < 0) return -1;

  const nFact = factorial(n);
  const rFact = factorial(r);
  const nrFact = factorial(n - r);

  const result = nFact / (rFact * nrFact);

  return result;
}

function nCrOfAnArray(arr) {
  const r = 4;
  const ans = [];

  for (let number of arr) {
    const ncr = nCr(number, r);
    ans.push(ncr);
  }

  return ans;
}

function printArr(arr) {
  console.log(arr);
}

const numbers = new Array(4, 10, 6, 8);
printArr(nCrOfAnArray(numbers)); // equivalent to console.log(nCrOfAnArray(numbers));