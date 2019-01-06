import axios from 'axios';

class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`http://api.github.com/users/${username}`);
            console.log(response);
        } catch (err) {
            console.warn('Erro ao consumir API: ' + err);
        }
    }
}

Api.getUserInfo('cacrummenauer');
