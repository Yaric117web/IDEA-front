'use strict'

// Slick plain
$(".regular").slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    lazyLoad: true,
    mobileFirst: true,
    infinite: true,
    lazyLoad: 'ondemand',
    responsive: [
        {
            breakpoint: 1020,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '50px',
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 280,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


// More link
$(document).ready(function () {
    let showChar = 400;
    let ellipsestext = "...";
    let moretext = "Показать полностью";
    let lesstext = "Show less";


    $('.more').each(function () {
        let content = $(this).html();

        if (content.length > showChar) {

            let c = content.substr(0, showChar);
            let h = content.substr(showChar, content.length - showChar);

            let html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

            $(this).html(html);
        }

    });

    $(".morelink").click(function () {
        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});




// Output of numbers
function numberWithSpaces(x) {
    let parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}

// Price num in Project Page
$('.price').append(`${numberWithSpaces(2300)} ₽`)


// Nice Select
$(document).ready(function () {
    if ($('select')) {
        $('select').niceSelect();
    }
})



// One Project Price inner
$('.price_project1').append(`${numberWithSpaces(82300)} ₽`)
$('.price_project2').append(`${numberWithSpaces(82300)} ₽`)


// Btn Menu Listener
$('#offcanvasWithBackdrop').on('show.bs.offcanvas', function () {
    $('body').toggleClass('modal-open')
})
$('#offcanvasWithBackdrop').on('hidden.bs.offcanvas', function () {
    $('body').toggleClass('modal-open')
})

// Main Slider-baner On index.html
$('.slider').slick({
    dots: true,
    mobileFirst: true,
    arrows: false,
});