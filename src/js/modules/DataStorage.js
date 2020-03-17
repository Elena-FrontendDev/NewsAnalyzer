//Класс для сохранения и получения данных localStorage

export default class DataStorage {
    constructor() {
    }

    setSearchRequest(request) {
        localStorage.setItem('searchRequest', request)
    }
    setCardsArray(data) {
        localStorage.setItem('data.articles', JSON.stringify(data.articles))
    }
    getSearchRequest() {
       return localStorage.getItem('searchRequest');
    }
    getCardsArray() {
       return JSON.parse(localStorage.getItem('data.articles'));
    }
}