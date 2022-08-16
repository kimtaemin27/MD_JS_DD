// 전달받은 인수가 Falsy 값이면 true, Truthy 값이면 false 를 반환한다
function isFalsy(v) {
    return !v;
}

// 전달받은 인수가 Truthy 값이면 true, Falsy 값이면 false 를 반환한다
function isThruthy(v) {
    return !!v;
}

// 모두 true 반환
isFalsy(false);
isFalsy(undefined);
isFalsy(null);
isFalsy(0);
isFalsy(NaN);
isFalsy('');

// 모두 true 반환
isThruthy(true);
// 빈 문자열이 아닌 문자열은 Thruthy 값이다
isThruthy('0');

// undefined 타입
+
undefined;

// 심벌 타입
+
Symbol();

// 객체 타입
+
{} +
[] +
[10, 20] +
(function() {})