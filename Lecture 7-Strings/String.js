// //strings using single quotes
// let str = 'a'    //type 1 of defining strings
// console.log(typeof (str));

// str = ['a', 'b', 'c'];
// console.log(typeof (str));

// str = 'abc';
// console.log(typeof (str));

// //Strings using double quotes
// str = "ABC"        //type 2 of defining strings 
// console.log(typeof (str));

// //strings using backticks
// str = 'abc';         //type 3 of defining strings
// console.log(typeof (str));

// //case when we must use double inverted comma
// str = "Hi I'm Mitanshu"
// console.log({ str });

// //case when we must use single inverted comma
// str = 'Hi this is "Java" classes';
// console.log({ str })

// //case when we must use backticks 
// str = Hi I'm Mitanshu, I have joined "Mern classes;
// console.log({ str });

// let name = "uday"
// str = Hello, I'm ${name};
// console.log(str);


// //includes function.
// str = "hello"
// console.log(str.includes(str.includes('h')));
// console.log(str.includes(str.includes('hello')));


// //replace function...first occurence
// console.log(str.replace("w","x"));
// console.log({str});


// //replace function...
// console.log(str.replaceAll("w","x"));
// console.log({str});

// //trim()==>remove all traiing and leading spaces

// str = " mitanshu ";
// console.log(str.trim());

// //substring() ->gives substring
// str = Hi I'm Mitanshu, I have joined "Mern classes;
// console.log(str.substring(3,9));//gives substring starting from 3 and ending at 8(9 - 1)
// console.log(str.substring(3));//gives substring starting from index = 3 till end
// console.log(str.substring("3"));//
// console.log(str.substring(-3,-10));//gives empty
// console.log(str.substring(-3,10000));//(0,n)



// //slice() -> almost same as substring,but changes in negative values
// console.log(str.slice(3));//(3,n)
// console.log(str.slice(3,5));//gives elements from index 3 to 4
// console.log(str.slice(-3));//last ke 3 index print karega
// console.log(str.slice());//full string
// console.log(str.slice(-100));//gives all elements in case the number is greater than the length of the String
// console.log(str.slice(-9,-3))
// console.log(str.slice(-3,-3))


// //split() -> splits the string  based on the given charcter
// console.log(str.split(" "));
// const line = Hi I'm Mitanshu, I have joined "Mern classes;
// console.log(line.split(" "));

// //Wrapper object

// const string = "uday";
// const number = 67;
// const bool = true;
// const object = {
//     name : "mitanshu",
// }

// console.log(string._proto_);

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


// let str ="uday patil";
// camelCase(str);
function camelCase(str){
    let res="";
    for(let i=0;i<str.length;i++){
        let space=" ";
            if(space === str[i]){
                res+=str[i+1].toUpperCase();
                i++
            }else{
                res+=str[i];
            }
    }
    // console.log(res);
}


// snake_case(str);
function snake_case(str){
    let res="";
    for(let i=0;i<str.length;i++){
            if(str[i] === " "){
                res+="_";
            }else{
                res+=str[i];
            }
    }
    // console.log(res);
}



let str ="madamsdf";
reverseString(str);

function reverseString(str){ //o(n) , O(n)

    let rev=str;
    let arr=str.split("");

    console.log(arr);
    let start=0;
    let end=str.length-1;
    while(start <= end){
        let temp=arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    str=arr.join("");
    return str;

    // second approch for palindrome...
    // if(str === rev){
    //     console.log("is palindrome...")
    // }else{
    //     console.log("is not palindrome..")
    // }
}


// let str="11";
// palindrome(str);

// let str1="madam";
// let ans =palindrome(str1);
// console.log(ans);

function palindrome(str1){ //O(n) , O(1)

    // third approach this will give me in boolean answer
    let original=reverseString(str);
    return str1 === original;


    // let s=0; 
    // let e=str.length-1;
    //    while (s<=e) {
    //         if(str.charAt(s) != str.charAt(e)){
    //            console.log(" is not palindrome " ,str);
    //            break;
    //         }
    //         else{
    //             console.log("is plaindrome ",str);
    //         }
    //         s++;
    //         e--;
    //     }

}

// let word="udagh ghsdgsh nsjbjshc";
// countWord(word);
function countWord(str){ //O(n) O(1)
    let count=0; 
    for(let i=0;i<str.length;i++){
        if(" " === str[i]){
            count++;
        }
    }
    console.log(count+1);
    console.log(str.trim().split(" ").length);
}

// let words="uday ";
// maxWord(words);

function maxWord(word){ //o(n) , O(n)
    let arr=word.split('');
    console.log(arr);

    let max=arr[0];
    
    for(let i=0;i<arr.length;i++){
        if(max < arr[i]){
            max=arr[i];
        }
    }
    console.log(max);
}




