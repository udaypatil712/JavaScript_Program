let arr=[1,2,3,4,5,6,7];
let target = 2;
console.log(binarySearch(arr,target,0,arr.length-1));

function binarySearch(arr,target , s ,e){
    while(s > e){
        return -1;
    } 
    let mid = Math.floor(s + (e -s ) / 2);

    if(arr[mid] === target){
        return mid;
    }
    else if(arr[mid] < target){
        return binarySearch(arr , target , mid + 1, arr.length-1);
    }
    else{
        return binarySearch(arr , target , 0 , mid - 1);
    }
    
}