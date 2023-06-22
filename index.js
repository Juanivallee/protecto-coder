function correoUsuario(){
    let ponerCorreo = prompt ("Poner correo electronico para enterarte de todas las colecciones y descuentos.")

    if (ponerCorreo == "") {
        console.log ("no se ha ingresado ningun correo electronico")
    }else {
        console.log ("El correo electronico ingresado es: " + ponerCorreo)
    }
}

correoUsuario()


function calcularCostos () {
    let totalCompra = prompt ("Cuantas remeras vas a comprar?")
    let valorRemeras = 7500
    let calculoProductos = valorRemeras * totalCompra
    alert ("El costo final de tu compra es de: " + calculoProductos)
}

calcularCostos()