/*class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
    }
}*/

class TodoList {
    constructor() {
        this.todos = [];
    }

    addTodo() {
        this.todos.push('Nova tarefa');
        console.log(this.todos);
    }
}

const minhaLista = new TodoList();

document.getElementById('newTodo').onclick = function() {
    minhaLista.addTodo();
}