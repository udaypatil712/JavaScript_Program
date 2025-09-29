// Method 1 :- single line input then you have to use this.
 

// this will give explecitly   
let print = (n)=> n % 3 === 0;
// console.log(print(3));

// Method 2 :- multiple line input then you have to use this.
// implecitly
let print2= (n)=> {
    return n % 3 === 0
};
// console.log(print(3));

// .......higher order functions.......(doesn't change the original array)
   
    // 1 .forEach()  => doesn't change the original array

    // - applies the callback function on each element
    // - iterates over each element and doesn't break like other for loops
    // - doesn't change the original array
    // - returns undefined
    // - can be used to iterate and do some operations on array


// let arr=[2,1,3,4];

//     console.log(
//         arr.forEach((value,index,array)=>{
//             value*=2;
//             array[index]=value;
//             console.log(value,index,array);
//         })
//     );
    // console.log({arr});


    //2 .map();

    //  - transforms the array
    // - returns an array
    // - doesn't change the original array


//  let user=[
//     {name : "uday" , age:22},
//     {name : "pratik" , age:22}
//  ];

//  let newArr=user.map((value)=>{  // <= this is argument 
//      return {name: value.name.toUpperCase(),age: value.age};
//  });

//  console.log(newArr); // copy of original array
// console.log(user); // not change original array


    //3 .filter();

    // - keeps the elements that passes the condition
    // - returns an array
    // - doesn't change the original array
    // - nums.filter((value, index, array) => condition)


//  let names = ["uday" , "pratik"];
 
//  let updateNames=names.filter((value)=>{
//     return (value.length > 5);
//  })
//  console.log(updateNames);


   // .reduce();

//    let arr = [1,2,3,4];
//    let sum=0;
//    for(let i=0;i<arr.length;i++){
//     sum+=arr[i];
//    }
//    console.log(sum);


//    for(let i of arr){
//     sum+=i;
//    }
//    console.log(sum);


// let even = arr.reduce((acc ,val , ind ,array) =>{
//     if(val%2==0){
//         acc++;
//     }return acc;
// },0)

// console.log({even});


// let even = arr.reduce((acc ,val , ind ,array) =>{
//     acc+= (val%2==0)
//     return acc;
// },0)

// console.log({even});



// let objfreq={

// }
// console.log(freq(fruit));
// function freq(fruit){
//     let objfreq={};
//     // let freqC=0;
//     for(let i in fruit){
//         objfreq[fruit[i].toLowerCase()] = (objfreq[fruit[i].toLowerCase()] || 0) +1;

//     }
//     return objfreq;
// }


// let fruit = ["apple" , "banana" , "Apple","Banana"];
// let frq=fruit.reduce((acc,val,ind,fruit)=>{
    
   
//     acc[val.toLowerCase()] = (acc[val.toLowerCase()] || 0) + 1;
//     return acc;

// }, {});
// console.log({frq});

// ....Questions for Practic

//ques 1

let users=[
    {name : "uday" ,age : 22},
    {name : "ethan" ,age : 42},
    {name : "sdv" ,age : 462}
];

let printName=users.find((value , ind , arr)=> value.age > 30);  // you want to return only value that time use the find()0
console.log(printName.name);  


//ques 2

// let users=[
//     {name : "uday" ,age : 22},
//     {name : "ethan" ,age : 42},
// ];

// let ans = users.filter((value,ind,arr)=>{
//     return  users[ind].age > 30;  
//       // value.age > 30
// }); 

// console.log({ans});


// ques 3

// let users=[
//     {name : "uday" ,age : 22},
//     {name : "ethan" ,age : 42},
// ];

// let printAllName=users.map((value , ind , arr) => value.name);

// console.log({printAllName});


// ques 4

// let users=[
//     {name : "uday" ,age : 22,isActive:true},
//     {name : "ethan" ,age : 42,isActive:false},
// ];

// let checkActiveStatus = users.filter((val,ind,arr)=>{
//     return val.isActive === true;
// });

// console.log({checkActiveStatus});

//ques 5

// let users=[
//     {name : "uday" ,age : 22,isActive:true},
//     {name : "ethan" ,age : 42,isActive:false},
//     {name : "ethan" ,age : 12,isActive:false}
// ];

// let sumAge=users.reduce((sum , val , ind , arr)=>{
//     if(val.age < 30){
//         sum+=val.age;
//     }
//     return sum;
// },0);

// console.log({sumAge});


// ques 6

// let users=[
//     {name : "uday" ,age : 22,isActive:true},
//     {name : "ethan" ,age : 42,isActive:false},
//     {name : "bhavesh" ,age : 12,isActive:true}
// ];


// let printActiveUsers = users.filter((val,ind,arr)=> val.isActive);
// console.log(printActiveUsers);

// let  printNameActive = printActiveUsers.map((val,ind,arr) => val.name);
// console.log({printNameActive});

 
