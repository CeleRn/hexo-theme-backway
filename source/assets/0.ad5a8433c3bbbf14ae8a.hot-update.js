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
    $(this).attr('class', 'form-input__input');
    var iconElement = $(this).parents('.form__input-block').children(".form__icon");
    iconElement.attr('class', 'form__icon').addClass('form__icon_hovered');
}).on('focusout', function () {
    var iconElement = $(this).parents('.form__input-block').children(".form__icon");
    var labelElement = $(this).parents('.form-input').children(".form-input__label");
    IconElement.attr('class', 'form__icon');

    if ($(this).val() != "") {
        iconElement.addClass('form__icon_success');
        labelElement.removeClass('form-input__label_in-top');
        $(this).removeClass('form-input__input_invalid').addClass('form-input__input_valid');
    } else {
        iconElement.addClass('form__icon_error');
        labelElement.addClass('form-input__label_in-top');
        $(this).removeClass('form-input__input_valid').addClass('form-input__input_invalid');
    }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

})