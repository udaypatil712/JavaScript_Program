//TASK - print all students with even roll numbers
console.log("Student with even roll numbers: ");
for (let i in students) {
  (Number(i) + 1) % 2 == 0 ? console.log(students[i]) : null;
}

//for ..of loop --> only gives values and not indices
for (let student of students) {
  console.log(student);
}

// declaration -> creating a new variable
// definition -> defining the variable or function

// read about primitive datatypes

// other types of array declarations
const arr1 = [1, 2, 4, 5, 6];
const arr2 = new Array(1, 2, 3, 4, 5);
arr1[2] = 10;
console.log(arr1);

const emptyArr1 = [];
const emptyArr2 = new Array();
console.log(emptyArr1, emptyArr2);

// homogenous property in array
const arr3 = [1, 2, 3, 4, 5, 6];

// heterogenous property of array
const arr4 = ["hello", 45, "world", 5.6, welcomeUser];
console.log(arr4);

// some functions of Arrays
const iplTeams = ["CSK", "MI", "RCB", "SRH"];

//add some elements
//1
console.log("PUSH: ", iplTeams.push("GT")); // insert at end
//2
iplTeams.unshift("KKR"); //insert at begining

//Remove some elements
//1
iplTeams.pop(); // deletes from end
//2
iplTeams.shift(); // deletes from begining

console.log("IPL teams: ", iplTeams);

//length
console.log("No. of IPL teams", iplTeams.length);
// print IPL teams
console.log("IPL teams: ", iplTeams);

//slice
// keeps all elements after first 2 elements
console.log("Sliced: ", iplTeams.slice(2));
// keeps 2 elements from end
console.log("Negative Sliced: ", iplTeams.slice(-2));

console.log("Real teams: ", iplTeams);