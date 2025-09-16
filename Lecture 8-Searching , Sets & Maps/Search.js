// let arr=[];
// for(let i=1;i<=100;i++){
//     arr.push(i);

// }
// console.log(arr);
// let k=57;


// let ans= binarySearch(arr,k);
// console.log(ans);

// function binarySearch(arr,k){

//         let s=0;
//         let e=arr.length-1;

//         while(s<=e){
//             let mid=Math.floor(s + (e-s)/2);

//             if(k===arr[mid]){
//                 return mid;

//             }else if(arr[mid] < k){
//                 s=mid+1;

//             }else{
//                 e=mid-1;
                
//             }
//         }
//         return -1;
//     }



// let n=36; 
// console.log(squareRoot(n));


function squareRoot(n){

    let start=0;
    let end=n;

    while(start <= end){

        let mid = Math.floor(start + (end - start )/2);

        if(mid * mid === n){
            return mid;
        }else if(mid * mid > n){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    return -1;

}


// let arr=[1,3,4,6,7,9,11,15];
// let  target=11;
// console.log(binarySearchElement(arr,target));

function binarySearchElement(arr){
    let start = 0;
    let end = arr.length-1;

    while(start <= end){

        let mid = Math.floor(start + (end - start)/2);
    
        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] < target){
            start = mid +1;
        }else{
            end = mid-1;
        }
    }
    return -1;
}


// let arr=[1,2,6,6,11,11,11,15];
// let target = 6;
// console.log(firstOccurence(arr,target));

function firstOccurence(arr,target){
    let s = 0;
    let e = arr.length-1;
    let ans=-1;

    while(s <= e){
        
        let mid = Math.floor(s + (e - s)/2);

        if(arr[mid] === target){
            ans=mid;
            e = mid-1;

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


//............ LowerBound ............

// let arr=[1,2,6,6,11,11,11,15];
// let target =11;
// console.log(lowerBound(arr,target));

function lowerBound(arr){
    let start=0;
    let end =arr.length-1;
    let index=arr.length;

    while(start <= end){
        let mid =Math.floor( start + (end - start)/2);

        if(arr[mid] >= target){
            index=mid;
            end = mid - 1;
        }else{
            start = mid + 1;
        }

    }
    return index;

}

// let arr=[1,2,6,6,11,11,11,15];
// let target=7;
// console.log(upperBound(arr ,target));

function upperBound(arr){
    let s=0;
    let e=arr.length-1;
    let index=arr.length;

    while(s <= e){
        let mid = Math.floor(s + (e-s)/2);
        
        if(arr[mid] <= target){

            index=mid+1;
            s = mid+1;
        }else{
            e=mid-1;
        }
    }
    return index;
}
 

// let arr=[6,7,8,9,1,2,3];
// let target=1;
// console.log(searchRotateArray(arr,target));

function searchRotateArray(arr,target){
    let s=0;
    let e=arr.length-1;

    while(s <= e){
        let mid = Math.floor(s +( e - s)/2);
        if(arr[mid] == target){
            return mid;
        }
        if(arr[s] <= arr[mid]){
            if(arr[s] <= target && arr[mid] >= target){
                e = mid-1;
            }else{
                s = mid+1;
            }
        }else{
            if(arr[mid] <= target && arr[e] >= target){
                s = mid + 1;
            }else{
                e = mid - 1;
            }
        }
    }
    return -1;
}
