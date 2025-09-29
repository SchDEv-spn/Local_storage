// Capturamos el formulario y los inputs por su id desde el HTML
const form = document.getElementById('formulario-curso')
const inpcurso = document.getElementById('curso')
const inpprofesor = document.getElementById('profesor')
const inpprecio = document.getElementById('precio')
const inpciudad = document.getElementById('ciudad')
const inpcupo = document.getElementById('cupo')
const mensaje = document.getElementById('mensaje-curso')
const btnBorrar = document.getElementById('borrar-curso')

// Agregamos un "escuchador" al formulario cuando se envía (submit)
form.addEventListener('submit', (e) =>{
    // Evitamos que la página se recargue al enviar el formulario
    e.preventDefault()

    // Guardamos en variables lo que escribió el usuario en los inputs, quitando espacios extra
    const curso = inpcurso.value.trim();
    const profesor = inpprofesor.value.trim();
    const precio = inpprecio.value.trim();
    const ciudad = inpciudad.value.trim();
    const cupo = inpcupo.value.trim();

    // Validamos: si algún campo está vacío, mostramos un alerta y detenemos el proceso
    if (curso == "" || profesor == ""|| precio == "" || ciudad == "" || cupo == "") {
        alert('POr favor rellenar todos los campos')
        return;
    }

    // Creamos un objeto con las características del curso
    const nuevoCurso = {
        nombre : curso,
        profesor: profesor,
        precio: precio,
        ciudad: ciudad,
        cupo: cupo
    }

    // Obtenemos del localStorage el arreglo "cursos".
    // Si no existe aún, creamos uno vacío []
    const cursosGuardados = JSON.parse(localStorage.getItem('cursos')) || [];

    // Agregamos el nuevo curso al arreglo de cursos
    cursosGuardados.push(nuevoCurso)

    // Guardamos nuevamente el arreglo en localStorage convertido a JSON
    localStorage.setItem('cursos', JSON.stringify (cursosGuardados));

    // Limpiamos el formulario para que quede listo para un nuevo registro
    form.reset()
})


// Este bloque se ejecuta apenas la página termina de cargar
document.addEventListener('DOMContentLoaded', () =>{
    // Recuperamos del localStorage un curso con la clave "curso" (¡ojo! diferente a "cursos")
    const cursoCreado = localStorage.getItem('curso');

    // Si existe algo guardado bajo la clave "curso", lo mostramos en el h2 mensaje
    if (cursoCreado) {
        const objetoCurso = JSON.parse(cursoCreado);
        mensaje.innerHTML = 'curso:' + objetoCurso.nombre +'<br>'
                          + ' profesor:' + objetoCurso.profesor + '<br>'
                          + ' precio:' + objetoCurso.precio +'<br>'
                          + ' ciudad:' + objetoCurso.ciudad +'<br>'
                          + ' cupo:' + objetoCurso.cupo;
    }
});
