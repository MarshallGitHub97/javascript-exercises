const fibonacci = function(position) {
    position = Number(position)
    
    if(position < 0){
        return "OOPS";
    }
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

            arrValue = arr.at(i-2);
            arrValue += arr.at(i-1);
        }
        arr.push(arrValue);
        
    }

    return arr.at(position);
};


// Do not edit below this line
module.exports = fibonacci;
