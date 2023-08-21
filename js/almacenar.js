const btnAgregar = document.querySelector('#agregar');
const itemInput = document.querySelector('#item').value;

let listaItems = [];

btnAgregar.addEventListener('click', () => {
	// Se trae el arreglo en formato JSON del localStorage
	listaItems = JSON.parse(localStorage.getItem('listitaKey'));
	listaItems.push(itemInput);
	localStorage.setItem('listitaKey', JSON.stringify(listaItems));
});
