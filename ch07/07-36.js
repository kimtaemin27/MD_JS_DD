// 지수 연산자의 결합 순서는 우항에서 좌항, 우결합성을 갖는다
console.log(2 ** (3 ** 2));
console.log(Math.pow(2, Math.pow(3, 2)));