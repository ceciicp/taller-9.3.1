document.addEventListener("DOMContentLoaded", () => {
    const btnAdd = document.getElementById("agregar");
    const btnClear = document.getElementById("limpiar");
    const listaCont = document.getElementById("contenedor");

    let listado = [];

    function listar(elemento){
        let fila = document.createElement("li");
        fila.innerHTML = elemento;
        listaCont.appendChild(fila);
    }

    let listaDelLocal = JSON.parse(localStorage.getItem("lista"));
    if (listaDelLocal != null){
        for (let element of listaDelLocal){
            listado.push(element);
            listar(element);
        }
    }

    btnAdd.addEventListener("click", () => {
        let data = document.getElementById("item");
        if (data.value != ""){
            listado.push(data.value);
            localStorage.setItem("lista", JSON.stringify(listado));
            listar(data.value);
            data.value = "";
        }
    })

    btnClear.addEventListener("click", () => {
        listado = [];
        localStorage.clear();
        contenedor.innerHTML = "";
    })
})