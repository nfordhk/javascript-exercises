//testing jasmine leapYears.spec.js
//spec1 - expect(leapYears(1996)).toEqual(true);  -> % 4 ONLY 
//spec2 - expect(leapYears(1997)).toEqual(false); -> NOTHING
//spec3 - expect(leapYears(34992)).toEqual(true); -> % 4 ONLY
//spec4 - expect(leapYears(1900)).toEqual(false); -> % 4 ONLY (FALSE), NOT % 400
//spec5 - expect(leapYears(1600)).toEqual(true);  -> % 4 AND % 400
//spec6 - expect(leapYears(700)).toEqual(false);  -> % 4 ONLY (FALSE), NOT % 400

function leapYears(years) {
    if ((years % 4 === 0 && years % 400 === 0)) {
        return "TRUE"
    } else if (years % 4 === 0 && years % 400 !== 0) {
        return "FALSE"
    } else if (years % 4 !== 0) {
        return "FALSE"
    } else if (years % 4 === 0) {
        return "TRUE"
    } else if (years % 400 === 0){
        return "TRUE"
    } 
}

console.log (leapYears(1900))

module.exports = leapYears
