$('input').blur(function (){
    let label = $(this).parent().find('label')
    $(this).val().length > 0 ? label.addClass('active') : label.removeClass('active')
})

$('.questions__toggle').on('click', function () {
    $(this).parent().find('.questions__content').slideToggle()
})