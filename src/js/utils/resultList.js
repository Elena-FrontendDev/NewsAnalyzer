import {newsCardList, searchButton} from '../constants/constForMainPage';
import {buttonMoreInner} from '../constants/constants';

const resultList = document.querySelector('.result');
const resultCardsList = document.querySelector('.result__cards');

//функция для создания блока результатов поиска по кнопке submit
export function showResultList() {
    resultList.classList.add("result-is-opened");
    const resultInfo = document.createElement("div");
    resultInfo.classList.add("result__info");
    resultInfo.innerHTML = `
                    <h2 class="content__title result__title">Результаты поиска</h2>
                    <a href="statist.html" class="result__link">Посмотреть аналитику &gt;</a></h2>`;

    resultList.appendChild(resultInfo)
    resultCardsList.classList.add("result__cards-is-opened");
    resultList.appendChild(resultCardsList);
    return resultInfo;
};



//функция для удаления информации из блока результатов по поиску предыдущего запроса, если пользователь ввел новый запрос
export function resetAnswer () {
    if (document.querySelector('.result__cards-is-opened')) {
        resultList.innerHTML = '';
        resultList.classList.remove('result-is-opened')
        resultCardsList.innerHTML = '';
       
    }
    if (document.querySelector('.result__error')) {
      resultList.removeChild(document.querySelector('.result__error'));
  }
  }

//функция для создания блока ошибки, если по запросу ничего не найдено
export function showEmptyResultError() {
    searchButton.setAttribute('disabled', true)
    const resultError = document.createElement("div");
            resultError.classList.add("result__error");
            resultError.innerHTML = `<div class="error__image"></div>
                                    <h4 class="content__subtitle">Ничего не найдено</h4>
                                    <h6 class="plane-text plane-text_color_gray error__message">К сожалению по вашему запросу ничего не найдено.</h6>`;
            resultList.appendChild(resultError);
}

//функция загрузки карточек по запросу пользователя в зависимости от результатов длинны массива статей
export function openCards (resultArray, cardsStart) {
  searchButton.setAttribute('disabled', true)

  if ((resultArray.length - cardsStart) <= 3) {   
    for (let index = cardsStart; index < resultArray.length; index++) {
   const element = resultArray[index]; 
   newsCardList.load(resultArray, element);       
    }     
  }
  else if ((resultArray.length - cardsStart)  > 3) {
    for (let index = cardsStart; index < cardsStart + 3; index++) {
      const element = resultArray[index];
     newsCardList.load(resultArray, element);  
  }
      const buttonMore = document.createElement("div");
            buttonMore.classList.add("result__button-content");

            buttonMore.innerHTML = buttonMoreInner;
            buttonMore.querySelector(".button__text").textContent = 'Показать еще';
            document.querySelector('.result').appendChild(buttonMore);

      buttonMore.addEventListener('click', function() {
      document.querySelector('.result').removeChild(buttonMore);
      openCards(resultArray, cardsStart = cardsStart + 3);
  })
} 
}