{
    let n=160;
    for(let i=1;i<=n;i++){
        let lastdigit;
        let temp=i;
        let sum=0;
        let digit=i.toString().length;
        while( temp > 0){
            lastdigit = temp % 10;
            let arm=1;
            for(let j=1;j<=digit;j++){
                arm=arm*lastdigit;
            }
            sum+=arm;     
            temp=Math.floor(temp/10);
        }
        if(i === sum){
            console.log(i);
        }
    }
}