'use strict'
/* forms */
/* submit function */
function formSubmit(formId, modalSelector = '#modalForm') {

    let invalidClass = 'is-invalid';

    $(document).on('af_complete', function (event, response) {
        let form = response.form;

        if (form.attr('id') == formId) {

            AjaxForm.Message.success = function (message, sticky) {
                form.find('input, select').removeClass(invalidClass)

                $(modalSelector).modal('hide')
                setTimeout(function () {
                    $('#confirmation').modal('show');
                }, 300)

            };

            AjaxForm.Message.error = function (message, sticky) {
                $.each(response.data, function (index, value) {
                    form.find("[name=" + index + "]").addClass(invalidClass)
                    form.find("[data-name=" + index + "]").addClass('show').html(value)
                });
            };

        } else {
            console.log(response)
        }
    });
}
/* установка курсора в правильную позицию в маске телефона */
$.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};

//шаблон телефона modal form
$("#modalPhone").click(function () {
    $(this).setCursorPosition(2);
}).mask("8(999) 999-9999");

//шаблон телефона one form
$("#oneFormPhone").click(function () {
    $(this).setCursorPosition(2);
}).mask("8(999) 999-9999");

//шаблон телефона two form
$("#twoPhone").click(function () {
    $(this).setCursorPosition(2);
}).mask("8(999) 999-9999");

//шаблон телефона contacts form
$("#contactsPhone").click(function () {
    $(this).setCursorPosition(2);
}).mask("8(999) 999-9999");

//шаблон телефона design form
$("#designPhone").click(function () {
    $(this).setCursorPosition(2);
}).mask("8(999) 999-9999");

//шаблон площади one form
$("#oneFormArea").click(function () {
    $(this).setCursorPosition(0);
}).mask("9?999");


//обработка ответа one form
$(document).ready(() => {
    formSubmit('oneForm');
})

//обработка ответа two form
$(document).ready(() => {
    formSubmit('twoForm');
})

//обработка ответа designform
$(document).ready(() => {
    formSubmit('designForm');
})


//обработка ответа contactsform
$(document).ready(() => {
    formSubmit('contactsForm');
})

//обработка ответа modalform
$(document).ready(() => {
    formSubmit('modalForm', '#backcallmodal');
})