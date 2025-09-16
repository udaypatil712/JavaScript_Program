 let para = "Hello how are you How was your day";
//  let arr=para.trim().toLowerCase().split(" ");
//  frequencyOfWords(arr);

//  function frequencyOfWords(arr){
//     let map = new Map();

//     for(let i=0;i<arr.length;i++){

//     if(map.has(arr[i])){
//         map.set(arr[i] , map.get(arr[i]) + 1);
//     }else{
//         map.set(arr[i] , 1);
//     }

//     }
//     let obj={};
//     for(let key of map.keys()){
//     obj[`${key}`] = map.get(key);
//     }
//     console.log(obj);
//  }


// let arr=[1 ,2, 4, 5, 7];
// let arr2=[5, 6, 3, 4, 8];
// let target=9;
// sumOfElementTarget(arr,arr2,target);

function sumOfElementTarget(arr,arr2,target){

    let map = new Map();
    let find="";
    for(let i = 0 ; i < arr2.length;i++){
        map.set(arr2[i] , 0);
    }

    for(let i=0;i<arr.length;i++){
        let temp = target - arr[i];
        if(map.has(temp)){
             find+=arr[i]+","+temp+" ";
        }
    }
    console.log(find);
}


let arr=[1 ,1, 2, 2, 2, 1];
maximumDistance(arr);

function maximumDistance(arr){

    // let map = new Map();
    // let max=0;
    // for(let i = 0 ; i < arr.length; i++){
    //     if(map.has(arr[i])){
    //          map.get(arr[i]).last=i;
    //     }else{
    //         map.set(arr[i] , {first : i , last : i});
    //     }
    // }
    // console.log(map);   
    
    let map = new Map();
    let max=0;
    for(let i=0 ; i< arr.length;i++){
        if(map.has(arr[i])){
            let dis = i - map.get(arr[i]);
            if(max < dis){
                max=dis;
            } 
        }
        else{
            map.set(arr[i] , i);
        }
    }
    console.log(max);
           
}

 









