// 코드의 가장 바깥 영역에서 선언한 변수
var var1 = 1;

if(true) {
  // 코드 블록 내에서 선언한 변수
  var var2 = 2;
  if(true) {
    // 중첩된 코드 블록 내에서 선언한 변수
    var var3 = 3;
  }
}

function foo() {
  // 함수 내에서 선언한 변수
  var var4 = 4;

  function bar() {
    // 중첩된 함수 내에서 선언한 변수
    var var5 = 5;
  }
}

console.log(var1);
console.log(var2);
console.log(var3);

// ReferenceError
console.log(var4);
console.log(var5);