//spec1 - expect(ftoc(32)).toEqual(0);
//spec2 - expect(ftoc(100)).toEqual(37.8);
//spec3 - expect(ftoc(-100)).toEqual(-73.3);
//spec4 - expect(ctof(0)).toEqual(32);
//spec5 - expect(ctof(73.2)).toEqual(163.8);
//spec6 - expect(ctof(-10)).toEqual(14);

function ftoc (temp) {
  const tempConvertedCel = ((temp - 32) / 1.8000)
  return Math.round(tempConvertedCel * 10) / 10;
}

function ctof (temp) {
  const tempConvertedFah = ((temp * 1.8000) + 32)
  return Math.round(tempConvertedFah * 10) / 10;
}

console.log (ftoc())
console.log (ctof())

module.exports = {
  ftoc,
  ctof
}
