var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
];

// for(let i = 0; i <= products.length; i++) {
//     document.querySelectorAll('.card-body h5')[i].innerHTML = products[i].title;    
//     document.querySelectorAll('.card-body p')[i].innerHTML = '가격은 : ' + products[i].price;
// }

// document.querySelectorAll('.card-body h5')[0].innerHTML = products[0].title;
// document.querySelectorAll('.card-body p')[0].innerHTML = '가격은 : ' + products[0].price;

// document.querySelectorAll('.card-body h5')[1].innerHTML = products[1].title;
// document.querySelectorAll('.card-body p')[1].innerHTML = '가격은 : ' + products[1].price;

// document.querySelectorAll('.card-body h5')[2].innerHTML = products[2].title;
// document.querySelectorAll('.card-body p')[2 ].innerHTML = '가격은 : ' + products[2].price;

// products.forEach(a) => {
//     var templ = `<div class="col-sm-4">
//                 <img src="https://via.placeholder.com/600" class="w-100">
//                 <h5>${a.title}</h5>
//                 <p>가격 : ${a.price}</p>
//             <div>`;
//     $('.row').append(templ);
// }

$.get('https://codingapple1.github.io/js/more1.json')
    .done((data) => {
        console.log(data);
    })

$('#more').click(function() {
    $.get('https://codingapple1.github.io/js/more1.json')
    .done((data) => {

        data.forEach((a) => {
            var templ = `<div class="col-sm-4">
                        <img src="https://via.placeholder.com/600" class="w-100">
                        <h5>${a.title}</h5>
                        <p>가격 : ${a.price}</p>
                    <div>`;
                    $('.row').append(templ);
        })
    })
})