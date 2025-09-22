let arr=[1,4,6,10,2,5,12];
console.log(search(arr,0,arr.length-1));

function search(arr,low,high){
    if(low == high){
        return [arr[low]];
    }
    let mid=Math.floor((low+high)/2);
    
    let leftarr=search(arr,low,mid);
    let rightarr=search(arr,mid+1,high);
    
    return mergeArrSort(leftarr,rightarr);
}
 
function mergeArrSort(leftarr,rightarr){
 
    let i=0;
    let j=0;
    let k=0;
    let ans=new Array(leftarr.length+rightarr.length);

    while(i<leftarr.length && j<rightarr.length){

        if(leftarr[i] < rightarr[j]){
            ans[k]=leftarr[i];
            i++;
        }else{
            ans[k]=rightarr[j];
            j++;
        }
        k++;
    }
    while(i<leftarr.length){
        ans[k]=leftarr[i];
        i++;
        k++;
    }
    while(j<rightarr.length){
        ans[k]=rightarr[j];
        j++;
        k++;
    }
    return ans;
}
