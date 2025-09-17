function rev(a) {
  //123
  let sum = 0;
  let r;
  while (a > 0) {
    //123,12,1
    r = a % 10; //3,2,1
    sum = sum * 10 + r; //0*10+3=3, 3*10+2=32,32*10+1=321
    a = parseInt(a / 10);
  } //123/10 = 12, 12/10=1, 1/10=0.1 not greater than 0
  return sum;
}

var reverse = rev(123);

console.log(reverse);
