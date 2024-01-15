const reverseString = function(userString) {
    let reverseStr = "";
    for(let i = userString.length - 1 ; i >= 0  ; i--){
        if(userString[i] === " ") continue;
        reverseStr += userString[i];
    }
    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;

