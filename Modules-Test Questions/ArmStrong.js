let m=0,n=160;
armStrongNumber(m,n);

function armStrongNumber(m , n){
    for(let i=m ;i<=n ; i++){
        let temp=i;
        let lastDigit;
        let sum=0;
        let arm =1;
        let digit=i.toString().length;
            while(temp > 0){
            lastDigit=temp%10;
            for(let j=1;j<=digit;j++){
                arm=lastDigit**digit;
            }
            sum+=arm;
            temp=Math.floor(temp/10);

            }
        if(sum === i){
            console.log(i);
        }

    }
}
  
