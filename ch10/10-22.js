// ES6
var prefix = 'prop';
var i = 0;

var obj = {};

// 객체 리터럴 내부에서 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성
const obb = {
    [`${prefix}  -  ${++i}`]: i,
    [`${prefix}  -  ${++i}`]: i,
    [`${prefix}  -  ${++i}`]: i
};

console.log(obb);