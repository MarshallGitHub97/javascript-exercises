const fibonacci = function(position) {
    let arr = [];
    let arrValue = 0;
    for(i = 0; i <= position; i++){
        if(i == 0){
            arrValue = 0;
        } 
        else if(i == 1) {
            arrValue = 1;
        }
        else {
            arrValue = arr[i-1] + arr[i]  
        }
        arr.push(arrValue);
    }
    return arr[position]
};

// Do not edit below this line
module.exports = fibonacci;
