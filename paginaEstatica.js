//

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

function cargarProvincias() {
    let provinciasArray = ["Misiones", "San Luis", "San Juan", "Entre Ríos", "Santa Cruz", "Río Negro", "Chubut", "Córdoba", "Mendoza", "La Rioja", "Catamarca", "La Pampa", "Santiago del Estero", "Corrientes", "Santa Fe", "Tucumán", "Neuquén", "Salta", "Chaco", "Jujuy", "Ciudad Autónoma de Buenos Aires", "Buenos Aires", "Tierra del Fuego"];

    let provincia = document.getElementById("datalistOptions");

    for (let i = 0; i < provinciasArray.length; i++) {
        let opcion = document.createElement("option");
        opcion.innerHTML = provinciasArray[i];
        provincia.appendChild(opcion);
    }
}

function validarDatos() {
    let contraseña = document.getElementById("contraseña");
    if (contraseña.value.length < 8) {
        contraseña.classList.add('is-invalid');
    }
} 

window.addEventListener('load', cargarProvincias);
const btnRegistrarse = document.getElementById("btn-registrarse");
btnRegistrarse.addEventListener("click",validarDatos);
