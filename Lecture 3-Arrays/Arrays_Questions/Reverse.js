let arr=[1,2,3,4];
let ans =reverseArray(arr);
console.log(ans);


function reverseArray(arr){
    let i=0;
    let j=arr.length-1;
    while(i<j){
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        i++;
        j--;
    }
    return arr;
}