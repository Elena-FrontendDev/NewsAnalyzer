import {showPreloader} from '../utils/preloader'
import {showMainError} from '../utils/error'

export default class NewsApi {
  constructor(options) {
      this.url = options.url;
      this.from = options.from;
      this.to = options.to;
      this.apiKey = options.apiKey;
  }

  
  getNews(request) {
    showPreloader(true);
      return fetch(`${this.url}q=${request}&from=${this.from}&to=${this.to}&language=ru&pageSize=100&apiKey=${this.apiKey}`, 
      {
        headers: {authorization: this.apiKey}
      }) 
      
      .then((res) => {
          if (res.ok) {
          return res.json();
          }
          showMainError();
          return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err)=> {
          console.log(`Ошибка: ${err}`);
          showMainError();
      }) 
      .finally(() => {
        showPreloader(false)
      })
  }; 

} 