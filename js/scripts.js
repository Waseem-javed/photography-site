$(document).ready(function () {
    $('.nav-button').click(function () {
        $('.nav-button').toggleClass('change');
    });
    
    $(window).scroll(function () {
        var position = $(this).scrollTop();
        if (position > 200) {
            $('.navbar').addClass('custom-navbar');
        } else {
            $('.navbar').removeClass('custom-navbar');
        }
    });
    
    $(window).scroll(function () {
        var position = $(this).scrollTop();
        if (position >= 1000) {
            $('.left-img').addClass('from-left');
            $('.right-text').addClass('from-right');
        } else {
            $('.left-img').removeClass('from-left');
            $('.right-text').removeClass('from-right');
        }
    });

    $('.gallery-list-item').click(function () {
        let value = $(this).attr('data-filter');
        if (value === 'all') {
            $('.filter').show(3000)
        } else {
            $('.filter').not('.' + value).hide(3000);
            $('.filter').filter('.' + value).show(3000);
        }
    });

    $('.gallery-list-item').click(function () {
        $(this).addClass('active-item').siblings().removeClass('active-item');
     });
});