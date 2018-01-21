webpackHotUpdate(0,{

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

// $('.description__image').attr('data-src-img')


$(document).ready(function () {
    if ($('.description__image')) {
        var urlImage = $('.description__image').attr('data-src-img');
        $('.description__image').attr('style', "background-image: url('" + urlImage + "')");
    } else {
        console.log('Нет элемента для обработки');
    }
});

// $(".form-input__input").focus(function () {

// });

$(".form-input__input").on('focus', function () {
    var IconElement = $(this).parents('.form__input-block').children(".form__icon");
    IconElement.attr('class', 'form__icon').addClass('form__icon_hovered');
}).on('focusout', function () {
    var IconElement = $(this).parents('.form__input-block').children(".form__icon");
    IconElement.attr('class', 'form__icon');

    if ($(this).val() != "") {
        IconElement.addClass('form__icon_success');
        $(this).removeClass('form-input__input_invalid').addClass('form-input__input_valid');
    } else {
        IconElement.addClass('form__icon_error');
        $(this).removeClass('form-input__input_valid').addClass('form-input__input_invalid');
    }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

})