var a = 100;
function scope() {
  var b = 200; //function scope variable
  console.log(b);
}
scope();
// console.log(b);-- Uncaught ReferenceError: b is not defined

//closures--outer function variable values are binded to inner function variable value under closure scope.
var ar = [22, 33, 44];
var br=[]
var cr=[]
for(var i=0;i<=ar.length-1;i++){
  br.push(function(){
    console.log("hi",i)
  })
}
console.log(br);
br[0]()// gives i value as 3(i is declared with var)
//gives i as 1( if i is declared with let)

ar.forEach(function(x,y){//creates 2 scopes (global and closure scopes) outer function variable values are binded to inner function variable value under closure scope.
  cr.push(function(){
    console.log("hi",y)//y value comes from closure scope
  })
})
console.log(cr);
cr[0]()//gives i value as 1
cr[1]()//i value as 2
cr[2]()//i value as 3