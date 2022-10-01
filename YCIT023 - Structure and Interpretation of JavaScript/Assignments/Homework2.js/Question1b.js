// YCIT023
//             Assignment 2
//                             Marie-Ange Pesant



// QUESTION 1.b

//INFOS
nameStudent = "James Doe";
console.log("The name of the student is " + nameStudent)
let letterGradeAPlus = 4.3;
let letterGradeA = 4.0;
let letterGradeAMinus = 3.7;
let letterGradeBPlus = 3.3;
let letterGradeB = 3.0;
let letterGradeBMinus = 2.7;
let letteGradeC = 2.0;
let letterGradeF = 0;
let credits = 4;
let totalCourses = 4;


// 1)
let qualityPointsCourse1 = letterGradeAPlus*credits
console.log(("Quality points for course 1 : ") + qualityPointsCourse1);

let qualityPointsCourse2 = letterGradeBPlus*credits
console.log(("Quality points for course 2 : ") + qualityPointsCourse2);


let qualityPointsCourse3 = letterGradeA*credits
console.log(("Quality points for course 3 : ") + qualityPointsCourse3);

let qualityPointsCourse4 = letterGradeF*credits
console.log(("Quality points for course 4 : ") + qualityPointsCourse4);

// 2)
let totalCredits = totalCourses*credits
console.log("Total credits for the term : " + totalCredits);

// 3)
let qualityPointsTotal = qualityPointsCourse1 + qualityPointsCourse2 + qualityPointsCourse3 + qualityPointsCourse4
console.log("Total the quality points for the term : " + qualityPointsTotal);

// 4) & 5)
let GPA = (qualityPointsTotal/totalCredits);
console.log("GPA for the term : " + GPA);

// END




