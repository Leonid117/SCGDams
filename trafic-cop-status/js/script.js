$(document).ready(function () {
    jQuery('#new-contact-link-tax-payment-details').click(function () {
        jQuery('.new-contact-link').removeClass('new-contact-link-active');
        jQuery(this).addClass('new-contact-link-active');
        jQuery(this).parents().find('.new-contact-info > div').addClass('hide');
        jQuery(this).parents().find('.tax-payment-details').removeClass('hide');
    });
    jQuery('#new-contact-link-Adress').click(function () {
        jQuery('.new-contact-link').removeClass('new-contact-link-active');
        jQuery(this).addClass('new-contact-link-active');
        jQuery(this).parents().find('.new-contact-info > div').addClass('hide');
        jQuery(this).parents().find('.Address').removeClass('hide');
    });
    jQuery('#new-contact-link-ShippingAddress').click(function () {
        jQuery('.new-contact-link').removeClass('new-contact-link-active');
        jQuery(this).addClass('new-contact-link-active');
        jQuery(this).parents().find('.new-contact-info > div').addClass('hide');
        jQuery(this).parents().find('.ShippingAddress').removeClass('hide');
    });
    jQuery('#new-contact-link-ReportingTags').click(function () {
        jQuery('.new-contact-link').removeClass('new-contact-link-active');
        jQuery(this).addClass('new-contact-link-active');
        jQuery(this).parents().find('.new-contact-info > div').addClass('hide');
        jQuery(this).parents().find('.ReportingTags').removeClass('hide');
    });
    jQuery('#new-contact-link-Notes').click(function () {
        jQuery('.new-contact-link').removeClass('new-contact-link-active');
        jQuery(this).addClass('new-contact-link-active');
        jQuery(this).parents().find('.new-contact-info > div').addClass('hide');
        jQuery(this).parents().find('.Notes').removeClass('hide');
    });
    $("#resizable").resizable({
        resize: function (event, ui) {
            ui.size.height = ui.originalSize.height;
        }
    });
    var mouseDown;
    var mouseMoveSidebar;

    $('.ui-resizable-handle').mousedown(function () {
        mouseDown = true;
    });
    $(window).mousemove(function () {
        if (mouseDown) {
            mouseMoveSidebar = true;
        }
    });
    $(window).mouseup(function () {
        if (mouseMoveSidebar && mouseDown) {
        }
        else if (mouseDown && !mouseMoveSidebar) {
            $('.sidebar').toggleClass('close-sidebar');
            if ($('.sidebar').hasClass('close-sidebar')) {
                $('.sidebar').css("width", "65");
            }
            else {
                $('.sidebar').css("width", "auto");

            }
        }
        mouseDown = false;
        mouseMoveSidebar = false;

    });


    $(window).bind("resize", function () {
        if ($('.sidebar').width() < 70) {
            $('.sidebar').addClass('close-sidebar')
        }
    });
    if ($('.sidebar').width() < 70) {
        $('.sidebar').addClass('close-sidebar')
    }

    $('.sidebar').bind("resize", function () {
        if ($(this).width() < 70) {
            $(this).addClass('close-sidebar')
        } else {
            $(this).removeClass('close-sidebar')
        }
    });

    $('.animated-icon4').click(function () {
        $(this).toggleClass('open');
    });
    jQuery(".col3-status").click(function () {
        jQuery(this).parent().find('.context-menu-status').removeClass('hide').addClass('context-menu-status-open');
    });
    jQuery(".context-menu-status-close").click(function () {
        jQuery(this).parent('.context-menu-status').addClass('hide');
    });
    jQuery(function ($) {
        $(document).mouseup(function (e) { // событие клика по веб-документу
            var div = $(".context-menu-status.context-menu-status-open"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.addClass('hide'); // скрываем его
            }
        });
    });
    jQuery('#Storefront').click(function () {
        jQuery('.ugp-link').removeClass('ugp-link-active');
        jQuery(this).addClass('ugp-link-active');
        jQuery(this).parents().find('#Administration-content').addClass('hide');
        jQuery(this).parents().find('#Storefront-content').removeClass('hide');
    });
    jQuery('#Administration').click(function () {
        jQuery('.ugp-link').removeClass('ugp-link-active');
        jQuery(this).addClass('ugp-link-active');
        jQuery(this).parents().find('#Storefront-content').addClass('hide');
        jQuery(this).parents().find('#Administration-content').removeClass('hide');
    });
});