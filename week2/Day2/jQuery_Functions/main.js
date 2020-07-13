$(document).ready(function(){
    $('#click').click(function(){
        alert("You clicked the button!")
        // confirm() is an alternative to alert()
    })

    $('#fade_text').hover(function(){
        $(this).fadeOut()
        $(this).fadeIn()
    })

    $('#toggle_button').click(function(){
        $('#toggle_text').toggle()
    })

    $('#append_button').click(function(){
        $('#append_text').append(' to you!')
    })

    $('#text_func_button').click(function(){
        $('#text_func_h3').text('Here is the new sentence!')
    })

    $('#color_button').click(function(){
        $('#color').val('Pink')
    })

    $('#class_button').click(function(){
        $(this).addClass('selected')
    })

    $('#attr_button').click(function(){
        console.log($('#link').attr('href'))
    })
})