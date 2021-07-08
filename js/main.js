'use strict'

$(".regular").slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    lazyLoad: true,
    mobileFirst: true,
    infinite: true,
    responsive: [
        {
            breakpoint: 1020,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
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
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});



// Mask

$('#meter').mask("000", { placeholder: "36 м²" });
$('#modal_meter').mask("000", { placeholder: "36 м²" });
$('#modal_phone').mask("0(000)000 00 00");
