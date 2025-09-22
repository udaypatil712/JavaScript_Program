let arr = [23, 51, 6, 2, 4]; //[2,1,2,1,2,3];
      
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
        for(let j=0;j<arr.length-1;j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[i] = arr[j+1];
                arr[j+1] = temp;
            }
            console.log(arr)
    }
    console.log('........')
}
    console.log(arr);

}


 

