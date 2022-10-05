const CREDIT = 4;
let totalQuality = 0;

let courseQualityValue = (grade) => gradePointValue[grade] * CREDIT;

const gradePointValue = {
    "A+" : 4.3,
    "A" : 4.0,
    "A-" : 3.7,
    "B+" : 3.3,
    "B" : 3.0,
    "B-" : 2.7,
    "C" : 2.0,
    "F" : 0,
};

let courses = [
    { courseNumber: 1, letterGrade: "A+" },
    { courseNumber: 2, letterGrade: "B+" },
    { courseNumber: 3, letterGrade: "A" },
    { courseNumber: 4, letterGrade: "F" }
];

for (let c of courses)
{
    c["quality"] = courseQualityValue(c["letterGrade"]);
    console.log(`Quality of course ${c.courseNumber} is ${c.quality}.`);
    totalQuality += c.quality;
}

// total of qualities of all the objects in courses
let qualityTotal = courses.reduce((accumulator, object) => { return accumulator + object.quality; }, 0);

console.log(qualityTotal);

let totalCredit = CREDIT * courses.length;

console.log(`The total credits possible are ${totalCredit},`);

let GPA = qualityTotal / totalCredit;

console.log(GPA.toFixed(1));