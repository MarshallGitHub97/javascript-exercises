const sumAll = function(startNum, endNum) {
    let sum = 0;

    if (
        (startNum == NaN || endNum == NaN) ||
        (startNum < 0  || endNum < 0) ||
        (!Number.isInteger(startNum) || !Number.isInteger(endNum))
    ){
        return "ERROR"
    }
    
    if (startNum <= endNum) {    
        for (let i = startNum; i <= endNum; i++) {
          
            sum = sum + i;
         
        }
    } 
    else if (startNum > endNum) {
        for (let i = startNum; i >= endNum; i--){
            sum = sum + i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
