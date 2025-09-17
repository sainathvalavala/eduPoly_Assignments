function countDigits(n) {
  // n = Math.abs(n);          
  let str = n.toString();   
  let count = str.length;   
  return count;             
}
console.log(countDigits(12345))