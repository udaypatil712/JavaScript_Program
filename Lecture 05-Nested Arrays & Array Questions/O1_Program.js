// let value=26 + "32" * " "/17;
// console.log({value}); // 26

// let space =" ";
// console.log(space*1); // 0


// let arr=[[1,2,3],[4,5,6],[7,8,9]];
// let ans=0;
// for(let i=0;i<arr.length;i++){ 
//     ans+=arr[i][i]; // O(n)

//     // for(let j=0;j<arr[i].length;j++){  //O(n*n)
//     //     if( i === j){
//     //         sum+=arr[i][j];
//     //     }
//     // }
//     // ans+=sum;

// }
// console.log(ans);


// let ans=0;   // O(n) , O(1)
//  let j=arr.length-1; //[i][n-i-1]
// for(let i=0;i<arr.length;i++){
//     ans+=arr[i][j];
//     j--;
// }
// console.log(ans);


let arr=[[1,2,3,1],[4,5,6,1],[7,8,9,1]];
// let ans=columnOddSum(arr);
// console.log(ans);

columnOddPrint(arr);


function columnOddSum(arr){
let tsum=0;
  for(let i=0;i<arr.length;i++){
    let sum=0;
    for(let j=0;j<arr[0].length;j++){
        if(j%2 !== 0){
            sum+=arr[i][j];
        }
    }
    tsum+=sum;
  }
  return tsum;
}

function columnOddPrint(arr){
    for(let i=0; i<arr[0].length;i++){ // column is constant here that time we wwill write outer for loop
        for(let j=0;j<arr.length;j++){ // and row is changeble then write inner for loop
            if(i % 2 !== 0){
                console.log(arr[j][i]);
            }
        }
    }
}