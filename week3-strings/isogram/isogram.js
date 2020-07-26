//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
// 
const parseLetters = word => {
  const strLetters = word.match(/[A-Z]|[a-z]/g);

  return strLetters !== null ? strLetters : [];
}

export const isIsogram = word => {
  const strLetters = parseLetters(word);

  return strLetters.length === new Set(strLetters.map(l => l.toLowerCase())).size;
};

console.log(isIsogram('lydiane'));