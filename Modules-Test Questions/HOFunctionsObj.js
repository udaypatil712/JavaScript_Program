const students = [
  { name: "Ravi", marks: [45, 55, 60] },
  { name: "Anjali", marks: [30, 40, 35] },
  { name: "Neha", marks: [70, 80, 90] },
  { name: "Aman", marks: [50, 45, 55,323454] }
];

let filterOut = students.filter((val,ind,arr) =>{
    let n = val.marks.length;
    let sum=0;
    for(let i of val.marks){
      sum+=i;
    }
    let ave = sum/n;
    return ave >= 50;
   
});
console.log(filterOut);
let printName = filterOut.map((val,ind,arr)=> val.name.toUpperCase());
console.log(`"`+printName.join(",")+`"`);