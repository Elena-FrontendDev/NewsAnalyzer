//класс для создания контейнера карточек для всего массива статей, полученного от Api

  export default class NewsCardList {
    constructor(newsCard, container) {
      this.newsCard = newsCard;
      this.container = container
    }

     _addCard(urlToImageValue, publishedAtValue, titleValue, descriptionValue, sourceValue, linkValue) {
      const cardElement = this.newsCard.createCard(urlToImageValue, publishedAtValue, titleValue, descriptionValue, sourceValue, linkValue) 

      this.container.appendChild(cardElement);
    }
    
    load(resultArray, element) {    
              this._addCard(element.urlToImage, element.publishedAt, element.title, element.description, element.source.name, element.url)
    } 
}