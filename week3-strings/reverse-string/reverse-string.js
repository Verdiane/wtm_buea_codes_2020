//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (word) => {
  if (!word){
    return "";
  }
  let new_word = "";
  for (let i = word.length-1; i >= 0; i--){
    let a = word[i];
    new_word += a;
  }
  return new_word;
};
