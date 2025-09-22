// let arr=[-1,-5,-2,-9,5,6,4,23,2,2];
// newSorting(arr);

function newSorting(arr){
    let Narr=[];

    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] < 0){
            Narr.push(Math.abs(arr[i]));
        }
    }
    // console.log(Narr);
    
    let Nmax=Narr[0];

    for(let i =0 ;i < Narr.length ; i++){
        if(Narr[i] > Nmax){
            Nmax=Narr[i];
        }
    }
    // console.log(Nmax);

    let Ntemp= new Array(Nmax+1).fill(0);

    let Nmap = new Map();

    for(let i = 0 ; i < Narr.length; i++){
        if(Nmap.has(Narr[i])){
            Nmap.set(Narr[i] ,Nmap.get(Narr[i]) + 1); 
        }else{
            Nmap.set(Narr[i] , 1); 
        }
    }
    // console.log(Nmap);
    
    for(let [key , value] of Nmap.entries()){
        Ntemp[key]=Nmap.get(key);
    }
    // console.log(Ntemp);

    let Nans = [];
    let n =0
    for(let i = 0 ; i < Ntemp.length ; i++){
        if(Ntemp[i] != 0){
            if(Ntemp[i] > 1){
                Nans[n]=-(i);
                n++;
            }
            Nans[n]=-(i);
            n++;
        }
        
    }
    //  console.log(Nans);

     let Parr=[];

     for(let i  = 0 ;i < arr.length ; i++){
        if(arr[i] >= 0){
            Parr.push(arr[i]);
        }
     }
    //  console.log(Parr);

    let Pmax=Parr[0];
    for(let i=0;i<Parr.length;i++){
        if(Pmax < Parr[i]){
            Pmax=Parr[i];
        }
    }
 
    let Ptemp= new Array(Pmax+1).fill(0);

    let Pmap = new Map();
    for(let i = 0 ; i < Parr.length; i++){
        if(Pmap.has(Parr[i])){
            Pmap.set(Parr[i] ,Pmap.get(Parr[i]) + 1); 
        }else{
            Pmap.set(Parr[i] , 1); 
        }
    }
    // console.log(Pmap);
    
    for(let [key , value] of Pmap.entries()){
        Ptemp[key]=Pmap.get(key);
    }
    // console.log(Ptemp);

    let Pans = [];
    let p =0;
    for(let i = 0 ; i < Ptemp.length ; i++){
        if(Ptemp[i] != 0){
            if(Ptemp[i] > 1){
                Pans[p]=i;
                p++;
            }
            Pans[p]=i;
            p++;
        }
        
    }
    //  console.log(Pans);


    let result=[];
     
     let k=0;
     for(let i = Nans.length-1 ; i>=0 ; i--){
        result[k] = Nans[i];
        k++;
     }

    //  console.log(k);

     for(let i =  0; i < Pans.length ; i++){
        result[k] = Pans[i];
        k++;
     }


     console.log(result);

 
}


let arr=[20,10,30,40,50];
let min=arr[0];
for(let i =0 ;i<arr.length;i++){
    for(let j = i+1; j <arr.length;j++){
       if(arr[i] < arr[j]){
        let diff=arr[j] - arr[i];
        let  dmin=diff;
         if(diff < dmin){
            dmin=diff;
             
         }
      
       }
     
    }
      
}


function insertionSort(arr){  // Worse Case O(n*n)
    for(let i=0 ; i<arr.length-1;i++){
        for(let j=0;j<i+1;j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            console.log(arr);
        }
        console.log(".......")
    }
    console.log(arr);
}