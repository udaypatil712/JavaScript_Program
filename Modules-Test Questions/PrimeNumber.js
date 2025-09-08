let n=1231;
primeNumber(n);
function primeNumber(n){
    let isPrime=true;
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i === 0){
            console.log(i);
            isPrime=false;
        }
    }
    if(isPrime){
        console.log("number is Prime..");
    }else{
        console.log("Number is not prime..");
    }
}