//Класс для запроса к GithubApi

export default class GithubApi {
    constructor() {
    }
   
    getCommits() {
        return fetch(`https://api.github.com/repos/Elena-FrontendDev/NewsAnalyzer/commits`)
        
        .then((res) => {
            if (res.ok) {
            return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })       
    }
}