const x=100;
// const y; --Uncaught SyntaxError: Missing initializer in const declaration
const y=300;
// y=13--Uncaught TypeError: Assignment to constant variable.
const ar=[1,2,3]//array have reference , we are not changing the refrence but changling the value
// ar[1]=4;
// console.log(ar)
//freeze- cant modify array elements
// br=[5,6,7]
// Object.freeze(br);
// br[2]="ravi"
// console.log(br)

//seal- cant extend array
br=[5,6,7]
Object.seal(br);
br[2]=("ravi")
console.log(br)