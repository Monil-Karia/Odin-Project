const add = function(num1 , num2) {
	return Number(num1 + num2);
};

const subtract = function(num1 , num2) {
	return Number(num1 - num2);
};

const sum = function(userArr) {
    let sum = 0;
	for(let i = 0 ; i < userArr.length ; i++){
        sum += userArr[i];
    }
    return sum;
};

const multiply = function(userArr) {
    let sum = 1;
	for(let i = 0 ; i < userArr.length ; i++){
        sum *= userArr[i];
    }
    return sum;
};

const power = function(num1 , num2) {
	return Number(num1 ** num2);
};

const factorial = function(num1) {
    let ans = 1;
    if(num1 === 0 || num1 === 1) return 1;
	while(num1 !== 1){
        ans *= num1;
        num1--;
    }
    return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};