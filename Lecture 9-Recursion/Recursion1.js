// let n=5;
// console.log(fact(n));

function fact(n){
    if(n === 0){
        return 1;
    }
    return n * fact(n-1);
}

// let n=10;
// print(n);

function print(n){
    if(n === 0){
        return;
    }
    console.log(n); // 10 9 8.....1
    print(n-1);
    console.log(n); // 1 2 3.....nth
}

  
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


// let n=5;
// console.log(printSumNatural(n));

function printSumNatural(n){
    if(n <= 0){
        return 0;
    }
    return n + printSumNatural(n-1);
}


// let a=15;
// let b=25;
// console.log(GCDOfNumber(a,b));

function GCDOfNumber(a,b){
    while( a != 0){
        let temp = a;
        a = b % a;
        b = temp;
    }
    return Math.abs(b); // for negative number..
}

// let a=15;
// let b=25;
// console.log(GCDOfNumberRucursion(a,b));

function GCDOfNumberRucursion(a,b){
    if(a != 0){
        return b;
    }
    return GCDOfNumberRucursion(b % a , a);
}

// let n=5;
// console.log(n);
// console.log(fibonaciNumber(n));

function fibonaciNumber(n){
    if (n < 2) {
            return n;
        }
    return fibonaciNumber(n - 1) + fibonaciNumber(n - 2);
}

// console.log(calPower(2,10));

function calPower(a,b){
    let power=1;
    for(let i =1;i<=b;i++){
        power*=a;
    }
    return power;
}


// console.log(powerRecursion(2));

// function powerRecursion(a){
 
// }

// let str="madam";
// console.log(checkPalindrome(str,0, str.length-1));

function checkPalindrome(str , s , e){ 
    if(s >= e){
        return "Yes";
    }
    if(str[s] !== str[e]){
        return "NO";
    }
    return checkPalindrome(str,s+1,e-1);
}

