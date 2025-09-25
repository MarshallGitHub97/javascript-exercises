const getTheTitles = function(books) {
    let arr = [];
    
    books.forEach(element => {
        arr.push(element.title)
    });

    return arr
};

// Do not edit below this line
module.exports = getTheTitles;
