const usuario2 = document.getElementById('usuario-creado')

document.addEventListener('DOMContentLoaded', () => {
    const usuarioGuardado = localStorage.getItem('usuario')
    if (usuarioGuardado) {
        usuario2.textContent = "Bienvenido nuevamente querido y estimado " + usuarioGuardado;

    }
})
