$(document).ready(function() {

    $('#rres').on('click', function() {
    $('#Reserva').removeClass('d-none');
    $('#Reserva').addClass('d-xs-block');
    });
    $('#btn-res').on('click', function() {
    $('#Reserva').removeClass('d-xs-block');
    $('#Reserva').addClass('d-none');    
    });
});

function msjres(){
    var nombre = $('#Nombre1').val();
    var correo = $('#Correo1').val();
    var Asistentes = $('#Asistentes').val();

    alert(`Estimado/a: ${nombre}, agradecemos por reservar con nosotros. Hemos registrado ${Asistentes} asistentes. Se ha enviado el código de confirmación al correo ${correo}. \n Gracias por preferirnos.`);

    
};