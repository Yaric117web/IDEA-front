/* Разделение цены */
function priceDelimeter() {

    $(document).find('.price').each(function () {
        $(this).text($(this).html().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '))
    })

    /* $('#price, #price2').keyup(function () {
        $(this).val($(this).val().replace(/[^\d]/g, '').replace(/\B(?=(?:\d{3})+(?!\d))/g, ' '))
    }); */
}

$(document).ready(priceDelimeter());

if (typeof (pdoPage) == 'undefined') {
    console.log("You must load pdoPage's scripts for using ajax mode in this filter!")
} else {
    pdoPage.callbacks['after'] = function (config, response) {
        priceDelimeter();
    }

    $(document).on('pdopage_load', function (e, config, response) {
        priceDelimeter();
        let images = $('#pdopage').find(".lazyload");
        if (images) {
            lazyload(images);
        }
        return false;
    });
}

/* обработка фильтра */
filter = {

    emptyContainer: '.catalog_empty',
    countContainer: '#searchNumber',
    loaderContainer: '#catalogLoader',

    collectParams: function (form) {
        let newParams = {};
        $(form + ' input, select').each(function () {
            let type = $(this).attr('type'),
                name = $(this).attr('name'),
                disable = $(this).attr('disabled'),
                value = $(this).val();

            if (typeof disable !== 'undefined' && disable !== false || value === 'unset') {
                return;
            }
            switch (type) {
                case 'checkbox':
                    if ($(this).is(":checked")) {
                        if (!newParams.hasOwnProperty(name)) {
                            newParams[name] = [];
                        }
                        newParams[name].push(value);
                    }
                    break;
                case 'radio':
                    if ($(this).is(":checked")) {
                        newParams[name] = value;
                    }
                    break;
                case 'text':
                    if (name == 'price[]' || name == 'all_area[]' || name == 'id[]') {

                        if (!newParams.hasOwnProperty(name)) {
                            newParams[name] = [];
                        }
                        newParams[name].push(value);
                    } else {
                        newParams[name] = value;
                    }
                    break;

                default:
                    newParams[name] = value;
                    break;
            }
        });
        return newParams;
    },

    render: function (form) {
        let message = 0;
        $(form).on('change keyup', function (e) {
            e.preventDefault()
            message = 1;
            $('.rows').addClass('loading');

            $('form').find('input, select').filter(function () {
                return !$.trim(this.value).length;
            }).prop('disabled', true);

            let filterParams = filter.collectParams(form),
                filterSelectParams = filter.collectParams('.form-select-object');

            let obj = Object.assign(filterParams, filterSelectParams);

            pdoPage.Hash.set(obj);
            delete (pdoPage.keys.page);

            let config = pdoPage.configs['page'],
                key = config['pageVarKey'],
                href = location.href,
                page = 1;

            config['connectorUrl'] = href

            if (config.history) {
                pdoPage.Hash.remove(key);
            }
            pdoPage.loadPage(href, config);
            /* on load */
            $(document).on('pdopage_load', function (e, config, response) {
                $(config['rows']).show();
                message = 0;

                if (config['mode'] == 'scroll') {
                    pdoPage.Reached = false;
                    var $window = $(window);
                    if ($window.scrollTop() > $(config['wrapper']).height() - $window.height()) {
                        pdoPage.Reached = true;
                        pdoPage.addPage(config);
                    }
                } else if (config['mode'] == 'button') {
                    if (response['pages'] === response['page']) {
                        $(config['more']).hide();
                    } else {
                        $(config['more']).show();
                    }
                }
            });

            pdoPage.callbacks['after'] = function (config, response) {
                $(document).find(filter.countContainer).text(response.total);
                if (response.total !== 0) $(document).find(filter.emptyContainer).hide();
                priceDelimeter();
                $('.rows').removeClass('loading');
                $(filter.loaderContainer).toggleClass('d-none')
                return false;
            }

            /* /onload */

            $('form').find('input, select').filter(function () {
                return !$.trim(this.value).length;
            }).prop('disabled', false);
        });
    },

    pageload: function () {

        if (typeof (pdoPage) == 'undefined') {
            console.log("You must load pdoPage's scripts for using ajax mode in this filter!")
        } else {

            pdoPage.callbacks['before'] = function (config) {
                $(filter.loaderContainer).toggleClass('d-none')
            };

            pdoPage.callbacks['after'] = function (config, response) {
                $(filter.loaderContainer).toggleClass('d-none')
                return false;
            }
        }
    },

    pageEmpty: function () {
        $(document).on('pdopage_empty', function (e, config, response) {
            $(config['rows']).hide();
            $(config['more']).hide();
            $(filter.loaderContainer).toggleClass('d-none')

            $(document).find(filter.countContainer).text(response.total);
            $(document).find(filter.emptyContainer).show();
            console.log('empty')
            return false;
        });
    },

    action: function (form) {

        if (typeof (jQuery) == 'undefined') {
            console.log("You must load jQuery for using ajax mode in pdoPage.");
            //return;
        }

        if (typeof (pdoPage) == 'undefined') {
            console.log("You must load pdoPage scripts for using ajax mode in pdoPage.");
            //return;
        }

        filter.render(form);
        filter.pageload()
        filter.pageEmpty()
    }
}

$(document).ready(function () {
    filter.action('#sortForm')
});