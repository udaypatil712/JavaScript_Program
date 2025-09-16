{

    let binaryNumber="101";
    let decimal=0;
    let count =0;
    for(let i=binaryNumber.length-1;i>=0;i--){

         decimal+=Number(binaryNumber.charAt(i))*2*count;
        count++;
    }
    console.log(decimal);

}