function agregarLista() {
    //Tomo el div que contiene las listas
    let divTareas = document.querySelector(".div-listas");
    //Creo el div para la nueva lista y le agrego la clase con el estilo de nueva lista
    let nuevaLista = document.createElement("div");
    nuevaLista.classList.add('div-lista-nueva');
    nuevaLista.setAttribute('id','div-lista-nueva')

    //agrego la nueva lista al div principal
    divTareas.appendChild(nuevaLista);

    //creo un div para el encabezado de la lista
    let divNombreLista = document.createElement("div");
    divNombreLista.classList.add("div-nombre-lista");
    divNombreLista.setAttribute("id",`div-nombre-lista`);

    //lo agrego al div nueva lista
    nuevaLista.appendChild(divNombreLista);

    //Le agrego el input para el nombre de lista
    let inputnombreLista = document.createElement("input");
    inputnombreLista.setAttribute("type", "text");
    inputnombreLista.setAttribute("placeholder", "Ingrese nombre de la lista");
    inputnombreLista.setAttribute("required", "true");
    inputnombreLista.setAttribute("id",`input-nombre-lista`);
    inputnombreLista.classList.add("input-nombre-lista");
    inputnombreLista.classList.add("form-control");


    //agrego el input al encabezado
    divNombreLista.appendChild(inputnombreLista);

    //Le agrego boton para confirmar nombre lista
    let boton = document.createElement("button");
    boton.classList.add("btn-nombre-lista","bi","bi-check");
    boton.setAttribute('id',`btn-nombre-lista`);
    boton.setAttribute('onclick',`guardarNombreLista(event)`);
    //agrego el boton al encabezado
    divNombreLista.appendChild(boton);
}

const guardarNombreLista = (event) => {
    const boton = event.target;
    const nombreLista = boton.previousElementSibling;
    const divNombreLista = boton.parentElement;

    let nombre = document.createElement("h5");
    nombre.innerHTML= nombreLista.value;
    divNombreLista.appendChild(nombre);
    divNombreLista.removeChild(nombreLista);
    divNombreLista.removeChild(boton);
    //Le agrego imagen
    let imagen = document.createElement("img");
    imagen.setAttribute("src","images/todolist.png");

    //agrego el boton al encabezado
    divNombreLista.appendChild(imagen); 
    divNombreLista.classList.remove('div-nombre-lista');
    divNombreLista.classList.add('div-nombre-lista-img');
}

const inicializarJs = () => {
    const boton = document.getElementById("btn-agregar-lista");
    boton.addEventListener('click', function (e) {
        agregarLista();
    });  
}
  
window.addEventListener('load', inicializarJs);