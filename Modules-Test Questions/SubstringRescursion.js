let str="banana";
let substringArr=[];
// printSubString(str,0,0);
// console.log(substringArr);


function printSubString(str,i,j){
    if(i === str.length){
        return;
    }
    if(j <= str.length){
        if(j > i){
            substringArr.push(str.substring(i,j));
        }
        printSubString(str,i,j+1);
    }else{
        printSubString(str,i+1,i+1);
    }

}