// let n=5;
// console.log(fact(n));

function fact(n){
    if(n === 0){
        return 1;
    }
    return n * fact(n-1);
}

let n=10;
print(n);

function print(n){
    if(n === 0){
        return;
    }
    print(n-1);
    console.log(n)