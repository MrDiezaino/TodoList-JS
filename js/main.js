// Variables y selectores
const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector('.ul-tareas');
const empty = document.querySelector('.sintareas');

// Al hacer click en el botón...
addBtn.addEventListener('click', (e) => {
    // Evitar que la página se recargue al añadir un elemento
    e.preventDefault();
    
    // Guarda el texto del Input en la variable
    const text = input.value;

    if (text !== "") { 
        const li = document.createElement('li');
        // Asignar una clase al elemento que li que creamos
        li.classList.add('li-todo')
        const p = document.createElement('p');
        p.textContent = text;

        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);

        input.value = "";
        empty.style.display = "none";
    }
});

// Función para borrar elementos
function addDeleteBtn() {
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-borrar";

    deleteBtn.addEventListener('click', (e) => {
        // e.target selecciona el botón, pero nosotros queremos borrar el elemento li
        // para ello usamos parentElement
        const item = e.target.parentElement;
        ul.removeChild(item);

        const items = document.querySelectorAll('li');

        if (items.length === 0) {
            empty.style.display = "block";
        }
    });

    return deleteBtn;
}