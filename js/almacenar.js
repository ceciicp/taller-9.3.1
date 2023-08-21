const btnAdd = document.getElementById("agregar");
const btnClear = document.getElementById("limpiar");
let listado = [];

const listaCont = document.getElementById("contenedor");

document.addEventListener("DOMContentLoaded", () => {
    let listaDelLocal = JSON.parse(localStorage.getItem("lista"));

    if (listaDelLocal != null){

        for (let element of listaDelLocal){
            listado.push(element);
            let fila = document.createElement("li");
            fila.innerHTML = element;
            listaCont.appendChild(fila);
        }
    }

    btnAdd.addEventListener("click", () => {
        let data = document.getElementById("item");
        listado.push(data.value);
        localStorage.setItem("lista", JSON.stringify(listado));
        let fila = document.createElement("li");
        fila.innerHTML = listado[listado.length - 1];
        listaCont.appendChild(fila);
        data.value = "";
    })

    btnClear.addEventListener("click", () => {
        listado = [];
        localStorage.clear();
        contenedor.innerHTML = ""
    })
})