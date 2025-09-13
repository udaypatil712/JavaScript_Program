// let str="qwertyuiopasdfghjklzxcvbnm";
// let str1="veamhjsgqocnrbfxdtwkylupzi";
// let text="FpcpEbb2019";
// console.log(text.toLocaleUpperCase());
// convertKeyboardLayout(str,str1,text);


function convertKeyboardLayout(str,str1,text){
    let map = new Map();

    for(let i=0;i<str.length;i++){
        map.set(str[i],str1[i]);
    }
     for(let i=0;i<str.length;i++){
        map.set(str[i].toUpperCase(),str1[i].toUpperCase());
    }
    let temp="";
    for(let i=0;i<text.length;i++){
        if(map.has(text[i])){
            temp+=map.get(text[i]);
        }else{
            temp+=text[i];
        }
    }
    console.log(temp);
}


