//strings using single quotes
let str = 'a'    //type 1 of defining strings
console.log(typeof (str));

str = ['a', 'b', 'c'];
console.log(typeof (str));

str = 'abc';
console.log(typeof (str));

//Strings using double quotes
str = "ABC"        //type 2 of defining strings 
console.log(typeof (str));

//strings using backticks
str = 'abc';         //type 3 of defining strings
console.log(typeof (str));

//case when we must use double inverted comma
str = "Hi I'm Mitanshu"
console.log({ str });

//case when we must use single inverted comma
str = 'Hi this is "Java" classes';
console.log({ str })

//case when we must use backticks 
str = Hi I'm Mitanshu, I have joined "Mern classes;
console.log({ str });

let name = "Mitanshu"
str = Hello, I'm ${name};
console.log(str);


//includes function.
str = "hello"
console.log(str.includes(str.includes('h')));
console.log(str.includes(str.includes('hello')));


//replace function...first occurence
console.log(str.replace("w","x"));
console.log({str});


//replace function...
console.log(str.replaceAll("w","x"));
console.log({str});

//trim()==>remove all traiing and leading spaces

str = " mitanshu ";
console.log(str.trim());

//substring() ->gives substring
str = Hi I'm Mitanshu, I have joined "Mern classes;
console.log(str.substring(3,9));//gives substring starting from 3 and ending at 8(9 - 1)
console.log(str.substring(3));//gives substring starting from index = 3 till end
console.log(str.substring("3"));//
console.log(str.substring(-3,-10));//gives empty
console.log(str.substring(-3,10000));//(0,n)



//slice() -> almost same as substring,but changes in negative values
console.log(str.slice(3));//(3,n)
console.log(str.slice(3,5));//gives elements from index 3 to 4
console.log(str.slice(-3));//last ke 3 index print karega
console.log(str.slice());//full string
console.log(str.slice(-100));//gives all elements in case the number is greater than the length of the String
console.log(str.slice(-9,-3))
console.log(str.slice(-3,-3))


//split() -> splits the string  based on the given charcter
console.log(str.split(" "));
const line = Hi I'm Mitanshu, I have joined "Mern classes;
console.log(line.split(" "));

//Wrapper object

const string = "uday";
const number = 67;
const bool = true;
const object = {
    name : "mitanshu",
}

console.log(string._proto_);

// console.log(Number("123"));

//===================spread & Rest Operator====================

//Rest Operator    --> Combines all the arguments and transforms them into an array
// function addStudent(students, ...studentName) {
//     for (let student of studentName) {
//         students.push(student);
//     }
//     console.log(students)     //prints the array
// }
// const students = ["uday", "Darshan", "Hitesh"]
// addStudent(students, "Mitanshu", "Jayesh", "Pratik")

// const [hi, ...bye] = ["Hi", "Bye", "Byee", "Byeeee"]
// console.log(hi, bye);

// //spread operator
// const arr = [1, 2, 3, 4, 5]
// console.log("Spreaded array :", [0, ...arr, 67, 678, 679])//Rest Operator