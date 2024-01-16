function isLetter(str){
    return str.length === 1 && str.match(/[a-z]/i);
}
const palindromes = function (userInput) {
    let start = 0;
    let end = userInput.length - 1;
    userInput = userInput.toLowerCase();

    while(start <= end){
        if(userInput[start++] === " ") continue;
        else if(userInput[end--] === " ") continue;
        else if(!isLetter(userInput[start++])) continue;
        else if(!isLetter(userInput[end--])) continue;
        else if(userInput[start] !== userInput[end]) return false;
        start++; 
        end--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;