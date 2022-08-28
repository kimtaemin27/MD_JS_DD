// 전역 변수
let foo = 1;

{
  // 지역 변수
  let foo = 2;
  let bar = 3;
}

console.log(foo);
// ReferenceError
console.log(bar);