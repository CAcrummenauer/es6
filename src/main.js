class App {
    constructor() {
        this.repositories = [];
        this.formEl = document.getElementById('repo-form');
        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    addRepository(event) {
        event.preventDefault();
        this.repositories.push({
            name: 'name',
            description: 'description',
            avatarUrl: 'avatarUrl',
            htmlUrl: 'htmlUrl'
        });
        console.log(this.repositories);
    }
}
const app = new App();