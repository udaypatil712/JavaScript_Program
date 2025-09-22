let arr=[1,2,4,3];

let missing=1;
for(let i=1;i<=arr.length+1;i++){
    if(!arr.includes(i)){
        missing=i;
    }
}
console.log(missing);

// let map =new Map();
// for(let i of arr){
//     map.set(i,0);
// }
// console.log(map)
// let missing=0;
// for(let i=0;i<arr.length+1;i++){
//     if(!map.has(i)){
//         missing=i;
//     }
// }
// console.log(missing);