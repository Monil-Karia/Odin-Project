let isString = (str) => typeof str === 'string' || str instanceof String;
// function swap(a,b){
//     a = a ^ b;
//     b = a ^ b;
//     a = a ^ b;
// }
const sumAll = function(start , end) {
    if(start < 0 || end < 0 || isString(start) || isString(end) || !Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
    if(start > end) [start , end] = [end , start];
    let sum = 0;
    while(start  <= end){
        sum += start;
        start++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;