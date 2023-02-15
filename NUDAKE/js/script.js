$(document).ready(function(){
    
    $("#header .header_container .nav_btn_container .nav_btn").click(function(){
        $(this).toggleClass('on');
        $("#header .nav_list_container").toggleClass('on')
    });

    $("#header .nav_list_container .menu_list li").mouseover(function(){
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
    });



});