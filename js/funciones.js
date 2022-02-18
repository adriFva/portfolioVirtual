/FORMULARIOS 
// FUNCIONES DE CONTACTO
    function validarContacto(){
        const nombre = document.querySelector("#nom").value;
        const email = document.querySelector("#email").value;
        const sms = document.querySelector("#mensaje").value;
        let errores = 0;

        if (nombre.length < 3 || nombre.length >20) {
            errores ++;
            console.log("error en nombre")
        }
        if (email.length < 0 || email.length > 20 || email.indexOf ("@") < 0 || email.indexOf(" ")>-1) {
            errores ++;
            console.log("error en email")
        }
        if (sms.length <= 0) {
            errores++;
            console.log("error en mensaje")
        }
        if (errores > 0){
            alert ("Numero de errores: " + errores);
            return false;
        }
        else{
            alert("Mensaje Enviado");
            return false;
        }
    }

    //ANIMACIONES
    function animreg(){
        document.querySelector("#traslado").classList.toggle("tarjeta");
    }
