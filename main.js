const form = document.getElementById('formulario')
const input = document.getElementById('input')
const saludo = document.getElementById('saludo')
const borrar = document.getElementById('borrar')


form.addEventListener('submit', (e) => {
    e.preventDefault
    const nombre = input.value.trim();

    if (nombre == "") {
        alert('Ingrese su nombre pendejo')
        return;
    }
    // difinimos clase y valor
    localStorage.setItem('usuario', nombre);
    saludo.textContent = 'bienvenido ' + nombre;
    input.value = ""
})
document.addEventListener('DOMContentLoaded', () => {
    const usuarioGuardado = localStorage.getItem('usuario')
    if (usuarioGuardado) {
        saludo.textContent = "Bienvenido nuevamente querido y estimado " + usuarioGuardado;

    }
})
borrar.addEventListener("click", () => {
    localStorage.removeItem('usuario')
    saludo.textContent = ('Bienvenido usuario indefinido ')
})
