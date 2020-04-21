//Класс для создания карточки новости
 
import {cardInner} from '../../../../js/constants/constants'

export default class NewsCard {
    constructor () {
    }
  
    createCard(urlToImageValue, publishedAtValue, titleValue, descriptionValue, sourceValue, linkValue) {
        const resultCard = document.createElement("div");
        resultCard.classList.add("result__card");
    
        resultCard.insertAdjacentHTML('afterbegin', cardInner);
                       
                        resultCard.querySelector(".card__image").src = urlToImageValue;
                        resultCard.querySelector(".card__data").textContent = ((new Date(publishedAtValue).toLocaleDateString('ru', {day: 'numeric', month: 'long'})) + ', ' + new Date(publishedAtValue).getFullYear());;
                        resultCard.querySelector(".card__title").textContent = titleValue;
                        resultCard.querySelector(".card__description").textContent = descriptionValue;
                        resultCard.querySelector(".card__source").textContent = sourceValue;
                        resultCard.querySelector(".card__link").href = linkValue;
                        
        return resultCard;
    }
  
}