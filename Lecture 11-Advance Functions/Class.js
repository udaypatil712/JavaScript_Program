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

// .......higher order functions.......
   
    // 1 .forEach()

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

//  let names = ["uday" , "pratik"];
 
//  let updateNames=names.filter((value)=>{
//     return (value.length > 5);
//  })
//  console.log(updateNames);