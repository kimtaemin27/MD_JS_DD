// 전역 변수
let foo = 1;

{
  // ReferneceError
  console.log(foo);
  // 지역 변수
  let foo = 2;
}