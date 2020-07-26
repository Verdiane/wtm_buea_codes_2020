//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const parse = (word) => {
  return word.toUpperCase()
            .match(/([A-Z]|')+/g)
            .map(word => word[0])
            .join("");
};
// console.log(parse("black lives matter"));
