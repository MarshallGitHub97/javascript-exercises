const removeFromArray = function(array, deleteFromArray) {
    const indexOfDeletedElement = array.findIndex((element) => element == deleteFromArray )
    array.splice(indexOfDeletedElement, 1)
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
