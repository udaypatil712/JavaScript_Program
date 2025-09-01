// let StudentObj={
//     name : "xxx",
//     age : 23,
//     gender : "male"
// };

// // update the gender
// StudentObj.gender="female";
// console.log(StudentObj);

// //delete property

// let personObj={
//     name : "raj",
//     age : 18,
//     city : "pune"
// };
// personObj.hobby="singing";
// personObj.city="pachora";
// console.log(personObj)


//  let employeeObj={
//     name : "uday",
//     company : "google",
//     address:{
//         city :"USA",
//         address1:"new york",
//         houseNo:"2607"
//     }
//  }
//  console.log(employeeObj.address.city);


//  let studentObj1={
//     name : "vivek",
//     age : 14,
//     address:{
//         city :"USA",
//         address1:"new york",
//         houseNo:"2607"
//     }
//  },
// studentObj2={
//     name : "vivekkk",
//     age : 14,
//     address:{
//         city :"USA",
//         address1:"new york",
//         houseNo:"2607"
//     }
//  }
// let studentArr =[
//      studentObj1,studentObj2
// ];
// console.log(studentArr[0].name);


// let classroomArr=[
//     {
//         name : "uday",
//         age : 123,
//         gender : "male",
//         address : {
//             addressLine1 : "vhbhvh",
//              addressLine1 : "pvhv",
//              city : "pune"
//         }
//     },

//     {
//         name : "vivek",
//         age : 23,
//         gender : "male",
//         address : {
//             addressLine1 : "vhbhvh",
//              addressLine1 : "pvhv",
//              city : "pachora"
//         }
//     },

//     {
//         name : "rupesh",
//         age : 12,
//         gender : "male",
//         address : {
//             addressLine1 : "vhbhvh",
//              addressLine1 : "pvhv",
//              city : "pune"
//         }
//     }

// ];

 
// for(let i=0;i<classroomArr.length;i++){
//     if(classroomArr[i].address.city === "pune"){
//         console.log(classroomArr[i].name ," ",classroomArr[i].age," ",classroomArr[i].address.addressLine1);
//     }
// }




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
 
 