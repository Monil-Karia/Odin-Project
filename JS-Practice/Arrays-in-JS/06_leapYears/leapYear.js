const leapYears = function(userYear) {
    if(userYear % 4 === 0 && userYear % 100 !== 0) return true;
    else if(userYear % 400 === 0) return true;
    else return false;
    //One Liner Ans : return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

// Do not edit below this line
module.exports = leapYears;