//testing jasmine leapYears.spec.js
//spec1 - expect(leapYears(1996)).toEqual(true); 
//spec2 - expect(leapYears(1997)).toEqual(false);
//spec3 - expect(leapYears(34992)).toEqual(true);
//spec4 - expect(leapYears(1900)).toEqual(false);
//spec5 - expect(leapYears(1600)).toEqual(true); 
//spec6 - expect(leapYears(700)).toEqual(false);  

function leapYears(years) {
    if (years % 4 == 0 && years % 100 !== 0) {
        return true
    } else if (years % 4 == 0 && years % 400 == 0) {
        return true
    } else {
        return false
    }
}
console.log (leapYears(700))

module.exports = leapYears


