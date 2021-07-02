/**
 * Menu open on click
 */
$(".header__button").on("click", function () {
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

/**
 * Masonry lib option
 */
$('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 5,
    gutter: 0,
    percentPosition: true
});