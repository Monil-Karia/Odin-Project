const removeFromArray = function(userArr , element) {
    let ansArr = [];
    for(let  i = 0 ; i < userArr.length ; i++){
        if( userArr[i] === element) continue;
        ansArr.push(userArr[i]);
    }
    return ansArr;
};

// Do not edit below this line
module.exports = removeFromArray;