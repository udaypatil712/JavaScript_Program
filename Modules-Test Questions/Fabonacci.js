let n = 8;
let ans = fibo(n);

if(n === ans){
	console.log(true);
}else{
	console.log(false);
}

function fibo(n){
	if(n < 2){
		return n;
	}
	return fibo(n-1) + fibo(n-2);
 }