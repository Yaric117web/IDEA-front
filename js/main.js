'use strict'

$(".regular").slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
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
    ]
});



// Mask

$('#meter').mask("000", { placeholder: "Площядь в м²" });
$('#modal_meter').mask("000", { placeholder: "Площядь в м²" });
$('#modal_meter2').mask("000", { placeholder: "Площядь в м²" });
$('#modal_meter3').mask("000", { placeholder: "Площядь в м²" });
$('#modal_meter4').mask("000", { placeholder: "Площядь в м²" });

$('#phone_about').mask("+7-999-999-99-99");
$('#phone_about2').mask("+7-999-999-99-99");
$('#phone_apartment').mask("+7-999-999-99-99");
$('#phone_apartment2').mask("+7-999-999-99-99");
$('#phone_apartment3').mask("+7-999-999-99-99");
$('#contsct_phone1').mask("+7-999-999-99-99");
$('#contsct_phone2').mask("+7-999-999-99-99");
$('#desing_phone1').mask("+7-999-999-99-99");
$('#desing_phone2').mask("+7-999-999-99-99");
$('#house_phone1').mask("+7-999-999-99-99");
$('#house_phone2').mask("+7-999-999-99-99");
$('#house_phone3').mask("+7-999-999-99-99");
$('#index_phone1').mask("+7-999-999-99-99");
$('#index_phone2').mask("+7-999-999-99-99");
$('#index_phone3').mask("+7-999-999-99-99");
$('#index_phone4').mask("+7-999-999-99-99");
$('#singl_page_project_phone').mask("+7-999-999-99-99");
$('#singl_page_project_phone2').mask("+7-999-999-99-99");
$('#projects_phone1').mask("+7-999-999-99-99");
$('#projects_phone2').mask("+7-999-999-99-99");
$('#portfolio_phone1').mask("+7-999-999-99-99");
$('#portfolio_phone2').mask("+7-999-999-99-99");
$('#repairs_apartment_page_phone1').mask("+7-999-999-99-99");
$('#repairs_apartment_page_phone2').mask("+7-999-999-99-99");



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

// Validation
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()


// Output of numbers
function numberWithSpaces(x) {
    let parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}

let price = document.querySelectorAll('.price');

if (price) {
    price.forEach(el => {
        el.insertAdjacentText('afterbegin', `${numberWithSpaces(2300)}`)
    })
}

$(document).ready(function () {
    if ($('select')) {
        $('select').niceSelect();
    }
})



//Conclusion Price List

const priceList = [
    {
        title: "Дома из кирпича",
        price: 16000,
    },
    {
        title: "Дома из монолитного железобетона",
        price: 24000,
    },
    {
        title: "Дома из пеноблоков и газобетона",
        price: 11000,
    },
    {
        title: "Каркасные дома",
        price: 9000,
    },
    {
        title: "Керамзитобетонные дома",
        price: 16000,
    },
    {
        title: "Дома из бревна",
        price: 13000,
    },
    {
        title: "Дома из клееного бруса",
        price: 18000,
    },
    {
        title: "Дома из окорённого бруса",
        price: 14000,
    },
    {
        title: "Дома из нестроганного бруса",
        price: 17000,
    },
    {
        title: "Дома из профилированного бруса",
        price: 11000,
    },
    {
        title: "Дома из СИП - панелей",
        price: 9000,
    },

]

const priceListTitle = document.getElementById('price_title_list');
const priceListPrice = document.getElementById('price_List_price');

if (priceListPrice && priceListTitle) {

    priceList.forEach(item => {

        priceListTitle.insertAdjacentHTML('afterbegin', `
                <li class="mb-3 ms-2 ms-md-3 list_item_li">
                    <span>
                        ${item.title}
                    </span>
                </li>
            `);
        priceListPrice.insertAdjacentHTML('afterbegin', `
                <li class="mb-3 list_item_li">
                    <span>
                        <span>от</span>
                        <span class="span_price">${numberWithSpaces(item.price)}</span>
                        <span>₽/м<sup>2</sup></span>
                    </span>
                </li>
            `);
    })
}



// One Project Price inner

const oneProjectPrice1 = document.querySelector('.price_project1');
const oneProjectPrice2 = document.querySelector('.price_project2');

if (oneProjectPrice1 && oneProjectPrice2) {
    oneProjectPrice1.insertAdjacentText('afterbegin', numberWithSpaces(82300))
    oneProjectPrice2.insertAdjacentText('afterbegin', numberWithSpaces(82300))
}


