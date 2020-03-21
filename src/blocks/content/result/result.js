import {newsCardList, searchButton, resultList, resultCardsList, resultListIsOpened, numbersOfCardsForShow, error} from '../../../js/constants/constForMainPage';
import {buttonMoreInner} from '../../../js/constants/constants';



//функция для создания блока результатов поиска по кнопке submit
export function showResultList() {
    resultList.classList.add("result-is-opened");
    const resultInfo = document.createElement("div");
    resultInfo.classList.add("result__info");
    resultInfo.insertAdjacentHTML('afterbegin', 
                    `<h2 class="content__title result__title">Результаты поиска</h2>
                    <a href="statist.html" class="result__link">Посмотреть аналитику &gt;</a></h2>`);

    resultList.appendChild(resultInfo)
    resultCardsList.classList.add("result__cards-is-opened");
    resultList.appendChild(resultCardsList);
    return resultInfo;
};


//функция для удаления информации из блока результатов по поиску предыдущего запроса, если пользователь ввел новый запрос
export function resetAnswer () {
    if (!resultListIsOpened) {
        //resultList.innerHTML = '';
        while (resultList.firstChild) resultList.removeChild(resultList.firstChild);
        resultList.classList.remove('result-is-opened')
        //resultCardsList.innerHTML = '';
        while (resultCardsList.firstChild) resultCardsList.removeChild(resultCardsList.firstChild);
       
    }
    if (error) {
      resultList.removeChild(error);
  }
  }


//функция для создания блока ошибки, если по запросу ничего не найдено
export function showEmptyResultError() {
  
    const resultError = document.createElement("div");
            resultError.classList.add("result__error");
            resultError.insertAdjacentHTML('afterbegin', `<div class="error__image"></div>
                                    <h4 class="content__subtitle">Ничего не найдено</h4>
                                    <h6 class="plane-text plane-text_color_gray error__message">К сожалению по вашему запросу ничего не найдено.</h6>`);
            resultList.appendChild(resultError);
}


//функция загрузки карточек по запросу пользователя в зависимости от результатов длинны массива статей
export function openCards (resultArray, cardsStart) {


  if ((resultArray.length - cardsStart) <= numbersOfCardsForShow) {   
    for (let index = cardsStart; index < resultArray.length; index++) {
   const element = resultArray[index]; 
   newsCardList.load(resultArray, element);   
    }
    
  }
  else if ((resultArray.length - cardsStart)  > numbersOfCardsForShow) {
    for (let index = cardsStart; index < cardsStart + numbersOfCardsForShow; index++) {
      const element = resultArray[index];
     newsCardList.load(resultArray, element);  
  }
      const buttonMore = document.createElement("div");
            buttonMore.classList.add("result__button-content");

            buttonMore.insertAdjacentHTML('afterbegin', buttonMoreInner);
            buttonMore.querySelector(".button__text").textContent = 'Показать еще';
            resultList.appendChild(buttonMore);

      buttonMore.addEventListener('click', function() {
        resultList.removeChild(buttonMore);
        openCards(resultArray, cardsStart = cardsStart + numbersOfCardsForShow);
  })
} 
}