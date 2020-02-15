import {commitPreloader} from '../utils/preloader'
import {showAboutError} from '../utils/error'

export default class GithubApi {
    constructor() {
    }
   
    getCommits() {
      commitPreloader(true);
        return fetch(`https://api.github.com/repos/Elena-FrontendDev/NewsAnalyzer/commits`)
        
        .then((res) => {
            if (res.ok) {
            return res.json();
            }
            showAboutError();
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch((err)=> {
            console.log(`Ошибка: ${err}`);
            showAboutError();
        }) 
        .finally(() => {
          commitPreloader(false)
        })
    }; 
}