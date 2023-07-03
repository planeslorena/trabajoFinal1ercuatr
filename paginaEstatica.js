//Función para cargar nombre de las provincias en el formulario
const provinciasArray = ["Misiones", "San Luis", "San Juan", "Entre Ríos", "Santa Cruz", "Río Negro", "Chubut", "Córdoba", "Mendoza", "La Rioja", "Catamarca", "La Pampa", "Santiago del Estero", "Corrientes", "Santa Fe", "Tucumán", "Neuquén", "Salta", "Chaco", "Jujuy", "Ciudad Autónoma de Buenos Aires", "Buenos Aires", "Tierra del Fuego"];

//Función que carga las provincias en el formulario de registrarse
function cargarProvincias() {
    const provincia = document.getElementById("datalistOptions");

    for (let i = 0; i < provinciasArray.length; i++) {
        let opcion = document.createElement("option");
        opcion.innerHTML = provinciasArray[i];
        provincia.appendChild(opcion);
    }
}

//Funcion para calcular la edad 
const esMayor = (fechaNacimiento) => {
    let esMayorEdad = false;
    const fechaActual = new Date();
    const añoActual = fechaActual.getFullYear();
    const mesActual = fechaActual.getMonth() + 1;
    const diaActual = fechaActual.getDate();
    const añoNac = Number(fechaNacimiento.substring(0,4));
    const mesNac = Number(fechaNacimiento.substring(5,7));
    const diaNac = Number(fechaNacimiento.substring(8,10));

    if ((añoActual-añoNac) > 18) {
        esMayorEdad = true;
    } else if ((añoActual-añoNac) == 18) {
        if(mesActual >= mesNac &  diaActual >= diaNac) {
            esMayorEdad = true;
        }
    }
    return esMayorEdad;
}

const agregarAtributoCheck = (event) => {
    const checkbox = event.target;
    if (checkbox.hasAttribute("checked") == false) {
        checkbox.setAttribute("checked","true");
    } else {
        checkbox.removeAttribute("checked");
    }
}

//Funcion para validar los dator cargados por el usuario en el formulario de registrarse
const validarDatos = () => {
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const provincia = document.getElementById("provincia");
    const localidad = document.getElementById("localidad");
    const fechaNacimiento = document.getElementById("fechaNacimiento");
    const mail = document.getElementById("mail");
    const contraseña = document.getElementById("contraseña");
    const contraseña2 = document.getElementById("contraseña2");
    const check = document.getElementById("check");
    const formulario = document.getElementById("form");
    let formularioCorrecto = true;
    
    //Valida nombre
    if (nombre.value.trim().length < 3)  {
        nombre.classList.add("is-invalid");
        nombre.classList.remove("is-valid");
        formularioCorrecto = false;
    } else {
        nombre.classList.remove("is-invalid");
        nombre.classList.add("is-valid");
    }

    //Valida apellido
    if (apellido.value.trim().length < 3)  {
        apellido.classList.add("is-invalid");
        apellido.classList.remove("is-valid");
        formularioCorrecto = false;
    } else {
        apellido.classList.remove("is-invalid");
        apellido.classList.add("is-valid");
    }

    //Valida provincia
    let provcorrecta = false;
    for (let i = 0; i < provinciasArray.length; i++) {
        if (provincia.value == provinciasArray[i]) {
            provcorrecta = true;
        }
    }

    if (provcorrecta == false)  {
        provincia.classList.add("is-invalid");
        provincia.classList.remove("is-valid");
        formularioCorrecto = false;
    } else {
        provincia.classList.remove("is-invalid");
        provincia.classList.add("is-valid");
    }
    
    //Valida localidad
    if (localidad.value.trim().length < 4)  {
        localidad.classList.add("is-invalid");
        localidad.classList.remove("is-valid");
        formularioCorrecto = false;
    } else {
        localidad.classList.remove("is-invalid");
        localidad.classList.add("is-valid");
    }

    //Valida fecha de nacimiento
    if (fechaNacimiento.value == "") {
        fechaNacimiento.classList.add("is-invalid");
        fechaNacimiento.classList.remove("is-valid");
        formularioCorrecto = false;
    } else {
        const mayorEdad = esMayor(fechaNacimiento.value);
        if (mayorEdad == false) {
            fechaNacimiento.classList.add("is-invalid");
            fechaNacimiento.classList.remove("is-valid");
            fechaNacimiento.nextElementSibling.innerHTML = "Para registrarse debe ser mayor de edad."
            formularioCorrecto = false;
        } else {
            fechaNacimiento.classList.remove("is-invalid");
            fechaNacimiento.classList.add("is-valid");
        }
    }
    //Valida mail
    const valorMail = mail.value.trim();
    let tieneArroba = false;
    for(let i=0;i<valorMail.length;i++){
        if(valorMail.substring(i, i+1) == "@") {
            tieneArroba = true;
        }
    }

    if (valorMail == "") {
        mail.classList.add("is-invalid");
        mail.classList.remove("is-valid");
        formularioCorrecto = false;
    } else if (tieneArroba == false ) {
        mail.classList.add("is-invalid");
        mail.classList.remove("is-valid");
        mail.nextElementSibling.innerHTML = "El formato del mail no es valido."
        formularioCorrecto = false;
    } else {
        mail.classList.remove("is-invalid");
        mail.classList.add("is-valid");
    }

    //Valida contraseña
    //Me fijo si la contraseña tiene alguna mayuscula
    const valorContraseña = contraseña.value.trim();
    let tieneMay = false;
    for(let i=0;i<valorContraseña.length;i++){
        if(valorContraseña.substring(i, i+1).toUpperCase() == valorContraseña.substring(i, i+1)) {
            tieneMay =true;
        }
    }

    if (contraseña.value.trim().length < 8 || tieneMay == false)  {
        contraseña.classList.add("is-invalid");
        contraseña.classList.remove("is-valid");
        formularioCorrecto = false;
    } else {
        contraseña.classList.remove("is-invalid");
        contraseña.classList.add("is-valid");
    }

    //Valida repetir contraseña
    if (contraseña2.value.length < 8) {
        contraseña2.classList.add("is-invalid");
        contraseña2.classList.remove("is-valid");
        formularioCorrecto = false;
    } else if (contraseña.value != contraseña2.value){
        contraseña2.classList.add("is-invalid");
        contraseña2.classList.remove("is-valid");
        contraseña2.nextElementSibling.innerHTML = "Las contraseñas no son iguales."
        formularioCorrecto = false;
    } else {
        contraseña2.classList.remove("is-invalid");
        contraseña2.classList.add("is-valid");
    }

    //Valida check
    if (check.hasAttribute("checked") == false) {
        check.classList.add("is-invalid");
        check.classList.remove("is-valid");
        formularioCorrecto = false;
    } else {
        check.classList.remove("is-invalid");
        check.classList.add("is-valid");
    }


    if (formularioCorrecto) {
        console.log(nombre.value);
        console.log(apellido.value);
        console.log(provincia.value);
        console.log(localidad.value);
        console.log(fechaNacimiento.value);
        console.log(mail.value);
        console.log(contraseña.value);
        console.log(contraseña2.value);
        check.nextElementSibling.nextElementSibling.innerHTML= "Usted se registro exitosamente, ya puede comenzar a usar Check It!"
        /*nombre.classList.remove("is-valid");
        apellido.classList.remove("is-valid");
        provincia.classList.remove("is-valid");
        localidad.classList.remove("is-valid");
        fechaNacimiento.classList.remove("is-valid");
        mail.classList.remove("is-valid");
        contraseña.classList.remove("is-valid");
        contraseña2.classList.remove("is-valid");
        check.classList.remove("is-valid");
        check.removeAttribute("checked");*/
        formulario.reset();
    } 
} 

//Agrego un escuchador de eventos para cuendo se presiona el botón Registrarse,
// el cual llama a la función de validar los datos cargados
const inicializarJs = () => {
    const btnRegistrarse = document.getElementById("btn-registrarse");
    btnRegistrarse.addEventListener('click', function (e) {
        e.preventDefault();
        validarDatos();
    }); 

    const checkbox = document.getElementById("check");
    checkbox.addEventListener('click', function (e) {
        agregarAtributoCheck(e);
    }); 
}

//Al cargar la pagina se llama a la funcion para cargar los nombres de las provincias
window.addEventListener('load', cargarProvincias);
window.addEventListener('load', inicializarJs);


