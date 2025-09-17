function fact(a){ 
  let b=1;
for(let i=a; i>=1; i--){
   b=b*i;
}
return b
} 

var factorial = fact(4); 

console.log(factorial);