$( document ).ready(function() {

$(function() {
    // Image ID array
    var images = ['web1', 'web2', 'web3', 'web4', 'web5'];
    var max = images.length;

    // Get current image src
    var curSrc = $('#imageswap').attr('src');


    var curIdx = 0;

    // Search image list for index of current ID
    while (curIdx < max) {
        if (images[curIdx] === curSrc) {
            break;
        }
        curIdx++;
    }

    // Next image on button (and image) click
    $('.right').click( function() {
        curIdx = (curIdx+1) % max;
        $(".slider").attr('src', "img/"+images[curIdx]+'.jpg');
    });

    // Prev image on button click
    $('.left').click( function() {
        curIdx = (curIdx+max-1) % max;
        $(".slider").attr('src', "img/"+images[curIdx]+'.jpg');
    });

});

});