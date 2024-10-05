const form = document.getElementById('form');
const input = document.getElementById('input');
const toDosUL = document.getElementById('toDos');
const toDos = JSON.parse(localStorage.getItem('toDos'))

if(toDos) {
    toDos.forEach(toDo => addToDo(toDo))   
    }



form.addEventListener('submit', (e) => {
    e.preventDefault()

    addToDo()
})

function addToDo(toDo) {
    let toDoText = input.value

    if (toDo) {
        toDoText = toDo.text
    }
    if (toDoText) {
        const todoEl = document.createElement('li')
        if (toDo && toDo.completed) {
            todoEl.classList.add('completed')
        } todoEl.innerText = toDoText

        todoEl.addEventListener('click', () => { 
            todoEl.classList.toggle('completed')
            updateLS()
        })

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            todoEl.remove()
            updateLS()
        })

        toDosUL.appendChild(todoEl)

        input.value = ''

        updateLS()
    }
}

function updateLS() {
    toDoEL = document.querySelectorAll('li')
const toDos = []


toDoEl.forEach(todoEl => {
    toDos.push({
        text: todoEl.innerText,
        completed: todoEl.classList.contains('completed')
    })
})

localStorage.setItem('toDos', JSON.stringify(toDos))

}


