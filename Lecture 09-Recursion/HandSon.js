// let n= 30201;
// let c = 0;
// let ans=countZeros(n,c);
// console.log(ans);

function countZeros(n , c){
    if(n === 0){
       return c;
    }

    let rem = n % 10;

    if(rem === 0){
        return countZeros(Math.floor(n/10) , c + 1);
    }
    return countZeros(Math.floor(n/10) , c);
   
 
}

// let n=14;
// let c=0;
// console.log(stepToReachZero(n,c));

function stepToReachZero(n , c){
    if(n === 0){
        return c;
    }

    let check = n % 2 === 0;
    if(check){
        return stepToReachZero(Math.floor(n/2) , c + 1);
    }
    else{
        return stepToReachZero(n - 1 , c + 1);
    }
}

// let arr=[1,3,4,1,5,6,7];
// let i = 0;
// console.log(checkSort(arr,i));

function checkSort(arr , i){
    if(i === arr.length-1){
        return true;
    }
    return arr[i] < arr[i + 1] && checkSort(arr , i+1);
}

// let arr=[1,0,0];
// let target=2;
// let ans=searchElement(arr,arr.length-1,target);
// console.log(ans);

function searchElement(arr,n,target){
    if(n < 0){
        return -1;
    }
    if(arr[n] === target){
        return n;
    }
    return searchElement(arr,n-1,target);
}

// let arr=[1,23,43,11,45];
//  let max = arr[0];
// let ans=maxElement(arr,1,max);
// console.log(ans);

function maxElement(arr , i,max){
    if( i === arr.length){
        return max;
    }
    if( arr[i] > max){
        max = arr[i];
    }
    return maxElement(arr , i+1,max);
}

// let arr = [1,2,3,2,3,4,5];
// let target = 2;
// firstAndLastOccurence(arr,target);

function firstAndLastOccurence(arr,target){
    let first = -1;
    let last = -1;

    for(let i=0;i<arr.length;i++){
        if(target === arr[i]){
            first=i;
            break;
        }
    }
    for(let j=arr.length-1;j >= 0;j--){
        if(target === arr[j]){
            last=j;
            break;
        }
    }

    console.log(first , last);


}


// .....Advance Problem......

// let str = ")(";
// let ans=[];
// let check=checkParenthesis(str , ans);
// console.log(check);

function checkParenthesis(str,ans){

    for(let i=0 ; i < str.length ; i++){
        if(str[i] === "("){
            ans.push("(");
        }
        else if(ans.length >= 1){
            if(str[i] === ")"){
                ans.pop();
            }
        }
        else{
            if(str[i] === ")"){
                ans.push(")");
            }
        }
    }
    if(ans.length === 0){
        return "valid";
    }else{
        return "invalid";
    }
}



