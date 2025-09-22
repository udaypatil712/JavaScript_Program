let n=5;
console.log(print(n));

function print(n){
    if(n < 2){
        return n;
    }
    let p = print(n-1);
    let p2 = print(n-2);
    return p * p2 + 1;
}

// output => 7
/*

print(5)
├── print(4)
│   ├── print(3)
│   │   ├── print(2)
│   │   │   ├── print(1) → 1
│   │   │   └── print(0) → 0
|   |   |
│   │   │      return 1*0+1 = 1
│   │   │ 
│   │   └── print(1) → 1
│   │       return 1*1+1 = 2
│   │  
│   └── print(2)
│       ├── print(1) → 1
│       └── print(0) → 0
|
│          return 1*0+1 = 1
│       return 2*1+1 = 3
|
├── print(3)
│   ├── print(2)
│   │   ├── print(1) → 1
│   │   └── print(0) → 0
│   │      return 1*0+1 = 1
│   └── print(1) → 1
│      return 1*1+1 = 2
return 3*2+1 = 7

*/