
$(document).on("scroll", function (e) {
    let scrollTop = $(document).scrollTop();
    $(".scroll_box").text(scrollTop);


    $("#article .article4 .article_btn_txt").css("transform","rotate("+ scrollTop/2 + "deg");

    if (window.innerWidth >= 1300) {

        if (scrollTop >= 590 && scrollTop <= 1000 ) {
            $("#intro .intro_container .intro_img .mobile_display").addClass("on");
            $("#intro .intro_container .intro_img .watch_display").addClass("on");
        } else if (scrollTop >= 1500) {
            $("#intro .intro_container .intro_img .mobile_display").removeClass("on");
            $("#intro .intro_container .intro_img .watch_display").removeClass("on");
        } else if (scrollTop <= 100) {
            $("#intro .intro_container .intro_img .mobile_display").removeClass("on");
            $("#intro .intro_container .intro_img .watch_display").removeClass("on");
        }

        if (scrollTop >= 1300 && scrollTop <= 2100) {
            $("#article .article1 .txt_animation").addClass("on");
        } else if (scrollTop >= 2150 ) {
            $("#article .article1 .txt_animation").removeClass("on");
        } else if (scrollTop <= 795) {
            $("#article .article1 .txt_animation").removeClass("on");
        }


        if (scrollTop >= 2000  && scrollTop <= 2700 ) {
            $("#article .article2 .txt_animation").addClass("on");
        } else if (scrollTop >= 2750 ) {
            $("#article .article2 .txt_animation").removeClass("on");
        } else if (scrollTop <= 1495 ) {
            $("#article .art-icle2 .txt_animation").removeClass("on");
        }

        if (scrollTop >= 2500 && scrollTop <= 3400 ) {
            $("#article .article3 .txt_animation").addClass("on");
        } else if (scrollTop >= 3450 ) {
            $("#article .article3 .txt_animation").removeClass("on");
        } else if (scrollTop <= 1995) {
            $("#article .article3 .txt_animation").removeClass("on");
        }
    }

    if (window.innerWidth <= 1299 && window.innerWidth >= 1200) {

        if (scrollTop >= 830 && scrollTop <= 1500 ) {
            $("#intro .intro_container .intro_img .mobile_display").addClass("on");
            $("#intro .intro_container .intro_img .watch_display").addClass("on");
        } else if (scrollTop >= 1510) {
            $("#intro .intro_container .intro_img .mobile_display").removeClass("on");
            $("#intro .intro_container .intro_img .watch_display").removeClass("on");
        } else if (scrollTop <= 330) {
            $("#intro .intro_container .intro_img .mobile_display").removeClass("on");
            $("#intro .intro_container .intro_img .watch_display").removeClass("on");
        }

        if (scrollTop >= 1800 && scrollTop <= 2500) {
            $("#article .article1 .txt_animation").addClass("on");
        } else if (scrollTop >= 2495 ) {
            $("#article .article1 .txt_animation").removeClass("on");
        } else if (scrollTop <= 1650) {
            $("#article .article1 .txt_animation").removeClass("on");
        }

        if (scrollTop >= 2680  && scrollTop <= 3430 ) {
            $("#article .article2 .txt_animation").addClass("on");
        } else if (scrollTop >= 3435 ) {
            $("#article .article2 .txt_animation").removeClass("on");
        } else if (scrollTop <= 2585) {
            $("#article .art-icle2 .txt_animation").removeClass("on");
        }

        if (scrollTop >= 3700 && scrollTop <= 4430 ) {
            $("#article .article3 .txt_animation").addClass("on");
        } else if (scrollTop >= 4435 ) {
            $("#article .article3 .txt_animation").removeClass("on");
        } else if (scrollTop <= 3510) {
            $("#article .article3 .txt_animation").removeClass("on");
        }

    }

    if (window.innerWidth <= 1199 && window.innerWidth >= 800) {

        if (scrollTop >= 500 && scrollTop <= 1050 ) {
            $("#intro .intro_container .intro_img .mobile_display").addClass("on");
            $("#intro .intro_container .intro_img .watch_display").addClass("on");
        } else if (scrollTop >= 1155) {//?????? ?????????
            $("#intro .intro_container .intro_img .mobile_display").removeClass("on");
            $("#intro .intro_container .intro_img .watch_display").removeClass("on");
        } else if (scrollTop <= 50) { //??? ?????????
            $("#intro .intro_container .intro_img .mobile_display").removeClass("on");
            $("#intro .intro_container .intro_img .watch_display").removeClass("on");
        }

        if (scrollTop >= 1850 && scrollTop <= 2600) {
            $("#article .article1 .txt_animation").addClass("on");
        } else if (scrollTop >= 2605 ) {
            $("#article .article1 .txt_animation").removeClass("on");
        } else if (scrollTop <= 1750) {
            $("#article .article1 .txt_animation").removeClass("on");
        }


        if (scrollTop >= 2800  && scrollTop <= 3530 ) {
            $("#article .article2 .txt_animation").addClass("on");
        } else if (scrollTop >= 3535 ) {
            $("#article .article2 .txt_animation").removeClass("on");
        } else if (scrollTop <= 2690) {
            $("#article .art-icle2 .txt_animation").removeClass("on");
        }

        if (scrollTop >= 3800 && scrollTop <= 4550 ) {
            $("#article .article3 .txt_animation").addClass("on");
        } else if (scrollTop >= 4555) {
            $("#article .article3 .txt_animation").removeClass("on");
        } else if (scrollTop <= 3600) {
            $("#article .article3 .txt_animation").removeClass("on");
        }
    }

    if (window.innerWidth <= 799 && window.innerWidth >= 700){

        if (scrollTop >= 200 && scrollTop <= 870 ) {
            $("#intro .intro_container .intro_img .mobile_display").addClass("on");
            $("#intro .intro_container .intro_img .watch_display").addClass("on");
        } else if (scrollTop >= 875) {
            $("#intro .intro_container .intro_img .mobile_display").removeClass("on");
            $("#intro .intro_container .intro_img .watch_display").removeClass("on");
        } else if (scrollTop <= 0) {
            $("#intro .intro_container .intro_img .mobile_display").removeClass("on");
            $("#intro .intro_container .intro_img .watch_display").removeClass("on");
        }

        if (scrollTop >= 1700 && scrollTop <= 2300) {
            $("#article .article1 .txt_animation").addClass("on");
        } else if (scrollTop >= 2310 ) {
            $("#article .article1 .txt_animation").removeClass("on");
        } else if (scrollTop <= 1465) {
            $("#article .article1 .txt_animation").removeClass("on");
        }


        if (scrollTop >= 2500  && scrollTop <= 3150 ) {
            $("#article .article2 .txt_animation").addClass("on");
        } else if (scrollTop >= 3160 ) {
            $("#article .article2 .txt_animation").removeClass("on");
        } else if (scrollTop <= 2300) {
            $("#article .art-icle2 .txt_animation").removeClass("on");
        }

        if (scrollTop >= 3400 && scrollTop <= 4050 ) {
            $("#article .article3 .txt_animation").addClass("on");
        } else if (scrollTop >= 4060) {
            $("#article .article3 .txt_animation").removeClass("on");
        } else if (scrollTop <= 3100) {
            $("#article .article3 .txt_animation").removeClass("on");
        }
    }

    if (window.innerWidth <= 699 && window.innerWidth >= 600){

        if (scrollTop >= 200 && scrollTop <= 870 ) {
            $("#intro .intro_container .intro_img .mobile_display").addClass("on");
            $("#intro .intro_container .intro_img .watch_display").addClass("on");
        } else if (scrollTop >= 875) {
            $("#intro .intro_container .intro_img .mobile_display").removeClass("on");
            $("#intro .intro_container .intro_img .watch_display").removeClass("on");
        } else if (scrollTop <= 0) {
            $("#intro .intro_container .intro_img .mobile_display").removeClass("on");
            $("#intro .intro_container .intro_img .watch_display").removeClass("on");
        }

        if (scrollTop >= 1600 && scrollTop <= 2230) {
            $("#article .article1 .txt_animation").addClass("on");
        } else if (scrollTop >= 2240 ) {
            $("#article .article1 .txt_animation").removeClass("on");
        } else if (scrollTop <= 1370) {
            $("#article .article1 .txt_animation").removeClass("on");
        }


        if (scrollTop >= 2250  && scrollTop <= 3040 ) {
            $("#article .article2 .txt_animation").addClass("on");
        } else if (scrollTop >= 3050 ) {
            $("#article .article2 .txt_animation").removeClass("on");
        } else if (scrollTop <= 2150) {
            $("#article .art-icle2 .txt_animation").removeClass("on");
        }

        if (scrollTop >= 2940 && scrollTop <= 3870 ) {
            $("#article .article3 .txt_animation").addClass("on");
        } else if (scrollTop >= 3880) {
            $("#article .article3 .txt_animation").removeClass("on");
        } else if (scrollTop <= 2950) {
            $("#article .article3 .txt_animation").removeClass("on");
        }
    }

    if (window.innerWidth <= 599 && window.innerWidth >= 550){

        if (scrollTop >= 200 && scrollTop <= 870 ) {
            $("#intro .intro_container .intro_img .mobile_display").addClass("on");
            $("#intro .intro_container .intro_img .watch_display").addClass("on");
        } else if (scrollTop >= 875) {
            $("#intro .intro_container .intro_img .mobile_display").removeClass("on");
            $("#intro .intro_container .intro_img .watch_display").removeClass("on");
        } else if (scrollTop <= 0) {
            $("#intro .intro_container .intro_img .mobile_display").removeClass("on");
            $("#intro .intro_container .intro_img .watch_display").removeClass("on");
        }

        if (scrollTop >= 1300 && scrollTop <= 2000) {
            $("#article .article1 .txt_animation").addClass("on");
        } else if (scrollTop >= 2010 ) {
            $("#article .article1 .txt_animation").removeClass("on");
        } else if (scrollTop <= 1154) {
            $("#article .article1 .txt_animation").removeClass("on");
        }


        if (scrollTop >= 2050  && scrollTop <= 2660 ) {
            $("#article .article2 .txt_animation").addClass("on");
        } else if (scrollTop >= 2670 ) {
            $("#article .article2 .txt_animation").removeClass("on");
        } else if (scrollTop <= 1800) {
            $("#article .art-icle2 .txt_animation").removeClass("on");
        }

        if (scrollTop >= 2830 && scrollTop <= 3420 ) {
            $("#article .article3 .txt_animation").addClass("on");
        } else if (scrollTop >= 3430) {
            $("#article .article3 .txt_animation").removeClass("on");
        } else if (scrollTop <= 2500) {
            $("#article .article3 .txt_animation").removeClass("on");
        }
    }

    if (window.innerWidth <= 549 && window.innerWidth >= 500) {
        
        if (scrollTop >= 200 && scrollTop <= 870 ) {
            $("#intro .intro_container .intro_img .mobile_display").addClass("on");
            $("#intro .intro_container .intro_img .watch_display").addClass("on");
        } else if (scrollTop >= 875) {
            $("#intro .intro_container .intro_img .mobile_display").removeClass("on");
            $("#intro .intro_container .intro_img .watch_display").removeClass("on");
        } else if (scrollTop <= 0) {
            $("#intro .intro_container .intro_img .mobile_display").removeClass("on");
            $("#intro .intro_container .intro_img .watch_display").removeClass("on");
        }

        if (scrollTop >= 1300 && scrollTop <= 1925) {
            $("#article .article1 .txt_animation").addClass("on");
        } else if (scrollTop >= 1930 ) {
            $("#article .article1 .txt_animation").removeClass("on");
        } else if (scrollTop <= 1100) {
            $("#article .article1 .txt_animation").removeClass("on");
        }


        if (scrollTop >= 2050  && scrollTop <= 2640 ) {
            $("#article .article2 .txt_animation").addClass("on");
        } else if (scrollTop >= 2645 ) {
            $("#article .article2 .txt_animation").removeClass("on");
        } else if (scrollTop <= 1760) {
            $("#article .art-icle2 .txt_animation").removeClass("on");
        }

        if (scrollTop >= 2630 && scrollTop <= 3390 ) {
            $("#article .article3 .txt_animation").addClass("on");
        } else if (scrollTop >= 3395) {
            $("#article .article3 .txt_animation").removeClass("on");
        } else if (scrollTop <= 2435) {
            $("#article .article3 .txt_animation").removeClass("on");
        }
    }




















});



$(document).ready(function(){

    $('.slider').slick({
        slide: 'li',        //???????????? ????????? ??? ?????? ex) div, li
        infinite : true,     //?????? ?????? ??????
        slidesToShow : 1,        // ??? ????????? ????????? ????????? ??????
        slidesToScroll : 1,        //????????? ????????? ????????? ????????? ??????
        speed : 1000,     // ?????? ?????? ????????? ?????? ?????? ??????????????? ????????? ??????(ms)
        arrows : false,         // ????????? ???????????? ????????? ?????? ??????
        dots : false,         // ???????????? ?????? ????????? ?????????????????? ??????
        autoplay : true,            // ?????? ????????? ?????? ??????
        autoplaySpeed : 2000,         // ?????? ????????? ??? ???????????? ??????????????? ????????? ?????? (ms)
        pauseOnHover : false,        // ???????????? ?????? ??? ????????? ???????????? ???????????? ????????? ??????
        vertical : false,        // ?????? ?????? ???????????? ??????
        draggable : true,     //????????? ?????? ??????
    });

});






