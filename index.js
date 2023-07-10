function correoUsuario(){
    let ponerCorreo = prompt ("Poner correo electronico para enterarte de todas las colecciones y descuentos.")

    if (ponerCorreo == "") {
        console.log ("no se ha ingresado ningun correo electronico")
    }else {
        console.log ("El correo electronico ingresado es: " + ponerCorreo)
    }
}

correoUsuario()


const productos = [
    {id: 1, Remera: "Crisis in the world", precio: 8500},
    {id: 2, Remera: "The angel guardian", precio: 9500},
    {id: 3, Remera: "Butterfly effect", precio: 8500},
    {id: 4, Remera: "War of the skyes", precio: 9000},
]

let elegirRemera = prompt ('Que remera buscas ? ' + '1- Crisis in the world ' + '2- The angel guardian ' + '3- Butterfly effect ' + '4- War of the skyes')

const buscado = productos.find(producto => producto.id == elegirRemera) 

console.log(buscado);