

function tocar() {
    p = document.getElementById('control').innerHTML;
    poner = false;
    p = "";
    if (nombre.value.length == 0) {
        document.getElementById('control').innerHTML = p += "No escribiste un nombre <br/>";
        poner=true
    }else if (nombre.value.length < 4) {

        document.getElementById('control').innerHTML = p += "Nombre muy corto <br/>";
        poner=true;
    }
    if (pass.value.length == 0) {
        document.getElementById('control').innerHTML = p += "No escribiste un contraseña <br/>";
        poner=true;
    }else if (pass.value.length < 5) {

        document.getElementById('control').innerHTML = p += "Contraseña muy corta <br/>";
        poner=true;
    }
    if (pess.value.length > 5 && pess.value.length == pass.value.length) {
        document.getElementById('control').innerHTML = p += "Te has registrado correctamente <br/>";
        poner=true;
        
    }else{
        document.getElementById('control').innerHTML = p += "No coincide la contraseña <br/>"
        poner=true;
    }

    if (poner) {
        p.innerHTML = p;
    }




}
