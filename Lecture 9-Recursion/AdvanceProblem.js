// let str="()())(";
//  let count=0;
// console.log(checkValidORNot(str,count));

function checkValidORNot(str,count){

    for(let i=0;i<str.length;i++){
    if(str[i] === "("){
        count++;
    }else{
        if(count > 0){
            count--;
        }else{
             return false;
        }
    }
}
    if(count !== 0){
        return false;
    }else{
        return true;
    }
}

// let str="";
// let ans=[];
// let count=0;
// let n=4;
// printValidBracket(str,ans,count,n,0);
// console.log(ans);

function printValidBracket(str,ans,count,n,i){
    if(count < 0){
        // return;
    }
    if(n === i){
        

        // if(count === 0){
        //     ans.push(str);
         
        // }
        //    return;
    }
    printValidBracket(str+"(" , ans , count+1 , n , i+1);
    printValidBracket(str+")" , ans , count-1 , n , i+1);

}


// let str="abc";
// console.log(str);
// swapping(str);

function swapping(str){
    let arr=str.trim().split('');
    console.log(arr);

    let s=0
    let e=1;

    while(s<e){

    }
  
      console.log(arr);
    

}
