let bigTab = $('.tab-button');
let smallTab = $('.tab-content');

// for(let i = 0; i < 3; i++) {
//     bigTab.eq(i).on('click', function() {
//         bigTab.removeClass('orange');
//         bigTab.eq(i).addClass('orange');
//         smallTab.removeClass('show');
//         smallTab.eq(i).addClass('show');
//     });
// }

// bigTab.eq(0).on('click', function() {
//     bigTab.removeClass('orange');
//     bigTab.eq(0).addClass('orange');
//     smallTab.removeClass('show');
//     smallTab.eq(0).addClass('show');
// })


// bigTab.eq(1).on('click', function() {
//     bigTab.removeClass('orange');
//     bigTab.eq(1).addClass('orange');
//     smallTab.removeClass('show');
//     smallTab.eq(1).addClass('show');
// });


// bigTab.eq(2).on('click', function() {
//     bigTab.removeClass('orange');
//     bigTab.eq(2).addClass('orange');
//     smallTab.removeClass('show');
//     smallTab.eq(2).addClass('show');
// });


// for(let i = 0; i < 3; i++) {
//     bigTab.eq(i).on('click', function() {
//         tabOpen(i)
//     });
// }

$('.list').click(function(e) {
    if(e.target == document.querySelectorAll('.tab-button')[0]) {
        tabOpen(0);
    }

    if(e.target == document.querySelectorAll('.tab-button')[1]) {
        tabOpen(1);
    }

    if(e.target == document.querySelectorAll('.tab-button')[2]) {
        tabOpen(2);
    }
})


// $('.list').click(function(e) {
//     console.log(e.target.dataset.id);
//     tabOpen(e.target.dataset.id);
// })


function tabOpen(num) {
    bigTab.removeClass('orange');
    bigTab.eq(num).addClass('orange');
    smallTab.removeClass('show');
    smallTab.eq(num).addClass('show');
}


// var car2 = {name: '소나타',price: 50000};
// document.querySelector('.car-title').innerHTML = car2.name;
// document.querySelector('.car-price').innerHTML = car2.price;

// var car2 = {name: '소나타',price: [50000, 3000, 4000] };
// document.querySelector('.car-price').innerHTML = car2.price[0];

var pants = [28, 30, 32, 34];
var shirts = [95, 100, 105];

$('.form-select').eq(0).on('input', function(e) {
    var value = e.currentTarget.value;
    if(value == '셔츠') {
        $('.form-select').eq(1).removeClass('form-hide');
    } else if( value == '바지') {
        $('.form-select').eq(1).removeClass('form-hide');
        $('.form-select').eq(1).html('');

        pants.forEach(function(a) {
            $('.form-select').eq(1).append(`<option>${a}</option>`)
        })
    }
})

$('.form-select').eq(0).on('input', function(e) {
    var value = e.currentTarget.value;
    if(value == '모자') {
        $('.form-select').eq(1).addClass('form-hide');
    }
})


// var templ = '<p>안녕</p>'
// document.querySelector('#test').insertAdjacentHTML('beforeend', templ);
// 위 아래 같은거
// $('#test').append(templ);



// $.get('https://codingapple1.github.io/price.json').done(function(data) {
//     console.log(data.price);
// }).fail(function() {
//     console.log('fail');
// })

fetch('https://codingapple1.github.io/price.json')
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error)
    })