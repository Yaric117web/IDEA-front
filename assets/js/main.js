'use strict'

$('#slider').slick({
    dots: true,
    mobileFirst: true,
    arrows: false,
});

$("#projectGallery").slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    prevArrow: '<button class="slick-prev d-flex justify-content-center align-items-center"><div class="arrow"></div></button>',
    nextArrow: '<button class="slick-next d-flex justify-content-center align-items-center"><div class="arrow"></div></button>',
    centerMode: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 592,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$("#similarProjects").slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    prevArrow: '<button class="slick-prev d-flex justify-content-center align-items-center"><div class="arrow"></div></button>',
    nextArrow: '<button class="slick-next d-flex justify-content-center align-items-center"><div class="arrow"></div></button>',
    centerMode: false,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
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

$(document).ready(function () {
    if ($('select')) {
        $('select').niceSelect();
    }
})

// Btn Menu Listener
$('#offcanvasWithBackdrop').on('show.bs.offcanvas', function () {
    $('body').toggleClass('modal-open')
})
$('#offcanvasWithBackdrop').on('hidden.bs.offcanvas', function () {
    $('body').toggleClass('modal-open')
})

