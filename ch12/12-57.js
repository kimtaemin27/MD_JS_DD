// 현재 카운트
var count = 0;

// 비순수 함수
function increase() {
  // 외부 상태에 의존하며 외부 상태를 변경한다
  return ++count;
}

// 비순수 함수는 외부 상태를 변경함으로 상태 변화를 추적하기 어려워 진다
increase();
console.log(count);

increase()
console.log(count);