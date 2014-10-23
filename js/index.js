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


});