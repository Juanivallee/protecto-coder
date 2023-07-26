function guardarEnLocalStorage (event) {
    event.preventDefault()


const valorInput1 = document.getElementById('input1').value 
const valorInput2 = document.getElementById('input2').value 
const valorInput3 = document.getElementById('input3').value 
const valorInput4 = document.getElementById('input4').value 

localStorage.setItem('datoInput1', valorInput1)
localStorage.setItem('datoInput2', valorInput2)
localStorage.setItem('datoInput3', valorInput3)
localStorage.setItem('datoInput4', valorInput4)

console.log('Datos guardados en el localStorage');
}

const formulario = document.getElementById('miFormulario')
formulario.
formulario
addEventListener('submit', guardarEnLocalStorage)


