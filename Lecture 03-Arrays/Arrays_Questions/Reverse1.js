{
    let arr=[1,2,3,4];
    reverse(arr);

    function reverse(arr){
        let arr1=[];
        while(arr.length>0){
            let n=arr.pop();
            arr1.push(n);
        }
        console.log(arr1);
    }
}