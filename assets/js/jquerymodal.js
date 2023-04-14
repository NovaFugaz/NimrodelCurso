$(document).ready(function() {
    $('.card-img-top').click(function() {
      var modal = $(this).data('modal');
      if (modal == 'modal1') {
        $('.modal-body img').attr('src', './assets/images/bebidas.jpg');
        $('.modal-body .modal-title').html('GASEOSAS');
        $('.modal-body .modal-text').html('Lorem ipsum dolor sit amet consectetur adipisicing elit.');
      } else if (modal == 'modal2') {
        $('.modal-body img').attr('src', './assets/images/tablas.jpg');
        $('.modal-body .modal-title').html('TABLAS');
        $('.modal-body .modal-text').html('Lorem ipsum dolor sit amet consectetur adipisicing elit.');
      } else if (modal == 'modal3') {
        $('.modal-body img').attr('src', './assets/images/shop.jpeg');
        $('.modal-body .modal-title').html('SCHOP CERVEZA');
        $('.modal-body .modal-text').html('Lorem ipsum dolor sit amet consectetur adipisicing elit.');
      }
      $('#' + modal).modal('show');
    });
    $('.modal .close').click(function() {

      $(this).parents('.modal').modal('hide');

      $('.modal-body img').attr('src', '');
    });
  });