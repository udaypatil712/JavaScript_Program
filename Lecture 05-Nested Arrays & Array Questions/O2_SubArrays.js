// let arr=[1,2,3,4,5];

// arr.pop(); // remove last elment of array 1,2,3 ..
// arr.shift();  // remove the first of array // 2,3,4...
// arr.unshift(1,2,3) // this method add the element at first  
 
// console.log(arr);  

// for(let i=0;i<arr.length-1;i++){
//     arr[i]=arr[i+1];
// }
// arr.length=arr.length-1;
// console.log(arr);

// let arr=[-1,5,-3,2,-1,3];  //6 [-1,5,-3,2,-1,3]
// maxsum(arr);
 

function maxsum(arr1){
    let maxSum=arr1[0];
    for(let i=0;i<arr1.length;i++){
        let subArrays="";
        let sumSubArrays=0;
        for(let j=i;j<arr1.length;j++){
            subArrays+=arr1[j]+" ";
            sumSubArrays+=arr1[j];
            console.log(subArrays);
            console.log({sumSubArrays});
            if(maxSum < sumSubArrays){
                maxSum=sumSubArrays;
            }
        }
        console.log("--------");
    }
    console.log(maxSum);
   
}


// let tyuii=[1,2,-3,0,1,-1,1];
// countSumK(tyuii , 0);

function countSumK(arr1 , k){     // o(n*n) , o(1)
    let count=0 ;
    console.log(arr1, k);
    for(let i=0;i<arr1.length;i++){
        let subArrays=[];
        let sumSubArrays=0;
        for(let j=i;j<arr1.length;j++){

            subArrays+=arr1[j]+" ";
            sumSubArrays+=arr1[j];

            if(sumSubArrays === k){
                console.log({subArrays});
                count++;
            }
        }
        console.log("--------");
    }
    console.log(count);
   
}


// let arr=[1,2,-3,0,1,-1,1];
// printKOfSubArrays(arr,2);

function printKOfSubArrays(arr1 , k){ 
    let n=arr.length;                              // o(n*n) , o(1)
    let countSubArrays=0;
    for(let i=0;i<arr1.length;i++){
        let subArrays=[];
        for(let j=i;j<arr1.length;j++){
            subArrays[j-i]=arr[j];
            // console.log({subArrays});
            // console.log(subArrays.length);
            if(subArrays.length === k){
                console.log({subArrays});
                countSubArrays++;
            }
        }
        console.log("---------------------------")
    }
   console.log(countSubArrays);
}



// let arr=[1,2,-3,0,1,-1,1];
// maxLengthOfSubArrays(arr);

function maxLengthOfSubArrays(arr){
    let maxLength=-Infinity;
    for(let i=0;i<arr.length;i++){
        let subArrays=[];
        for(let j=i;j<arr.length;j++){
            subArrays[j-i]=arr[j];
            // console.log(subArrays);
            if(subArrays.length > maxLength){
                maxLength=subArrays.length; 
            }
        }
        console.log(subArrays);
        break;
        // console.log("----------------------------------")
    }
    console.log(maxLength)
}



let arr=[1, 2, 3, 4, 5];
findSubArrays(arr,3);

function findSubArrays(arr,k){
    
    for(let i=0;i<arr.length;i++){
        let sumSubArrays=0;
        let subArrays=[];
        for(let j=i;j<arr.length;j++){
            subArrays[j-i]=arr[j];
            // console.log(subArrays);
            sumSubArrays+=arr[j];
            if(sumSubArrays === k){
                console.log(subArrays);
            }
            // break;
        }
        // console.log("_____________")
    }
}
