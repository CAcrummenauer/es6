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

var minhaLista = new TodoList();

document.getElementById('newTodo').onclick = function() {
    minhaLista.add('Nova tarefa');
}

minhaLista.showUser();

class TestStatic {
    constructor() {
        this.data = [];
    }

    static add() {
        this.data.push('Tentativa de entrada...');
    }
}

TestStatic.add();