const input = $('.forms-language input')

if (input){
    input.blur(function (){
        if($(this).val().length > 0)
            $(this).parent().find('label').addClass('active')
        else
            $(this).parent().find('label').removeClass('active')

        console.log($(this).parent().find('label'))
    })
}