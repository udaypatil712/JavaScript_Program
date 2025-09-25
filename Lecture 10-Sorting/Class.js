let arr = [3,5, 6, 2, 4]; //[2,1,2,1,2,3];
      
// selectionSort(arr);

BubbleSort(arr)

function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] > arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            console.log(arr)
    }
    console.log('........')
}
    console.log(arr);

}

function BubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            console.log(arr)
    }
    console.log('........')
}
    console.log(arr);

}


// let arr=[5,4,3,2,1];
// console.log(quickSort(arr,0,arr.length-1));

function quickSort(arr,low,high){
    if(low >= high){
        return arr;
    }
 
    let s=low;
    let e=high;

    let mid=Math.floor((s+e)/2);
    let p=arr[mid];
   

    while(s<=e){
        while(arr[s] < p){
            s++;
        }
        while(arr[e] > p){
            e--;
        }
        if(s<=e){
            let temp = arr[s];
            arr[s] = arr[e];
            arr[e] = temp;
            s++;
            e--;
        }
        
    }
    // console.log(s);
    // console.log(e);
    // console.log(mid);
    // console.log(arr);
    quickSort(arr,low,e); // LHSSort
    quickSort(arr,s,high); // RHSSort
    return arr;
}
 
 


 

