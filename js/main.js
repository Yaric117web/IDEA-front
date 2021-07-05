'use strict'
/**
 * Menu open on click
 */
$(".header__button").on("click", function () {
    $("body").addClass("open")
})


/**
 * Masonry lib option
 */
$('.grid').masonry({
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer',
    itemSelector: '.grid-item',
    percentPosition: true
});