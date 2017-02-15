$(function () {
    //Efecto menu
    $('nav.menu').find('a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        }).animate({
            'top': '0'
        }, 1000 + (index * 500));
    });
    var ventana = $(window),
        textos = $('header').find('.textos');
    //Efecto Header
    if (ventana.width() > 800) {
        textos.css({
            opacity: 0,
            marginTop: 0
        }).animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1500);
    }
    var acercaDe = $('#acerca-de').offset().top,
        menu = $('#platillos').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top,
        html = $('html, body');

    $('#btn-acerca-de').on('click', function(e) {
        e.preventDefault();
        html.animate({
            scrollTop: acercaDe
        }, 500);
    });
    $('#btn-menu').on('click', function(e) {
        e.preventDefault();
        html.animate({
            scrollTop: menu
        }, 500);
    });
    $('#btn-galeria').on('click', function(e) {
        e.preventDefault();
        html.animate({
            scrollTop: galeria
        }, 500);
    });
    $('#btn-ubicacion').on('click', function(e) {
        e.preventDefault();
        html.animate({
            scrollTop: ubicacion
        }, 500);
    });
    ventana.scroll(function() {
        if (ventana.width() > 800) {
            var scroll = ventana.scrollTop();
            textos.css({
                'transform': 'translate(0px, ' + scroll / 2 + '%)'
            });
            $('.acerca-de article').css({
                'transform': 'translate(0px, -' + scroll / 4 + '%)'
            });
        }
    });
    ventana.resize(function(){
        if (ventana.width() < 800) {
            textos.css({
                'transform': 'translate(0px, 0)'
            });
            $('.acerca-de article').css({
                'transform': 'translate(0px, 0)'
            });
        }
    });
});