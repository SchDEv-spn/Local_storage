const form = document.getElementById('formulario-curso')
const inpcurso = document.getElementById('curso')
const inpprofesor = document.getElementById('profesor')
const inpprecio = document.getElementById('precio')
const inpciudad = document.getElementById('ciudad')
const inpcupo = document.getElementById('cupo')
const mensaje = document.getElementById('mensaje-curso')
const btnBorrar = document.getElementById('borrar-curso')

form.addEventListener('submit', (e) =>{
    e.preventDefault();



    const curso = inpcurso.value.trim();
    const profesor = inpprofesor.value.trim();
    const precio = inpprecio.value.trim();
    const ciudad = inpciudad.value.trim();
    const cupo = inpcupo.value.trim();
    if (curso == "" || profesor == ""|| precio == "" || ciudad == "" || cupo == "") {
        alert('POr favor rellenar todos los campos')
        return
    }
//  construimos un objeto con caracteristicas o claves y valores
    const nuevoCurso = {
        nombre : curso,
        profesor: profesor,
        precio: precio,
        ciudad: ciudad,
        cupo: cupo
    }

    localStorage.setItem('curso', JSON.stringify (nuevoCurso));
    form.reset()
})


document.addEventListener('DOMContentLoaded', () =>{
    const cursoCreado = localStorage.getItem('curso');
    if (cursoCreado) {
        const objetoCurso = JSON.parse(cursoCreado);
        mensaje.innerHTML = 'curso:' + objetoCurso.nombre +'<br>'+' profesor:' + objetoCurso.profesor + '<br>'+' precio:' + objetoCurso.precio +'<br>'+' ciudad:' +objetoCurso.ciudad +'<br>'+' cupo:' +objetoCurso.cupo;
        
    }
})