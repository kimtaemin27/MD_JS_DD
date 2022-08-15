var string = 'Hello World';
var serach = 'l';
var index;

// 문자열은 유사 배열 임으로 for 문으로 순화할 수 있다
for (var i = 0; i < string.length; i++) {
    // 문자열의 개별 문자가 'l' 이면
    if (string[i] === serach) {
        index = i;
        break;
    }
}

console.log(index);
console.log(string.indexOf(serach));