$(document).ready(function() {

    var s = skrollr.init();
    skrollr.menu.init(s, {
        //skrollr will smoothly animate to the new position using `animateTo`.
        animate: true,
        easing: 'sqrt',
        scale: 1,
        duration: function(currentTop, targetTop) {
            return Math.abs(currentTop - targetTop) / 3;
        },
        handleLink: function(link) {
            //return 400; //Hardcoding 400 doesn't make much sense.
            return $(link).data('menu-top');
        }
    });


    var slideshow_text = [
        'Click on zoom button to get the zoom bar and drag it to change the zoom level.',
        'Timer button allows you to set the exposure time. You can also enable a delayed shot.',
        'Rotate the exposure dial to change the exposure of the camera.',
        'Click on the preview button at the bottom to get an approximate preview of the shot before you even take it.',
        'Press the shoot button on the right to start the long exposure shot.',
        'You can always pause a shoot in progress and resume it later.'
    ];

    var slideshow_images = [
        'images/screenshots/zoom.png',
        'images/screenshots/timer.png',
        'images/screenshots/exposure.gif',
        'images/screenshots/preview.png',
        'images/screenshots/shoot.png',
        'images/screenshots/pause.png'
    ];

    var currSlide = 0;
    $('#slideshow-text').html(slideshow_text[currSlide]);
    $("#slideshow-image").attr("src", slideshow_images[currSlide]);

    function changeSlide() {
        currSlide++;
        if (currSlide == 6) currSlide = 0;
        $("#slideshow-text").fadeTo(1000, 0.10, function() {
            $('#slideshow-text').html(slideshow_text[currSlide]);
        }).fadeTo(500, 1);

        $("#slideshow-image").fadeTo(1000, 0.10, function() {
            $("#slideshow-image").attr("src", slideshow_images[currSlide]);
        }).fadeTo(500, 1);
    }

    setInterval(changeSlide, 7000);

});