let card = "4250 1234 3548 2345";
card = card.trim().split(" ").join("");

let hideNum = [];
for(let i = 0; i < card.length; i++){
    if(i < card.length-4){
        hideNum.push("*");
    }else{
        hideNum.push(card[i]);
    }
}
console.log("Balance for credit card " +hideNum.join(""));


// *****
// credit card 3 use less power than this one this one is more heavy
// 1 is the best though
// *****