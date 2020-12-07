let input = 'Michael Shiiki Morris';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++){
  if (i < input.length){
    for (let j = 0; j < 5; j++) {
      if (input.charAt(i) === vowels[j]){
        resultArray.push(input.charAt(i));
      }
      }
    }
  if (input.charAt(i) === 'e'){
    resultArray.push(input.charAt(i));
  }
  if (input.charAt(i) === 'u'){
    resultArray.push(input.charAt(i));
  }
}
console.log(resultArray.join('').toUpperCase());