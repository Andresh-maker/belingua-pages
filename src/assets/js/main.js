$('input').blur(function (){
    let label = $(this).parent().find('label')
    $(this).val().length > 0 ? label.addClass('active') : label.removeClass('active')
})

$('.questions__toggle').on('click', function () {
    $(this).parent().find('.questions__content').slideToggle()
})

$('.burger').on('click', function (){
    $(this).toggleClass('active')
})

$('.dropdown-list__item').on('click', function (e){
    e.stopPropagation()
    let inp = $(this).closest('.forms-language__group').find('input')
    let label = $(this).closest('.forms-language__group').find('label')
    label.addClass('active')
    inp.val($(this).find('span').first().text().trim())
})

$(function (){
    $('input').each(function (){
        let label = $(this).parent().find('label')
        $(this).val().length > 0 ? label.addClass('active') : label.removeClass('active')
    })
})