const VOTING_AGE = 18;
let candidateAge = 20;
let canVote = false;

// ternary if statement 
// condition ? this value if true : this value if false;

// canVote = candidateAge >= VOTING_AGE ? true : false;

canVote = candidateAge >= VOTING_AGE ;
// right way ^^
console.log(canVote);