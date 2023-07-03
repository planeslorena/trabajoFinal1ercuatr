const agregarLista = () => {
    //Tomo el div que contiene las listas
    let divTareas = document.querySelector(".div-listas");

    //Creo el div para la nueva lista y le agrego la clase con el estilo de nueva lista
    let nuevaLista = document.createElement("div");
    nuevaLista.classList.add("div-lista-nueva");
    nuevaLista.setAttribute("id", "div-lista-nueva")

    //agrego la nueva lista al div principal
    divTareas.appendChild(nuevaLista);

    //creo un div para boton lista
    let btnEliminarLista = document.createElement("button");
    btnEliminarLista.classList.add("btn", "bi", "bi-x");
    btnEliminarLista.setAttribute("onclick", "eliminarLista(event)");
    //lo agrego al div nueva lista
    nuevaLista.appendChild(btnEliminarLista);

    //creo un div para el encabezado de la lista
    let divNombreLista = document.createElement("div");
    divNombreLista.classList.add("div-nombre-lista");
    divNombreLista.setAttribute("id", "div-nombre-lista");

    //lo agrego al div nueva lista
    nuevaLista.appendChild(divNombreLista);

    //Le agrego el input para el nombre de lista
    let inputnombreLista = document.createElement("input");
    inputnombreLista.setAttribute("type", "text");
    inputnombreLista.setAttribute("placeholder", "Ingrese nombre de la lista");
    inputnombreLista.setAttribute("id", "input-nombre-lista");
    inputnombreLista.classList.add("input-nombre-lista");
    inputnombreLista.classList.add("form-control");

    //agrego el input al encabezado
    divNombreLista.appendChild(inputnombreLista);

    //Le agrego boton para confirmar nombre lista
    let boton = document.createElement("button");
    boton.classList.add("btn", "bi", "bi-check");
    boton.setAttribute("id", "btn-agregar");
    boton.setAttribute("onclick", "guardarNombreLista(event)");
    //agrego el boton al encabezado
    divNombreLista.appendChild(boton);

    //Agrego div para mensaje de alerta cuando el nombre esta vacio
    let divAlerta = document.createElement("div");
    divAlerta.classList.add("div-alerta");

    //lo agrego al div nueva lista
    nuevaLista.appendChild(divAlerta);
}

//Funcion para eliminar lista entera
const eliminarLista = (event) => {
    event.target.parentElement.remove();
}

//Funcion que corrige nombres ingresados con la primer letra mayuscula
const corregirNombre = (nombreLista) => {
    let nombreCorregido = nombreLista.substring(0, 1).toUpperCase() + nombreLista.substring(1, nombreLista.length);
    return nombreCorregido;
}

//Funcion que guarda nombre de la lista ingresado
const guardarNombreLista = (event) => {
    const boton = event.target;
    const nombreLista = boton.previousElementSibling;
    const divNombreLista = boton.parentElement;
    const alerta = divNombreLista.nextElementSibling;

    if (nombreLista.value == "") {
        alerta.innerHTML = "Debe ingresar un nombre de lista";
    } else {
        const nombreListaMay = corregirNombre(nombreLista.value);
        const html = `<h5>${nombreListaMay}</h5>
                    <img src="images/todolist.png">
                    <div class= "crear-tareas">
                        <input type="text" class="input-nombre-tarea" id="input-nombre-tarea">
                        <button class="btn bi bi-check" onclick="agregarTarea(event)"></button>
                    </div>
                    <div class="div-alerta"></div>
                    <ul></ul>`;

        divNombreLista.innerHTML = html;
        divNombreLista.classList.remove("div-nombre-lista");
        divNombreLista.classList.add("div-nombre-lista-img");
        alerta.remove();
    }
}

//Funcion para agregar tarea a la lista
const agregarTarea = (event) => {

    const boton = event.target;
    const nombreTarea = boton.previousElementSibling;
    const divCrearTarea = boton.parentElement;
    const alerta = divCrearTarea.nextElementSibling;
    const lista = alerta.nextElementSibling;

    if (nombreTarea.value == "") {
        alerta.innerHTML = "Debe ingresar una tarea";
    } else {
        const nombreTareaMay = corregirNombre(nombreTarea.value);
        const html = `<li class= "elemento-lista">
                            <input type ="checkbox" class="check" onclick="agregarAtributoCheck(event)">
                            <label class="tarea">${nombreTareaMay}</label>
                            <button class="btn bi bi-x" onclick="eliminarTarea(event)"></button>
                        </li>`;

        lista.innerHTML += html;
        nombreTarea.value = "";
        alerta.innerHTML = "";
        nombreTarea.focus();
    }
}

const agregarAtributoCheck = (event) => {
    const checkbox = event.target;
    if (checkbox.hasAttribute("checked") == false) {
        checkbox.setAttribute("checked","true");
    } else {
        checkbox.removeAttibute("checked");
    }
}

//Funcion para eliminar tarea
const eliminarTarea = (event) => {
    event.target.parentElement.remove();
}

const inicializarJs = () => {
    const boton = document.getElementById("btn-agregar-lista");
    boton.addEventListener("click", function (e) {
        agregarLista();
    });
}

window.addEventListener('load', inicializarJs);