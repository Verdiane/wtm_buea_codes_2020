
export const classify = (number) => {

  if (number === 0 ||  number === -1){ 
    throw new Error("Classification is only possible for natural numbers.");
  }

if (number === 1) return "deficient";

let sum = 0;
   for( let i=1; i<=number/2; i++)
     {
         if(number%i === 0)
          {
            sum += i;
          }
     }
   
     if(sum === number && sum !== 0){
       return "perfect number";
      } 
     else if (sum < number &&  sum !== 0){
      return "deficient number";
     }
     else{
       return "abundant number";
        }   
 
}
console.log(classify(6)); 
