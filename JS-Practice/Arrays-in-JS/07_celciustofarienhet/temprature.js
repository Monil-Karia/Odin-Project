const convertToCelsius = function(temprature) {
    let ans = (temprature - 32) * 5/9;
    return Number(ans.toFixed(1)); //return uptodecimal places 1
};

const convertToFahrenheit = function(temprature) {
    let ans = (temprature * 9/5) + 32;
    return Number(ans.toFixed(1)); //return uptodecimal places 1
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};