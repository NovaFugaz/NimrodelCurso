var comuniquemonosBtn = document.getElementById('clcom');
var comuniquemonosForm = document.getElementById('Comuniquémonos');

comuniquemonosBtn.addEventListener('click', () => {
  comuniquemonosForm.classList.remove('d-none');
  comuniquemonosForm.classList.add('d-xs-block');
});

function msjcom(){
// Para que "motivo" tome el valor de la selección, cada value tiene que coincidir, ejemplo: value=1 tiene que ser value=felicitación en minúscula para que no se lea feito, xD.
    var nombre1 = document.getElementById("Nombre").value.trim();
    var correo1 = document.getElementById("Correo").value.trim(); 
    var motivo  = document.getElementById("motivo").value.trim();

    if(nombre1 === ""){
        alert('El campo "Nombre" es obligatorio.');
        }else if(correo1 === ""){
            alert('El campo "Correo Electrónico" es obligatorio.');
                }else if(motivo == "Seleccione"){
                    alert("Por favor, seleccione un motivo.");
                        }else{
    alert(`Muchas gracias, ${nombre1}, hemos recibido su ${motivo}. Le contactaremos a la brevedad al correo: ${correo1}.`)};
};