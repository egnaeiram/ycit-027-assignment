const PASSING_GRADE = 60;

const examGrades = [
    { studentNumber: 1, grade: 78 },
    { studentNumber: 2, grade: 98 },
    { studentNumber: 3, grade: 45 },
    { studentNumber: 4, grade: 59 }
];
//   g is each line above ^^
const passingGrades = examGrades.filter(g => g.grade > PASSING_GRADE);

console.log(passingGrades);
