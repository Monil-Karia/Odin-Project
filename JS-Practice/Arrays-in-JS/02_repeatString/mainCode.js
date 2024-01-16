const repeatString = function(name , repeat) {
    let newString  = "";
    if(repeat < 0) return "ERROR";
    while (repeat){
        newString += name;
        repeat--;
    }
    return newString;
};

module.exports = repeatString; 