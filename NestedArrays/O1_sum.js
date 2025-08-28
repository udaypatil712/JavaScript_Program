{
    let arr =[[1,2,3],[2,3,4],[4,5,6]]
 let ans=1;
    for(let row=0;row<arr.length;row++){
        let Rsum=0;
        for(let col=0;col<arr[row].length;col++){
            Rsum+=arr[row][col];
        }
        ans*=Rsum;

    }
    console.log(ans);

    //     for(let row=0;row<arr.length;row++){
    //     let Csum=0;
    //     for(let col=0;col<arr[row].length;col++){
    //         Csum+=arr[col][row];
    //     }
    //     console.log("row sum",Csum);

    // }

    
    // let arr =[[1,2,3],[2,3,4],[4,5,6]]
//  let sum2=0;
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr[i].length;j++){
//             if(i===j){
//                 sum2+=arr[i][j];
//             }
//     }
// }
//     console.log(sum2)











}