class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor() {
        super();
        this.user = 'Cezar Augusto';
    }

    showUser() {
        console.log(this.user);
    }
}

const minhaLista = new TodoList();

document.getElementById('newTodo').onclick = function() {
    minhaLista.add('Nova tarefa');
}

minhaLista.showUser();