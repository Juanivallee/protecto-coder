function correoUsuario(){
    let ponerCorreo = prompt ("Poner correo electronico para enterarte de todas las colecciones y descuentos.")

    if (ponerCorreo == "") {
        console.log ("no se ha ingresado ningun correo electronico")
    }else {
        console.log ("El correo electronico ingresado es: " + ponerCorreo)
    }
}

correoUsuario()
