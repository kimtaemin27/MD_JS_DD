var circle = {
    // 프로퍼티
    radius: 5,

    // 원의 지름
    getDiameter: function() { // 메서드
        return 2 * this.radius;
    }
};

console.log(circle.getDiameter());