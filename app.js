$(document).ready(function() {
    //On click will add the class white
    $('.box').on('click', function(){
        $(this).addClass(color);
    })
    //On double click will remove the class white
    $('.box').on('dblclick', function(){
        $(this).removeClass(color);
    })
    //Reset button functionality
    $('#reset').on('click', function(){
        $('.box').removeClass(colors);
    })

    var colors = 'red blue green yellow white';

    $('#red').on('click', function(){
        color = 'red';
    })

    $('#blue').on('click', function(){
        color = 'blue';
    })

    $('#green').on('click', function(){
        color = 'green';
    })

    $('#yellow').on('click', function(){
        color = 'yellow';
    })

    $('#white').on('click', function(){
        color = 'white';
    })

})