
   let arr= [
  [1, 2, 3, 4, 5, 6],
  [2, 6, 12, 43, 3, 5],
  [8, 10, 34, 23, 12, 8]
];

reverseOddColumnElement(arr);


function reverseOddColumnElement(arr){    // O(n*n)  , O(n)
    let col=arr[0].length;
    // let row=arr.length;
    // let ans=0;
        for(let j=0;j<col;j++){
            // let sum=0;
            if(j % 2 !== 0){
                    //    for(let i=0;i<row;i++){
                        // console.log(i,j ,"=>" ,arr[i][j]);
                        // console.log(arr[i][j]);
                        // sum+=arr[i][j];
                let n=0;
                let k=arr.length-1;
                while(n<k){
                    let temp=arr[n][j];
                    arr[n][j]=arr[k][j];
                    arr[k][j]=temp;
                    n++;
                    k--;
                }
                        //    }
                        //  console.log(sum)
            }
        
        
        }
     console.log(arr)   
     
}

//.... subArrays ....

let arr1=[1,2,3,4];   // O(n*n) , O(1)
// printSubArrays(arr1);

function printSubArrays(arr1){
    let totalsum=0;
    let target=7;
    for(let i=0;i<arr1.length;i++){
        let subArrays="";
        let sumSubArrays=0;
        for(let j=i;j<arr1.length;j++){
            // subArrays +=arr1[j];
            sumSubArrays+=arr1[j];
            // if(target === sumSubArrays){
            //     subArrays+=arr1[j];
            //     console.log(subArrays);
            // }
            totalsum+=sumSubArrays;     
            // console.log(subArrays);
            //  console.log(sumSubArrays);
        }
        // console.log("--------");
    }
    console.log(totalsum);
}








