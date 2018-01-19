// $('.description__image').attr('data-src-img')


$(document).ready(function () {
    if ($('.description__image')) {
        let urlImage = $('.description__image').attr('data-src-img');
        $('.description__image').attr('style', "background-image: url('" + urlImage + "')");
    } else {
        console.log('Нет элемента для обработки')
    }
});