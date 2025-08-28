let arr=[1,2,3,4,5];
 
// rightToLeftRotation(arr);

// let ans=LeftToRightRotation(arr);
// console.log(ans);

// let ans=clockWisedRotationByK(arr,9);
// console.log("clockWisedRotationByK :-",ans);

let ans1=antiClockWisedRotationByK(arr,9);
console.log("antiClockWisedRotationByK :-",ans1);



function rightToLeftRotation(arr){  // it's is give me wrong output 
    let temp=arr[arr.length-1];  
    for(let i=1;i<arr.length;i++){
        arr[i]=arr[i-1];
    }
    arr[0]=temp;
    console.log(arr);
}

function LeftToRightRotation(arr){
    let temp=arr[0];
    for(let i=1;i<arr.length;i++){
        arr[i-1]=arr[i];
    }
    arr[arr.length-1]=temp;
    return arr;
}

function  clockWisedRotationByK(arr,d){ // O(n) , O(d) // clock-wised direction by k element
    let n=arr.length;
    d=d%n;
    console.log(d);
    let temp=[];
    for(let i=0;i<d;i++){
        temp[i]=arr[i];
    }
    for(let i=d;i<arr.length;i++){
        arr[i-d]=arr[i];
    }
    for(let i=n-d;i<arr.length;i++){
        arr[i]=temp[i-(n-d)];
    }
    return arr;

}

function antiClockWisedRotationByK(arr,d){ // O(n) , O(d) // Anti clocked-wised direction by k element
    let n=arr.length;
    d=d%n;
    console.log(d);
    let temp=[];
    for(let i=0;i<(n-d);i++){
        temp[i]=arr[i];
    }
    for(let i=(n-d);i<arr.length;i++){
        arr[i-(n-d)]=arr[i];
    }
    for(let i=d;i<arr.length;i++){
        arr[i]=temp[i-d];
    }
    return arr;
}
