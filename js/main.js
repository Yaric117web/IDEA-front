// Menu open on click
/**
 * function hendlerClick
 * Add event 
 */
$(".header__button").on("click", function hendlerClick() {
    $(".header-dropmenu").addClass("open")
    $(".header-closemenu").addClass("open")
    $(".header-mask").addClass("open")
    $("body").addClass("open")
})
$(".header-closemenu").on("click", function () {
    $(".header-dropmenu").removeClass("open")
    $(".header-closemenu").removeClass("open")
    $(".header-mask").removeClass("open")
    $("body").removeClass("open")
})
$(".header-mask").on("click", function () {
    $(".header-dropmenu").removeClass("open")
    $(".header-closemenu").removeClass("open")
    $(".header-mask").removeClass("open")
    $("body").removeClass("open")
})


$(".section-galery__img img").on("click", function hendlerClick() {
    $(".header-dropmenu").addClass("open")
    $(".header-closemenu").addClass("open")
    $(".header-mask").addClass("open")
    $("body").addClass("open")
})
