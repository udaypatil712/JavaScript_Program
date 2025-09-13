let str1="tac";
let str="nbm";

 let map=new Map();

 for(let i=0;i<str1.length;i++){
   if(map.has(str1[i])){
    map.set(str1[i] , map.get(str1[i]) + 1);
   }else{
    map.set(str1[i] , 1);
   }
 }
 console.log(map);

 let map1=new Map();

for(let i=0;i<str.length;i++){
   if(map1.has(str[i])){
    map1.set(str[i] , map1.get(str[i]) + 1);
   }else{
    map1.set(str[i] , 1);
   }
}
console.log(map1);

if(str.length === str1.length){
    for(let i =1 ;i <= str.length; i++){
        if(map.get(i) !== map1.get(i)){
            console.log(false);
            break;
        } 
    }
    console.log(str);

}else{
    console.log(false);
}