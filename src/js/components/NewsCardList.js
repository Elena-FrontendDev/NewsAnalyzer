//класс для создания контейнера карточек для всего массива статей, полученного от Api

  export default class NewsCardList {
    constructor(newsCard) {
      this.cards = []
      this.newsCard = newsCard;
    }

     addCard(urlToImageValue, publishedAtValue, titleValue, descriptionValue, sourceValue, linkValue) {
      const  {cardElement}  = this.newsCard.createCard(urlToImageValue, publishedAtValue, titleValue, descriptionValue, sourceValue, linkValue) 

      this.cards.push(cardElement);
    }
    load(arr, element) {    
              this.addCard(element.urlToImage, element.publishedAt, element.title, element.description, element.source.name, element.url)
    } 
}