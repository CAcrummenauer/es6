import api from './api'
class App {
    constructor() {
        this.repositories = [];
        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.getElementById('repository');
        this.listEl = document.getElementById('repo-list');
        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    async addRepository(event) {
        event.preventDefault();
        const repoInput = this.inputEl.value;
        if (repoInput.length === 0) {
            console.log('Nada digitado');
            return;
        }
        try {
            const response = await api.get(`https://api.github.com/users/${repoInput}`);
            console.log(response);

            const {name, bio, html_url, owner: avatar_url} = response.data;
            this.repositories.push({
                name,
                description: bio,
                htmlUrl: html_url
            });
            this.render();
            this.inputEl.value = '';
        } catch (err) {
            console.warn('Erro ao consumir API: ' + err);
        }
    }

    render() {
        this.listEl.innerHTML = '';
        this.repositories.forEach(repo => {
            /*let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatarUrl);*/

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.htmlUrl);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            //listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    }
}
const app = new App();