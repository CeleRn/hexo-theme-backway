// $('.description__image').attr('data-src-img')


$(document).ready(function () {
    if ($('.description__image')) {
        let urlImage = $('.description__image').attr('data-src-img');
        $('.description__image').attr('style', "background-image: url('" + urlImage + "')");
    } else {
        console.log('Нет элемента для обработки')
    }
});




$('.limit').click(function(){
    $('.limit').removeClass('limit_checked');
    $(this).addClass('limit_checked');
    $(this).children('.radio').children('label').children('input').prop('checked', true);
    console.log($(this).children('.radio').children('label').children('input'));
})


$(".form-input__input").on('focus', function () {
    $(this).attr('class', 'form-input__input');
    var iconElement = $(this).parents('.form__input-block').children(".form__icon");
    iconElement.attr('class', 'form__icon').addClass('form__icon_hovered');
}).on('focusout', function () {
    var iconElement = $(this).parents('.form__input-block').children(".form__icon");
    var labelElement = $(this).parents('.form-input').children(".form-input__label");
    iconElement.attr('class', 'form__icon');
    var isRequred = false;
    if ($(this).prop('required')) {
        isRequred = true;
    }
    if ($(this).val() != "")  {
        iconElement.addClass('form__icon_success');
        labelElement.addClass('form-input__label_in-top');
        $(this).removeClass('form-input__input_invalid').addClass('form-input__input_valid');
        console.log(labelElement);
    } else {
        labelElement.removeClass('form-input__label_in-top');
        if (isRequred) {
            iconElement.addClass('form__icon_error');
            $(this).removeClass('form-input__input_valid').addClass('form-input__input_invalid');
        } 
    }
})