// let str ="uday patil";
// camelCase(str);
function camelCase(str){
    let res="";
    for(let i=0;i<str.length;i++){
        let space=" ";
            if(space === str[i]){
                res+=str[i+1].toUpperCase();
                i++
            }else{
                res+=str[i];
            }
    }
    // console.log(res);
}


// snake_case(str);
function snake_case(str){
    let res="";
    for(let i=0;i<str.length;i++){
            if(str[i] === " "){
                res+="_";
            }else{
                res+=str[i];
            }
    }
    // console.log(res);
}



// let str ="madamsdf";
// reverseString(str);

function reverseString(str){ //o(n) , O(n)

    let rev=str;
    let arr=str.split("");

    console.log(arr);
    let start=0;
    let end=str.length-1;
    while(start <= end){
        let temp=arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    str=arr.join("");
    return str;

    // second approch for palindrome...
    // if(str === rev){
    //     console.log("is palindrome...")
    // }else{
    //     console.log("is not palindrome..")
    // }
}


// let str="11";
// palindrome(str);

// let str1="madam";
// let ans =palindrome(str1);
// console.log(ans);

function palindrome(str1){ //O(n) , O(1)

    // third approach this will give me in boolean answer
    let original=reverseString(str);
    return str1 === original;


    // let s=0; 
    // let e=str.length-1;
    //    while (s<=e) {
    //         if(str.charAt(s) != str.charAt(e)){
    //            console.log(" is not palindrome " ,str);
    //            break;
    //         }
    //         else{
    //             console.log("is plaindrome ",str);
    //         }
    //         s++;
    //         e--;
    //     }

}

// let word="udagh ghsdgsh nsjbjshc";
// countWord(word);
function countWord(str){ //O(n) O(1)
    let count=0; 
    for(let i=0;i<str.length;i++){
        if(" " === str[i]){
            count++;
        }
    }
    console.log(count+1);
    console.log(str.trim().split(" ").length);
}

// let words="uday ";
// maxWord(words);

function maxWord(word){ //o(n) , O(n)
    let arr=word.split('');
    console.log(arr);

    let max=arr[0];
    
    for(let i=0;i<arr.length;i++){
        if(max < arr[i]){
            max=arr[i];
        }
    }
    console.log(max);
}


// let string="abcABC2";
// changeCase(string);
function changeCase(string){
    let arr=string.trim().split(''); // ['a', 'b', 'c']
    console.log(arr);

    for(let i=0 ; i<arr.length;i++){
        if(arr[i] >= 'a' && arr[i] <= 'z'){
            arr[i]=arr[i].toUpperCase();
        }else if(arr[i] >= 'A' && arr[i] <= 'Z'){
            arr[i]=arr[i].toLowerCase();
        }else{
            arr[i]=arr[i];
        }
    }
    str=arr.join(''); // A B C a b c 2 with one space 
    console.log(str);
}


// let word="i'm uday patil";
// reverseWord(word);
function reverseWord(word){  // O(n) , O(n)
    let arr=word.trim().split(" ");
    for(let i=0;i<arr.length;i++){
        let temp="";
        for(let j=arr[i].length-1;j>=0;j--){
            temp+=arr[i][j];
        }
        arr[i]=temp;
        
    }
    word=arr.join(' ');
    console.log(word);
   
}

// let str="we promptly judged antique ivory buckles for the next prize";
// allAlphabhetPresent(str);
 

function allAlphabhetPresent(str){
    let arr=str.split(' ').join('').trim();

    console.log(arr[0]);
    let map = new Map();
    for( let i=97 ; i<=122 ; i++){
        let ch = String.fromCharCode(i);
       map.set(ch, 1);
    }
    console.log(map);
    for(let i = 0 ; i<arr.length;i++){
        let ch = arr[i];
        if(map.has(ch)){
            map.set(ch,map.get(ch) + 1);
        }
    }
    console.log(map);
    let pangram=true;
    for(let [key , value] of map.entries()){
        if(value <= 1){
            pangram=false;
        }
    }
    if(pangram){
        console.log("pangram..")
    }else{
        console.log("is not pangram..");
    }
}


// let str="abc";
// let arr=["ab" , "abd" , "cacb" , "cabef"];
// goodString(str,arr);
// function goodString(str,arr){
     
//     let arr2=str.split('');
//     console.log(arr2);

//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr[i].length;j++){
//             if(arr2.includes(j)){

//             }
//         }
//     }

// }


// let str="IAmJavaProgrammer";
// inverseCamelCase(str);
function inverseCamelCase(str){
    let word="";
    for(let i=0;i<str.length;i++){
        if( str[i]  >= 'A' && str[i] <= 'Z'){
            console.log(word);
            word=str[i];
        }else{
            word+=str[i];
        }
    }
    console.log(word);

}


// let str="abc";
// let arr=[1,0,2];
// // console.log(str[4]);
// shuffleString(str,arr);

function shuffleString(str,arr){
    let res=[];
    for(let i=0;i<str.length;i++){
       res[arr[i]]=str[i];
    }
    console.log(res.join(''));
}


// let str="how are you";
// reverseStringWord(str);
function reverseStringWord(str){
    let arr=str.trim().split(" ");
    console.log(arr);

    let s=0;
    let e=arr.length-1;

    while(s<=e){
        let temp=arr[s];
        arr[s]=arr[e];
        arr[e]=temp;
        s++;
        e--;
    }
    console.log(arr.join(' '))
}
 

let arr=[6,-4,3,2,-3];

for(let  i=0;i<arr.length;i++){
    let subArray="";
    let sumSub=0;
    let temp=0;
    for(let j=i;j<arr.length;j++){
        subArray+=arr[j]+' ';
        sumSub+=arr[j];
        console.log(subArray);
        console.log(sumSub);
        temp=sumSub;
    }
        
}


