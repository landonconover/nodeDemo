// initial todos
// DO NOT EDIT THIS ARRAY
// You may add props to objects if needed.
// let todos = [
  // {
  //   todoID: 0,
  //   todoText: "Finish Homework",
  //   todoComplete: false
  // },
//   {
//     todoID: 1,
//     todoText: "Walk the dog",
//     todoComplete: true
//   },
//   {
//     todoID: 2,
//     todoText: "Clean my room",
//     todoComplete: false
//   }
// ];


async function getTodos() {
  let response = await fetch('/todos');
  let data = await response.json()

  return data;
}


let todoUL = document.querySelector('.todoList');
let todoInput = document.querySelector('#newInput');
let addBtn = document.querySelector('#addBtn')


addBtn.addEventListener('click', event => {
  let todoText = todoInput.value
  if(todoText === '') return;
  addTodo(todoText)
  renderTodos(todos)

  todoInput.value = ''
})

todoUL.addEventListener('click', (event) => {
  let todoID = event.target.dataset.todoid
  completeTodo(todoID)
  renderTodos(todos)
})

function completeTodo(id) {
  let todoIdx = todos.findIndex(todo => todo.todoID == id)

  todos[todoIdx].todoComplete = !todos[todoIdx].todoComplete
}

function addTodo(todoText) {
  fetch('/todo',{
    method: 'POST',
    body: JSON.stringify({todo: todoText}),
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(res => res.json())
    .then(data => {
      renderTodos(data)
    })
    .catch(err => {
      //write code to handle the request fail
    })
}

function renderTodos(todos) {

  todoUL.innerHTML = ""
  todos.forEach(todo => {
    let done = todo.todoComplete ? "done" : "";
    let todoMarkup = `<li class="${done}" data-todoID='${todo.todoID}'>
                        ${todo.todoText}<span> <i class="fa fa-trash"></i></span>
                      </li>`

    todoUL.insertAdjacentHTML('beforeend', todoMarkup)

  })

  const amtPending = document.querySelector('#amtPending')
  amtPending.innerHTML = todos.filter(todo => todo.todoComplete === false).length
}

getTodos()
  .then(todos => {
  renderTodos(todos)
})

fetch(`/todo/${1}`,{
  method: 'DELETE'
})
  .then(res => res.json())
  .then(data => {
    renderTodos(data)
  })