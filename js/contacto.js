// datos del formulario al localStorage 

function guardarEnLocalStorage (event) {
    event.preventDefault()


const valorInput1 = document.getElementById('input1').value 
const valorInput2 = document.getElementById('input2').value 
const valorInput3 = document.getElementById('input3').value 
const valorInput4 = document.getElementById('input4').value 

localStorage.setItem('Nombre:', valorInput1)
localStorage.setItem('Correo:', valorInput2)
localStorage.setItem('Cel:', valorInput3)
localStorage.setItem('Mensaje:', valorInput4)

console.log('Datos guardados en el localStorage');
}

const formulario = document.getElementById('miFormulario')
formulario.
formulario
addEventListener('submit', guardarEnLocalStorage)


// carrito 

const btnCart = document.querySelector('.container-icon-cart')

const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})



