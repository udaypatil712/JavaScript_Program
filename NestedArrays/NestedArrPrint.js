{
    let arr=[1,2,[1,2,3],4,5,[2,3,4]];
    let ans=printArr(arr);
    console.log(ans);

    // first apporach by using undefined (in that array any single element is present then you  to length of that singel eelemnet then they will give you undefined)
    // for(let i=0;i<arr.length;i++){
    //     if(arr[i] !== undefined){
            //  for(let j=0;j<arr[i].length;j++){
            //     arr[i][j]=arr[i][j]
            // }  
    //     }
    //     arr[i]=arr[i]
    // }
    // console.log(arr)

    
    // second approach by using Array.isArray() 
    function printArr(arr){
         for(let i=0;i<arr.length;i++){
            if(!Array.isArray(arr[i])){
                arr[i]=arr[i]
            }
            else{
                for(let j=0;j<arr[i].length;j++){
                    arr[i][j]=arr[i][j];
                }
            }
            
        }
        return arr;
    }


}
 