const sumAll = function(start , end) {
    let sum = 0;
    while(start  <= end){
        sum += start;
        start++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;