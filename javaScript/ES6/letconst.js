// var a=112;
// a="sai";
// console.log(a);
// console.log( y)
// let y=23
//   y=56
// let x=23
//  let x=56
// console.log( x)
// const pi=3.14
// pi=22
// console.log(pi)
// var a = 100;
// let b = 200;
// console.log(c);
// // console.log(d)//Uncaught ReferenceError: d is not defined
// if(10<4)
// {
//   // console.log(d); //Uncaught ReferenceError: Cannot access 'd' before initialization
//   var c = 400;
//   let d = 300;
// }
var students=["arjun","arvind","rahul","revanth"]
for(var i=0;i<=students.length-1;i++){
  var cbt=document.createElement("button");
  cbt.innerText=students[i];
  cbt.style.margin="10px";
  cbt.onclick=function(){alert (i)}
  document.getElementById("bdy").appendChild(cbt)
}

for(let i=0;i<=students.length-1;i++){
  var cbt=document.createElement("button");
  cbt.innerText=students[i];
  cbt.style.margin="10px";
  cbt.onclick=function(){alert (i)}
  document.getElementById("bdy").appendChild(cbt)
}