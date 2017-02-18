$(document).ready(function () {
    $('.block').on('scrollSpy:enter', function () {
        console.log('enter:', $(this).attr('id'));
    });
    $('.block').on('scrollSpy:exit', function () {
        console.log('exit:', $(this).attr('id'));
    });
    $('.scrollspy').scrollSpy();
});

function revealPhone(){
    $("#phone").html("416 897 1656");
    ga('send', 'event', 'revealPhone', 'click', window.location);
}

function revealEmail(){
    $("#email").html("saichaitanya88@gmail.com");
    ga('send', 'event', 'revealEmail', 'click', window.location);
}