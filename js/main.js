$( document ).ready(function() {

$(function() {
    // Image ID array
    var images = ['web1', 'web2', 'web3', 'web5', 'web6','web7', 'web8', 'web9'];
    var max = images.length;




    var curIdx = 0;



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