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
    $( function() {
        $( "#purchaseDate, #todaysDate" ).datepicker();
    } );
});

var myDates = [];
for (var j = 0; j <= 11; j++) {
    myDates[j] = [];
}

$(function() {
    $('#calendar').datepicker();
    initCalendar();
});

function initCalendar() {
    // $('div.ui-widget-header').append('\
    //     <a class="ui-datepicker-clear-month" title="Clear month">\
    //         X\
    //     </a>\
    // ');

    var thisMonth = $($($('#calendar tbody tr')[2]).find('td')[0]).attr('data-month');
    var dateDragStart = undefined; // We'll use this variable to identify if the user is mouse button is pressed (if the user is dragging over the calendar)
    var thisDates = [];
    var calendarTds = $('.ui-datepicker-calendar td:not(.ui-datepicker-unselectable)');
    $('#calendar td').attr('data-event', '');
    $('#calendar td').attr('data-handler', '');
    $('#calendar td a').removeClass('ui-state-active');
    $('#calendar td a.ui-state-highlight').removeClass('ui-state-active').removeClass('ui-state-highlight').removeClass('ui-state-hover');
    $('#calendar td').off();
    for (var i = 0; i < myDates[thisMonth].length; i++) { // Repaint
        var a = calendarTds.find('a').filter('a:textEquals(' + myDates[thisMonth][i].getDate() + ')').addClass('ui-state-active');
        thisDates.push(new Date(a.parent().attr('data-year'), thisMonth, a.html()));
    }

    $('#calendar td').mousedown(function () {  // Click or start of dragging
        dateDragStart = new Date($(this).attr('data-year'), $(this).attr('data-month'), $(this).find('a').html());
        $(this).find('a').addClass('ui-state-active');
        $(this).find('a').addClass('drag-select');
        return false;
    });

    $('#calendar td').mouseup(function () {
        thisDates = [];
        $('#calendar td a.ui-state-active').each(function () { //Save selected dates
            thisDates.push(new Date($(this).parent().attr('data-year'), $(this).parent().attr('data-month'), $(this).html()));
        });
        dateDragStart = undefined;
        $(this).find('a').addClass('drag-select');
        var drugStart = $('.drag-select:first').html();
        var drugOver = $('.drag-select:last').html();
        var Mounth = $('.ui-datepicker-month').html().substr(0,3);


        if (drugStart == drugOver){
            $('.modal-footer').prepend('<div class="selected-dates">\n' +
                '                        <img src="img/Icon-calendar.png" alt="">\n' +
                '                        <span class="last-selected-date">'+ drugOver +'</span> <span class="month">'+ Mounth + '</span> - Done\n' +
                '                    </div>');
        }
        else {
        $('.modal-footer').prepend('<div class="selected-dates">\n' +
            '                        <img src="img/Icon-calendar.png" alt="">\n' +
            '                        <span class="first-selected-date">'+ drugStart +'</span>-\n' +
            '                        <span class="last-selected-date">'+ drugOver +'</span> <span class="month">'+ Mounth + '</span> - Done\n' +
            '                    </div>');
        }
        
        $('.drag-select:first').addClass('drag-start');
        $('.drag-select:last').addClass('drag-over');
        $('.drag-select').removeClass('drag-select');

        return false;

    });
    $(document).mouseup(function () {
        dateDragStart = undefined;
    });

    $('#calendar td').mouseenter(function() {  // Drag over day on calendar
        var thisDate = new Date($(this).attr('data-year'), $(this).attr('data-month'), $(this).find('a').html());
        if (dateDragStart !== undefined && thisDate > dateDragStart) {  // We are dragging forwards
            for (var d = new Date(dateDragStart); d <= thisDate; d.setDate(d.getDate() + 1)) {
                calendarTds.find('a').filter('a:textEquals(' + d.getDate() + ')').addClass('ui-state-active');
            }
            $(this).find('a').addClass('ui-state-active');
        } else if (dateDragStart !== undefined && thisDate < dateDragStart) {  // We are dragging backwards
            for (var d = new Date(dateDragStart); d >= thisDate; d.setDate(d.getDate() - 1)) {
                calendarTds.find('a').filter('a:textEquals(' + d.getDate() + ')').addClass('ui-state-active');
            }
            $(this).find('a').addClass('ui-state-active');}
    });

    $('#calendar td').mouseleave(function() {
        var thisDate = new Date($(this).attr('data-year'), $(this).attr('data-month'), $(this).find('a').html());
        if (dateDragStart !== undefined && thisDate > dateDragStart) {
            for (var d = new Date(dateDragStart); d <= thisDate; d.setDate(d.getDate() + 1)) {
                if (thisDates.find( item => item.getTime() == d.getTime()) === undefined) {
                    calendarTds.find('a').filter('a:textEquals(' + d.getDate() + ')').removeClass('ui-state-active');
                }
            }
        } else if (dateDragStart !== undefined && thisDate < dateDragStart) {
            for (var d = new Date(dateDragStart); d >= thisDate; d.setDate(d.getDate() - 1)) {
                if (thisDates.find( item => item.getTime() == d.getTime()) === undefined) {
                    calendarTds.find('a').filter('a:textEquals(' + d.getDate() + ')').removeClass('ui-state-active');
                }
            }
        }
    });

    $('.ui-datepicker-clear-month').click(function () {
        thisDates = [];
        calendarTds.find('a').removeClass('ui-state-active');
        $('.selected-dates').remove();
    });

    $('a.ui-datepicker-next, a.ui-datepicker-prev').click(function() {
        myDates[thisMonth] = thisDates;
        initCalendar();
    });
}

$.expr[':'].textEquals = function(el, idx, selector) {
    var regExp = new RegExp('^' + selector[3] + '$');
    return regExp.test($(el).text());
};