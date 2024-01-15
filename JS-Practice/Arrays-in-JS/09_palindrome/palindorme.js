const palindromes = function (userInput) {
    let start = 0;
    let end = userInput.length - 1;
    userInput = userInput.toLowerCase();

    while(start <= end){
        if(userInput[start++] === " " || userInput[end--] === " ") continue;
        else if(userInput[start++] !== userInput[end--]) return false;
        start++; end--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;