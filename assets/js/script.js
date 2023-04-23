// HABILITAR TOOLTIP
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//SMOOTH SCROLL
$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function(){
                window.location.hash = hash;
            });
        } 
    });
});


//VALIDAR QUE LOS CAMPOS NO ESTÉN VACÍOS
function validar() {
    var nombre = document.getElementById("nombre").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre == "") {
        alert("Por favor, ingrese su nombre.");
        event.preventDefault();
    }else if (asunto == "") {
        alert("Por favor, ingrese su asunto.");
        event.preventDefault();
    }else if (mensaje == "") {
        alert("Por favor, ingrese su mensaje.");
        event.preventDefault();
    }else{
        alert("Mensaje enviado correctamente.")
    }
}
  