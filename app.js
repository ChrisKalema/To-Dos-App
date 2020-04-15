const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

const generateTemplate = ((todo)=>{
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    list.innerHTML+=html;  //add the new to-do on the list of to-dos
});

addForm.addEventListener('submit',e=>{
    e.preventDefault();

    const todo = addForm.add.value.trim();

    if(todo.length){        // prevent the user from submitting empty fields
        generateTemplate(todo);   

        addForm.reset();   //resets the form after submission
    }
    
});

//delete To-Dos

list.addEventListener('click', e=>{    //targeting specific part of the element

    if(e.target.classList.contains('delete')){     // look for an element in li that has a 'delete' element
        e.target.parentElement.remove();  //remove the paraent element (the whole list)
    }
});

//search to-dos

// key-event
const search = document.querySelector('.search input');

const filterTodos = (term) =>{
    Array.from(list.children)
        .filter((todo)=> !todo.textContent.toLowerCase().includes(term))
        .forEach((todo)=> todo.classList.add('filtered'))

    Array.from(list.children)
        .filter((todo)=> todo.textContent.toLowerCase().includes(term))
        .forEach((todo)=> todo.classList.remove('filtered'))

};

search.addEventListener('keyup', ()=>{
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});
