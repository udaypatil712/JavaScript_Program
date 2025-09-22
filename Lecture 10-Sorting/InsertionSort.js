let arr=[5,4,3,2,1];
let k=3;

// insert(arr);
// insertionSort(arr);
insertionSort2(arr);


//insert the last element At there correct index
function  insert(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i] > arr[arr.length-1]){
            let temp = arr[i];
            arr[i] = arr[arr.length-1];
            arr[arr.length-1]=temp;
        }
    }
    console.log(arr);
}

function insertionSort(arr){  // Worse Case O(n*n)
    for(let i=0 ; i<arr.length-1;i++){
        for(let j=0;j<i+1;j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            console.log(arr);
        }
        console.log(".......")
    }
    console.log(arr);
}

function insertionSort2(arr){ // Base Case O(n*n) 
    for(let i =0 ;i<arr.length-1;i++){
        for(let j=i+1;j>0;j--){
            if(arr[j] < arr[j-1]){
                let temp=arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            }else{
                break;
            }
            console.log(arr);
        }
        console.log("......");
    }
}
  

