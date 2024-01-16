const fibonacci = function(num) {
    num = Number(num);
    let firstNum = 0;
    let  nextNum= 1;
    let finalNum;
    if(num < 0 ) return "OOPS";
    if(num === 0) return 0;
    if(num === 1 ) return 1;
    for(let i =2; i <= num ; i++){
        finalNum = firstNum + nextNum;
        firstNum = nextNum;
        nextNum  = finalNum;
    }
    return finalNum;
};

// Do not edit below this line
module.exports = fibonacci;