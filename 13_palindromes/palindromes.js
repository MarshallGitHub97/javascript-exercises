const palindromes = function (str) {
    let newStr = str.replaceAll(' ', '').replaceAll('.', '').replaceAll(',', '').replaceAll('!', '');
    let array = newStr.toLowerCase().split('')

    for (let i = 0; i < (array.length / 2); i++) {
        let firstLetter = array.slice(i, i + 1);
        let lastLetter = array.slice(array.length - i - 1, array.length - i);
        
        if (firstLetter.toString() !== lastLetter.toString()) {
            return false
        } 
    }

    return true
};

// Do not edit below this line
module.exports = palindromes;
