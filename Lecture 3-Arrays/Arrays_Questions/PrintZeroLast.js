{
    let arr=[1,5,0,2,3,0,6,7];
    let lastIndex=0;
    for(let i of arr){
        if(i != 0){
          arr[lastIndex]=i
          lastIndex++;
        }
    }
    for(let i=lastIndex;i<arr.length;i++){
        arr[i]=0;
    }
    console.log(arr.join())
}