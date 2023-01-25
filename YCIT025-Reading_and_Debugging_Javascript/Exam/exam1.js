/* 

Question 1 ~ ABOUT GIT

    In the various stages of globalThis, in which stages is your code considered to be tracked? 
        staging area, local repository, remote repository


Question 2

    Which of the following is not a benefit of GIT technologies?
        It optimizes code

Question 3

    We can commit code without having to explicitly add it first?
        True

Question 4

    A repository hosted by Bitbucket uses different commands and procedures to manage GIT content?
        False

Question 5

    To create a new, blank repository locally, we can do the following
        init command

Question 6

    We can create more than one branch at a time
        True

Question 7

    To set your name for identification for your current repository only you write this :
        git config user.name = "Name"

Question 8

    What is the equivilent of:
    function sumValues(a, b) {
    return a + b; }
         sumValues = (a, b) => a + b;

Question 9

    The following data is considered to be what, primarily, as spoken about in class.
    (dr:"Doctor",ms:Madam,mr:"Sir")
        A dictionary

Question 10

    The following data can be considered what, according to our discussions in class? 
    {first:"Mary, last:"Dubois",age:"45"}
        JSON

Question 11

    Suppose we have a function like:
    function abc() {return "hello"; }
    What will be the output, when running the console.log(abc);?
        [Function: abc ]

Question 12

    A function should be defined with "const"
        True

Question 13

    What is another name for a function, which specifically does not return any values
        sub[ -][0,1]routine || forEach

Question 14

    Arguments are the actual values passed into a function
        True

Question 15

    An object can contain a function within it
        True

Question 16

    The function called with a "forEach" statement can't return a value
        True

Question 17

    The following statement will break the current loop and then resume it at the next iteration
        Continue

Question 18

    The parenthesis structure used for "A collection of objects" looks like:
       [ {}, {} ] 

Question 19

        A lambda expression is represented by the () brackets
            False =>

Question 20

    We can add a new attribute pragmatically to an object
        True

Question 21

    Given the following (age is in years, odometer is in km)
    const car {
    brand: "Honda",
    model: "CRV",
    age: 4,
    odometer: 23456,
    x
    };
    Create a function within the car object which returns the number of kilometers that this car travels per year
        const car {
        brand: "Honda",
        model: "CRV",
        age: 4,
        odometer: 23456,
        kmpy: function() {return this.odometer / this.age; }
        };

        console.log(car.kmpy());

Question 22

    You would like to filter the following records by studetns who have a GPA of over 3 and are graduate students (type G). Please write a line of code that sets a variable called "goodStanding" to the results of the records that much criteria.
    const studentGPAs = [
        { studentNumber: 1, gpa: 3.0, type: "G"},
        { studentNumber: 2, gpa: 3.4, type: "U"},
        { studentNumber: 3, gpa: 2.9, type: "G"},
        { studentNumber: 4, gpa: 3.2, type: "U"},
    ];
            a)
            const goodStanding = studentGPAs.filter( s => s.type == "G" && s.gpa >= 3.0 );

            console.log(goodStanding);

            b)

            function printResult(val)
            {
                console.log(`Graduate student number ${val.studentNumber) has a GPA of ${val.gpa}.`);

            }
            goodStanding.forEach(printResult);


Question 23

    Given :
    const r1 = [1,5,3];
    let total = r1.reduce((acc, val) => { return acc + val; }, 0);
            First set our accumulator to zero
            Are there any items left in the list?
            Perform an ddition with the first value of the array, and the accumulator
            Place the previous value calcultaed in the accumulator
            Repeat this for every remaining value in the array
            At the end of the process, return the result

Question 24

    Explain why you need to use "pull" command when working on a team using GIT
            if someone eleses has done changes you will need to do pull to retrace the modification

*/
