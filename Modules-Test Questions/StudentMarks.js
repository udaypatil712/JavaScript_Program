let marks=20;
studentMarks(marks);
function studentMarks(marks){
    switch(true){
        case (marks  > 90) :
            console.log("Excellent..");
            break;
        case (marks > 80) :
            console.log("Good..");
            break;
        case (marks > 70) :
            console.log("Fair..");
            break;
        case (marks <= 60) :
            console.log("Fail...");
            break;
    }
}