
$(document).ready(function() {
    // $('#slideshow').desoSlide({
    //     mainImage: '#slideshow_main_image',
    //     insertion: 'replace',
    //     thumbs: $('a.thumb')
    // });
    $('#slideshow').desoSlide({
        // mainImage: '#slideshow_main_image',
        // insertion: 'replace',
        thumbs: $('ul.slideshow-thumbs li > a'),
        effect: {
            provider: 'animate',
            name: 'fade'
        }
    });

});
