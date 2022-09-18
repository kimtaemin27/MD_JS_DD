document.querySelector('.navbar-toggler').addEventListener('click', function() {
    document.querySelectorAll('.list-group')[0].classList.toggle('show');
})

// document.getElementsByClassName('navbar-toggler')[0].addEventListener('click', function(){
//     document.getElementsByClassName('list-group')[0].classList.toggle('show');
// });



// jquery 사용법 간단 정리
// document.querySelector('.hello').innerHTML = 'hi';
// 위 아래 같음
//$('.hello').html('hi');

// document.querySelector('#test-btn').addEventListener()
 // 위 아래 같음
 // $('#test-btn').on('click', function(){
    // $('.hello').slideUp();
// })
// jquery 사용법 간단 정리

// ex
$('#login').on('click', function(){
    $('.black-bg').addClass('show-modal');
})

$('#close').on('click', function(){
    $('.black-bg').removeClass('show-modal');
})
// ex



// if else
$('form').on('submit', function(e) {
            
    var inEmail = document.getElementById('email').value;
    if(inEmail == '') {
        alert('아이디 입력');

        // 폼 전송 막기
        e.preventDefault();
    }

    // 정규식 테스트
    if(/\S+@\S+/.test(inEmail)){
        alert('이메일 형식 아님');
    }
    // 정규식 테스트

    if(document.getElementById('pass').value == '') {
        alert('비번 입력');
        
        // 폼 전송 막기
        e.preventDefault();
    } else if(document.getElementById('pass').length < 6) {
        alert('좀 더 길게');

        // 폼 전송 막기
        e.preventDefault();
    }
})
// if else


// input, change
// document.getElementById('email').addEventListener('change', function(){
//     console.log('hello');
// })
// input, change



// dark

var dCount = 0;

document.querySelector('.badge').addEventListener('click', function(){
    dCount += 1;

    if(dCount % 2 == 1) {
        $('.badge').html('Light 🔄');
        // navbar-light bg-light
        $('#bigform').removeClass('navbar-light');
        $('#bigform').removeClass('bg-light');
        $('#bigform').addClass('navbar-dark');
        $('#bigform').addClass('bg-dark');
    } else {
        $('#bigform').html('Dark 🔄');
        $('#bigform').removeClass('navbar-dark');
        $('#bigform').removeClass('bg-dark');
        $('#bigform').addClass('navbar-light');
        $('#bigform').addClass('bg-light');
    }
})
// dark



// setTimeout
        
// setTimeout(function() {
//     console.log('hello')
// }, 1000)

// setTimeout(function(){
//     $('.alert').hide();
// },1000)

// setInterval(function(){
//     $('.alert').hide();
//     console.log('hello');
// },1000)
// setTimeout

// q1
var rCount = 5;

setInterval(function() {
    rCount -=1;
    if(rCount >= 0) {
        document.querySelector('#num').innerHTML = rCount;
    }

    if(rCount == 0) {
        $('.alert').hide();
    }
}, 1000);
// q1



$('form').on('submit', function(e) {
    var inPass = document.getElementById('pw').value;

    if(/[A-Z]/.test(inPass) == false) {
        alert('대문자 없음');
    }
})



// 캐러셀
$('.slide-1').on('click', function() {
    $('.slide-container').css('transform', 'translateX(0vw)');
})

$('.slide-2').on('click', function() {
    $('.slide-container').css('transform', 'translateX(-100vw)');
})

$('.slide-3').on('click', function() {
    $('.slide-container').css('transform', 'translateX(-200vw)');
})
// 캐러셀

// 캐러셀2
var nowImg =1;

$('.next').on('click', function() {
    if(nowImg == 1) {
        $('.slide-container').css('transform', 'translateX(-100vw)');
        nowImg += 1;
    } else if(nowImg == 2) {
        $('.slide-container').css('transform', 'translateX(-200vw)');
        nowImg += 1;
    } else {
        $('.slide-container').css('transform', 'translateX(0vw)');
        nowImg -= 2;
    }
})

$('.before').on('click', function() {
    if(nowImg == 1) {
        $('.slide-container').css('transform', 'translateX(0vw)');
        nowImg += 2;
    } else if(nowImg == 2) {
        $('.slide-container').css('transform', 'translateX(-100vw)');
        nowImg -=1;
    } else {
        $('.slide-container').css('transform', 'translateX(-200vw)');
        nowImg -=1;
    }
})
// 캐러셀2





 // scroll 1, 2
 window.addEventListener('scroll', function() {
    if(window.scrollY > 100) {
        $('.navbar-brand').css('font-size', '20px');
    } else {
        $('.navbar-brand').css('font-size', '30px');
    }
})

$('.lorem').on('scroll', function() {
    // 스크롤 양
    var scrollA = document.querySelector('.lorem').scrollTop;
    // 실제 높이
    var scrollB = document.querySelector('.lorem').scrollHeight;
    // 높이
    var scrollC = document.querySelector('.lorem').clientHeight;
    

    if(scrollA + scrollC > scrollB - 100) {
        alert('다 읽음');
    }
})
// scroll 1, 2

// 위아래 깉음
document.documentElement.scrollHeight;
document.querySelector('html').scrollHeight;
// 위아래 깉음
document.querySelector('html').clientHeight;


// 모달 닫기
document.querySelector('.black-bg').addEventListener('click', function(e) {
    // 유저가 실제로 누른거
    // e.target;
    // 이벤트 리스너 달린 곳
    // this; 와 같음
    // e.currentTarget;
    // 클릭 안한것 처럼 동작
    // 이벤트 기본동작 막아줌
    // e.preventDefault();
    // 내 상위요소로 이벤트 버블링 막아줌
    // e.stopPropagation();

    // 까만 배경 했을때만 동작
    if(e.target == document.querySelector('.black-bg')) {
        document.querySelector('.black-bg').classList.remove('show-modal');
    }
    
})
// 모달 닫기