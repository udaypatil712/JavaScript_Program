let StudentObj={
    name : "udiii",
    age : 23,
    gender : "male"
};

console.log(StudentObj.age);

 let studentObj1={
    name : "vivek",
    age : 14,
    address:{
        city :"USA",
        address1:"new york",
        houseNo:"2607"
    }
 },
studentObj2={
    name : "vivekkk",
    age : 14,
    address:{
        city :"USA",
        address1:"new york",
        houseNo:"2607"
    }
 }
let studentArr =[
     studentObj1,studentObj2
];
for(let i=0;i<studentArr.length;i++){
    console.log(studentArr[i].name , " " ,studentArr[i].address.address1)
}


let portfolio ={
    name : "uday",
    skills : ["java","javaScript","mern"],
    showSkills: function showSkills(){
        for(let i=0;i<this.skills.length;i++){
            console.log(this.skills[i]);
        }
    },
    addNewSkills: function addNewSkills(){
        this.skills[this.skills.length]="html";
        this.skills.length++;    
    }
}
portfolio.addNewSkills();
portfolio.showSkills();