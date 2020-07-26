//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (num) => {
let caseA = num % 3===0? "Pling": "";
let caseB = num % 5===0? "Plang": "";
let caseC = num % 7===0? "Plong": "";

return `${caseA}${caseB}${caseC}` || num.toString();

};
//console.log(convert(1));
