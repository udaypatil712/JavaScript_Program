{
    // let arr=[[1,2,3],[4,5,4],[1,2,3],2];
    // let ans=checkIsArray(arr);
    // console.log(ans);   

    // function checkIsArray(arr){
    //     for(let i=1 ;i<arr.length;i++){
    //         if(arr[i].length!==arr[i-1].length){
    //             return false;
    //         }   
    //     }
    //     return true;
    // }

    let arr=[[1,2,3],[1,2,3]];
    let ans=multiple(arr);
    console.log(ans);


    function multiple(arr){
        let sum=0;
        for(let i=0;i<arr.length;i++){
            for(let j=0;j<arr[i].length;j++){
                sum+=arr[i][j];
            }
        }
        return sum;
    }
 
    
}