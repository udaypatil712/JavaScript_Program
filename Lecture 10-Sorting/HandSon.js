// // let arr=[-1,-5,-2,-9,5,6,4,23,2,2];
// // newSorting(arr);

// function newSorting(arr){
//     let Narr=[];

//     for(let i = 0 ; i < arr.length ; i++){
//         if(arr[i] < 0){
//             Narr.push(Math.abs(arr[i]));
//         }
//     }
//     // console.log(Narr);
    
//     let Nmax=Narr[0];

//     for(let i =0 ;i < Narr.length ; i++){
//         if(Narr[i] > Nmax){
//             Nmax=Narr[i];
//         }
//     }
//     // console.log(Nmax);

//     let Ntemp= new Array(Nmax+1).fill(0);

//     let Nmap = new Map();

//     for(let i = 0 ; i < Narr.length; i++){
//         if(Nmap.has(Narr[i])){
//             Nmap.set(Narr[i] ,Nmap.get(Narr[i]) + 1); 
//         }else{
//             Nmap.set(Narr[i] , 1); 
//         }
//     }
//     // console.log(Nmap);
    
//     for(let [key , value] of Nmap.entries()){
//         Ntemp[key]=Nmap.get(key);
//     }
//     // console.log(Ntemp);

//     let Nans = [];
//     let n =0
//     for(let i = 0 ; i < Ntemp.length ; i++){
//         if(Ntemp[i] != 0){
//             if(Ntemp[i] > 1){
//                 Nans[n]=-(i);
//                 n++;
//             }
//             Nans[n]=-(i);
//             n++;
//         }
        
//     }
//     //  console.log(Nans);

//      let Parr=[];

//      for(let i  = 0 ;i < arr.length ; i++){
//         if(arr[i] >= 0){
//             Parr.push(arr[i]);
//         }
//      }
//     //  console.log(Parr);

//     let Pmax=Parr[0];
//     for(let i=0;i<Parr.length;i++){
//         if(Pmax < Parr[i]){
//             Pmax=Parr[i];
//         }
//     }
 
//     let Ptemp= new Array(Pmax+1).fill(0);

//     let Pmap = new Map();
//     for(let i = 0 ; i < Parr.length; i++){
//         if(Pmap.has(Parr[i])){
//             Pmap.set(Parr[i] ,Pmap.get(Parr[i]) + 1); 
//         }else{
//             Pmap.set(Parr[i] , 1); 
//         }
//     }
//     // console.log(Pmap);
    
//     for(let [key , value] of Pmap.entries()){
//         Ptemp[key]=Pmap.get(key);
//     }
//     // console.log(Ptemp);

//     let Pans = [];
//     let p =0;
//     for(let i = 0 ; i < Ptemp.length ; i++){
//         if(Ptemp[i] != 0){
//             if(Ptemp[i] > 1){
//                 Pans[p]=i;
//                 p++;
//             }
//             Pans[p]=i;
//             p++;
//         }
        
//     }
//     //  console.log(Pans);


//     let result=[];
     
//      let k=0;
//      for(let i = Nans.length-1 ; i>=0 ; i--){
//         result[k] = Nans[i];
//         k++;
//      }

//     //  console.log(k);

//      for(let i =  0; i < Pans.length ; i++){
//         result[k] = Pans[i];
//         k++;
//      }


//      console.log(result);

 
// }


// function insertionSort(arr){  // Worse Case O(n*n)
//     for(let i=0 ; i<arr.length-1;i++){
//         for(let j=0;j<i+1;j++){
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//             console.log(arr);
//         }
//         console.log(".......")
//     }
//     console.log(arr);
// }



// /* sort() in-bulid for sorting method in JS */

// let arr = [3, 1, 6, 2, 8, 7, 4];
// arr.sort(); //sorts in ascending order
// arr.sort().reverse(); // sorts in descending order

// //also sorts in ascending order
// arr.sort((a, b) => a - b);
// console.log({ arr });

// //also sorts in descending order
// arr.sort((a, b) => b - a);
// console.log({ arr });

// // let arr1 = ["apple", "watermelon", "kiwi"];
// arr1.sort();
// console.log(arr);

// //H.W. explore localeCompare() method for strings comparison

// let students = [
//   { name: "Kiran", age: 20, rollNum: 10 },
//   {
//     name: "Ramesh",
//     age: 20,
//     rollNum: 7,
//   },
//   { name: "Suresh", age: 24, rollNum: 12 },
// ];

// students.sort((a, b) => {
//   if (a.age == b.age) return b.rollNum - a.rollNum;
//   return a.age - b.age;
// });
// // console.log(students);

// const nestedArr1 = [
//   [1, 3],
//   [2, 1],
//   [1, 2],
//   [2, 4],
// ];

// // nestedArr1.sort((a, b) => a[1] - b[1]);
// // console.log({ nestedArr1 });

// /* H.w: sort the above array according to first value and then according to second value 
// output should be: 
// [
//   [1, 2],
//   [1, 3],
//   [2, 1],
//   [2, 4],
// ]
// */

// let fruitsName = ["apple", "watermelon", "kiwi","banana","Mango"];
// fruitsName.sort().sort((a,b)=>a.localeCompare(b));
// console.log(fruitsName); // output:- [ 'apple', 'banana', 'kiwi', 'Mango', 'watermelon' ]


// const nestedArr = [
//   [1, 3],
//   [3, 1],
//   [1, 2],
//   [2, 4],
// ];
// let arr=[];
// nestedArr.sort((a,b)=> {
//     for(let i=0; i<2 ;i++){
//         a[i]-b[i];
//     }
// });

// console.log(arr); //{ nestedArr: [ [ 1, 2 ], [ 1, 3 ], [ 2, 1 ], [ 2, 4 ] ] }

// let str=[1,2,3,4];
// let ans=[];
// let i =0;
// let arr=[];
// sorting(str,ans,i,arr);
// console.log(arr);
// let sum =0;
//   for(let i =0 ; i < arr.length;i++){
//     sum+=arr[i];
//   }
//   console.log(sum);
 
 
 

 
// function sorting(str,ans,i,arr){
//   let count =0;
//   if(3 === ans.length){
//     if(1 === ans.length || 3 === ans.length){
//       let min=ans[0];
//       let max = ans[2];
//       let temp = max - min;
   
//       if(temp <= 2){
//         count++;
//       }
      
//     }
//     arr.push(count);
//     return;
//   }
//   if(str.length === i){
//     return;
//   }

//   ans.push(str[i]);
//   sorting(str,ans,i+1,arr);
//   ans.pop();
//   sorting(str,ans,i+1,arr);
//}


 // second mininmum..;

 let arr = [4 ,3, 2, 1];

let min=Infinity;
let smin=Infinity;
let max=-Infinity;
let smax=-Infinity;
let ans=0;


 for(let i =0;i<arr.length;i++){
    if(arr[i] < min){
      smin=min;
      min = arr[i];
    }else if(arr[i] > min && smin > arr[i]){
      smin=arr[i];
      
    }
 }
 
  for(let i =0;i<arr.length;i++){
    if(arr[i] > max){
      smax=max;
      max = arr[i];
    }else if(arr[i] < max && arr[i]> smax){
      smax=arr[i];
    }
 }
ans = (max*smax) - ( min*smin );
 console.log(ans);