import { NotImplementedError } from '../extensions/index.js';


export default function getSumOfDigits(n) {
  let num = n;
  while (String(num).length>1) {
    let sum = 0;
    for (let i = 0; i < String(num).length; i++) {
    sum += +String(num)[i]      
    }
    num = sum;
  }
  return num;
}
