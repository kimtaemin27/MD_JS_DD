// 현재 카운트
var count = 0;

// 순수 함수 increase 는 동일한 인수가 전달되면 언제나 동일한 값을 반환한다
function increase(n) {
  return ++n;
}

// 순수 함수가 반환한 결과값을 변수에 재할당해서 상태를 변경
count = increase(count);
console.log(count);

count = increase(count);
console.log(count);