var mounth = 11;
var mounthName;

switch (mounth) {
    case 1:
        mounthName = 'Janyary';
    case 2:
        mounthName = 'February';
    case 3:
        mounthName = 'March';
    case 4:
        mounthName = 'April';
    case 5:
        mounthName = 'May';
    case 6:
        mounthName = 'June';
    case 7:
        mounthName = 'July';
    case 8:
        mounthName = 'August';
    case 9:
        mounthName = 'September';
    case 10:
        mounthName = 'October';
    case 11:
        mounthName = 'November';
    case 12:
        mounthName = 'December';
    default:
        mounthName = 'Invalid month';
}

// break 문이 없어 마지막 default 문까지 실행
console.log(mounthName);