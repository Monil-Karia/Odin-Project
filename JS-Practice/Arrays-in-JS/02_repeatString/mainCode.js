const repeatString = function(name , repeat) {
    let newString  = "";
    if(repeat < 0) return "ERROR";
    while ( repeat === 0){
        newString += name;
        repeat--;
    }
    return newString;
};

module.exports = repeatString; 