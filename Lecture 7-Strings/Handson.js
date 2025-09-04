str = "'abc'";
console.log(typeof (str));

//Method in javascript

//includes function.
str = "hello Uday"
let find=false;
if(str.includes(" ")){
  find=true;
}
console.log(find);

//trim()==>remove all start and end spaces

str = "  i am patil  ";
console.log(str.trim());

//substring()
str = `Hi I'm Mitanshu, I have joined "Mern classes`;
// console.log(str.substring(3)); 
// console.log(str.substring("3")); //give me 

//split() -> splits the string  based on the given charcter
const s = `Hi I'm Mitanshu, I have joined "Mern classes`;
console.log(s.split(' '));
 
const string = "uday";
const number = 67;
const bool = true;
const object = {
    name : "mitanshu",
}

console.log(string.);


//===================spread & Rest Operator====================

// // Rest Operator    --> Combines all the arguments and transforms them into an array

// function addStudent(students, ...studentName) {
//     for (let student of studentName) {
//         students.push(student);
//     }
//     console.log(students)     //prints the array
// }
// const students = ["uday", "Darshan", "Hitesh"];
// addStudent(students, "Mitanshu", "Jayesh", "Pratik");