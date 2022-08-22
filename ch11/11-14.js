const o = { x: { y: 1 } };

// 얕은 복사
// 스프레드 문법
const c1 = {...o };

console.log(c1 === o);
console.log(c1.x === o.x);

// lodash 의 cloneDeep 을 사용한 깊은 복사
// npm install lodash 로 lodash 를 설치한 후 node.js 환경에서 실행
const _ = require('lodash');

// 깊은 복사
const c2 = _.cloneDeep(o);
console.log(c2 === o);
console.log(c2.x === o.x);