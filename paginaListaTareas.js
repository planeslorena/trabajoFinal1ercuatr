function agregarLista() {
    //Tomo el div que contiene las listas
    let divTareas = document.querySelector(".div-listas");
    //Creo el div para la nueva lista y le agrego la clase con el estilo de nueva lista
    let nuevaLista = document.createElement("div");
    nuevaLista.classList.add("div-lista-nueva");

    //agrego la nueva lista al div principal
    divTareas.appendChild(nuevaLista);

    let divNombreLista = document.createElement("div");
    divNombreLista.classList.add("div-nombre-lista");

    //agrego la nueva lista al div principal
    nuevaLista.appendChild(divNombreLista);
    
    //Le agrego el input para el nombre de lista
    let inputnombreLista = document.createElement("input");
    inputnombreLista.setAttribute("type","text");
    inputnombreLista.setAttribute("placeholder","Nombre de la lista");
    inputnombreLista.setAttribute("required","true");
    inputnombreLista.classList.add("form-control");
    //agrego el input en la nueva lista
    divNombreLista.appendChild(inputnombreLista); 

    //Le agrego boton para confirmar nombre lista
    let boton = document.createElement("boton");
    boton.classList.add("btn-nombre-lista");
    boton.classList.add("bi");
    boton.classList.add("bi-check");
    //agrego el input en la nueva lista
    divNombreLista.appendChild(boton); 
}