const findTheOldest = function(people) {

    let oldestPerson = {}; 
    let highestAge = 0:

    people.forEach((element) => {
        //When the Person is still alive get the actual year
        const lastYear = element.yearOfDeath || new Date().getFullYear();
        const ageOfPerson =  lastYear -  element.yearOfBirth;

        if (highestAge > ageOfPerson) {
            highestAge = ageOfPerson;
            oldestPerson = element;
        }

    })

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
