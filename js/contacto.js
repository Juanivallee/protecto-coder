// datos del formulario al localStorage 

function guardarEnLocalStorage (event) {
    event.preventDefault()


const valorInput1 = document.getElementById('input1').value 
const valorInput2 = document.getElementById('input2').value 
const valorInput3 = document.getElementById('input3').value 
const valorInput4 = document.getElementById('input4').value 

const datos = {
    nombre:  valorInput1,
    correo:  valorInput2,
    cel:     valorInput3,
    mensaje: valorInput4
}

const datosJSON = JSON.stringify(datos);

localStorage.setItem('datosGuardados', datosJSON);

console.log('Datos guardados en el localStorage');
}

const formulario = document.getElementById('miFormulario')
formulario.addEventListener('submit', guardarEnLocalStorage)


// carrito 

const btnCart = document.querySelector('.container-cart-icon')

const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})




// sweet alert 

const button = document.querySelector('#button-enviar')
button.addEventListener('click', ()=>{


    Swal.fire({
        title: 'Tu mensaje fue enviado',
        icon: 'success',
        showConfirmButton: false,
        timer: 2000,
        color: 'white',
        background:'rgb(55, 86, 104)',
        padding: '3em',
    })
})