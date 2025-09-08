// let arr=[2,2,3,4,432,22,14,2,1,11,1,3];
// let set = new Set();

// for(let el of arr){
//     set.add(el);
// }
// console.log(set);


//InterSection of Two Arrays

let arr1 =[1,2,4,5,6];
let arr2 =[2,5,6,3,1,3];


let set1=new Set();

for(let s1 of arr1){
    set1.add(s1);
}

let set2=new Set();
for(let s2 of arr2){
    if(set1.has(s2)){
        set2.add(s2);
    }
}

console.log(set2);