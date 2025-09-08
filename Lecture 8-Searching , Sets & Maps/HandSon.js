// let arr=[1,2,6,6,11,11,11,15];
// let target = 6;
// console.log(firstAndLastOccurence(arr,target));

function firstAndLastOccurence(arr,target){
    let ans=[-1,-1];

        ans[0]=binarySearch(arr,target,true);
        ans[1]=binarySearch(arr,target,false);

    return ans;
  
}
function binarySearch(arr,target,isfound){
    let s = 0;
    let e = arr.length-1;
    let ans=-1;

    while(s <= e){
        
        let mid = Math.floor(s + (e - s)/2);

        if(arr[mid] === target){
            ans=mid;
            if(isfound){
                e=mid-1;
            }else{
                s=e+1;
            }

        }
        else if(arr[mid] < target){
            s = mid +1;
        }
        else{
            e= mid-1;
        }

    }
    return ans;
}

 
//..............Sets

//InterSection of Two Arrays

let arr1 =[1,2,4,5,6];
let arr2 =[2,5,6,3,1,3];


// let set1=new Set();

// for(let s1 of arr1){
//     set1.add(s1);
// }

// let set2=new Set();
// for(let s2 of arr2){
//     if(set1.has(s2)){
//         set2.add(s2);
//     }
// }

// console.log(set2);



// Print Unique element in both arrays 

// let set1=new Set();
// for(let s1 of arr1){
//     set1.add(s1);
// }

// for(let s2 of arr2){
//     set1.add(s2);
// }

// console.log(set1);

// let str="aabbc"
// console.log(removeDuplicates(str));


function removeDuplicates(str) {
  let set1 = new Set();

  for(let s1 of str){
    set1.add(s1);
  }
  let ans="";
  for(let i of set1){
    ans+=i;
  }
  return ans; 
}


//..........Maps 

//..frequency of an element..

// let str="aaabbcccddde";
// frequencyCount(str);

function frequencyCount(str){

    let map = new Map();
    
    for(let i = 0 ; i<str.length;i++){
        if(map.has(str[i])){
            map.set(str[i] , map.get(str[i]) + 1);
        }else{
            map.set(str[i] , 1);
        }
    }
    for(let [key , value] of map.entries()){
        console.log(key+"=>"+value);
    }
}