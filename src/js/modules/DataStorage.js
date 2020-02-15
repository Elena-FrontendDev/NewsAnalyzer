export default class DataStorage {
    constructor() {
    }

    setSearchRequest(request) {
        localStorage.setItem('searchRequest', request)
    }
    setAnswerArray(data) {
        localStorage.setItem('data.articles', JSON.stringify(data.articles))
    }
    getSearchRequest() {
       return localStorage.getItem('searchRequest');
    }
    getAnswerArray() {
       return JSON.parse(localStorage.getItem('data.articles'));
    }
}