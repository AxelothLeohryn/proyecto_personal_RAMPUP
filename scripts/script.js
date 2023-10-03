//Validacion de formulario
document.getElementById('contact-form').addEventListener('submit', function(event) {

    event.preventDefault();

    const fname = event.target.fname.value;
    const lname = event.target.lname.value;
    const email = event.target.email.value;
    const tlf = event.target.tlf.value;
    const contintent = event.target.continent.value;
    const favoritetech = event.target.favorite_tech.value;
    const comments = event.target.comments.value;
    const accept = event.target.accept.checked;
    const spam = event.target.spam.checked;

    let mensajeFormulario = '';
    if (fname.length < 3 || fname.length > 30) {
        mensajeFormulario += 'Nombre fuera del tamaño 3-30: ' + fname + '\n';
    }
    if (lname.length < 3 || lname.length > 30) {
        mensajeFormulario += 'Apellido fuera del tamaño: 3-30: ' + lname + '\n';
    }
    if (!email.endsWith('.com') && !email.endsWith('.es') || !email.includes('@')) {
        mensajeFormulario += 'Error de validacion: ' + email + '\n';
    }
    if (tlf.length != 11) {
        mensajeFormulario += 'Error de validación: ' + tlf + '\n';
    }
    if (favoritetech == '') {
        mensajeFormulario += 'Selecciona algún dispositivo';
    }
    if (!accept || !spam) {
        mensajeFormulario += 'Por favor, acepta condiciones y envío de publicidad\n'
    }
    if (mensajeFormulario.length != 0) {
        alert(mensajeFormulario);
        let mensajeFormularioPre = document.createElement('pre');
        let mensajeFormularioTexto = document.createTextNode(mensajeFormulario);
        mensajeFormularioPre.appendChild(mensajeFormularioTexto);
        document.getElementById('contact-form').appendChild(mensajeFormularioPre);
    }
});
