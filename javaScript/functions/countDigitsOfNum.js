// function countDigits(n) {
//   // n = Math.abs(n);          
//   let str = n.toString();   
//   let count = str.length;   
//   return count;             
// }

// console.log(countDigits(12345))
function digits(a) {
  var count = 0;
  while (a != 0) {
    
    a = parseInt(a / 10); count++; }
  return count; } 
console.log(digits(1234)); // 4 console.log(digits(987654)); // 6
// Each time through the loop, a is divided by 10.

// parseInt(...) removes the decimal part.

// Example:

// If a = 1234, a / 10 = 123.4, parseInt(123.4) = 123.

// Next time → 123 / 10 = 12.3, parseInt(12.3) = 12.

// Then → 12 / 10 = 1.2, parseInt(1.2) = 1.

// Then → 1 / 10 = 0.1, parseInt(0.1) = 0.

// So, the number keeps losing its last digit until it becomes 0.
