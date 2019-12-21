const searchButton = document.querySelector('.search__button');
const resultList = document.querySelector('.result');
const resultCardsList = document.querySelector('.result__cards')

import {resultCards} from './__cards/resultCards';


let cardsStart = 0;
  let cardsStep = 3; 
  const newResultCards = [];

function showResultList() {
   

    resultList.classList.toggle("result-is-opened");
    resultCardsList.classList.toggle("result__cards-is-opened");

    const resultInfo = document.createElement("div");
    resultInfo.classList.add("result__info");

    resultInfo.innerHTML = `
                    <h2 class="content__title result__title">Результаты поиска</h2>
                    <a href="statist.html" class="result__link">Посмотреть аналитику &gt;</a></h2>`;

    resultList.insertBefore(resultInfo, resultCardsList);
 
    return resultInfo;

} 



function createResultList(urlToImageValue, publishedAtValue, titleValue, descriptionValue, sourceValue) {
    
    const resultCard = document.createElement("div");
    resultCard.classList.add("result__card");

    resultCard.innerHTML = `
                    
                        <div class="card__image"></div>
                        <div class="card__info">
                            <h6 class="plane-text card__data"></h6>
                            <h4 class="content__subtitle card__title"></h4>
                            <p class="plane-text card__description"></p>
                            <h6 class="card__source"></h6>
                        </div>`;

                    resultCard.querySelector(".card__image").style.backgroundImage = 'url('+ urlToImageValue +')';
                    resultCard.querySelector(".card__data").textContent = publishedAtValue;
                    resultCard.querySelector(".card__title").textContent = titleValue;
                    resultCard.querySelector(".card__description").textContent = descriptionValue;
                    resultCard.querySelector(".card__source").textContent = sourceValue;

                    resultCardsList.appendChild(resultCard);
    return resultCard;  
}


function showResultCards() {
    searchButton.setAttribute('disabled', true)
    if ((resultCards.length - cardsStart) <= 3) {
        
        for (let index = cardsStart; index < resultCards.length; index++) {

       const element = resultCards[index];

       createResultList(element.urlToImage, element.publishedAt, element.title, element.description, element.source)

            
        }
           
      }
      else if ((resultCards.length - cardsStart)  > 3) {
          for (let index = cardsStart; index < cardsStart + 3; index++) {
            
        const element = resultCards[index];

            createResultList(element.urlToImage, element.publishedAt, element.title, element.description, element.source)
     
        }
        const buttonMore = document.createElement("div");
        buttonMore.classList.add("result__button-content");
    
        buttonMore.innerHTML = `<div class="result__button">
                                <h6 class="plane-text button__text"></h6>
                                </div>`;
    
                                buttonMore.querySelector(".button__text").textContent = 'Показать еще';
        
                                resultList.appendChild(buttonMore);
        buttonMore.addEventListener('click', function() {
            
            resultList.removeChild(buttonMore);
            showResultCards(cardsStart = cardsStart + 3);
        })
    } 
}



// Прелоудер

function showPreloader() {
   
    const preloader = document.createElement("div");
    preloader.classList.add("result__preloader");
    preloader.innerHTML = `<i class="preloader__circle"></i>
                            <h6 class="plane-text plane-text_color_gray preloader__text">Идет поиск новостей...</h6>`;
    resultList.appendChild(preloader);
   
}

function showresultError() {
    const resultError = document.querySelector('.result__error');

    if(resultError) {
        
        
    } else {

    searchButton.setAttribute('disabled', true)
    const resultError = document.createElement("div");
    resultError.classList.add("result__error");
    resultError.innerHTML = `<div class="error__image"></div>
                            <h4 class="content__subtitle">Ничего не найдено</h4>
                            <h6 class="plane-text plane-text_color_gray error__message">К сожалению по вашему запросу ничего не найдено.</h6>`;
    resultList.appendChild(resultError);

}
}

const searchForm = document.querySelector('.search__form')
const searchInput = searchForm.elements.searchtext;
   
searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (searchInput.value.match(/[A-z]/g))  {
        const resultError = document.querySelector('.result__error');
        if(resultError) {
        
            resultList.removeChild(resultError);
            console.log('удалять')
            
        }
        showresultError();
        
    } else if (searchInput.value.match(/[А-яё]/g)) {
        
        if (resultCards.length < cardsStart) {
            console.log('Ничего не найдено')
            

        } else {
            const resultError = document.querySelector('.result__error');
            const resultCard = document.querySelector('.result__card');
            const resultInfo = document.querySelector('.result__info');
        if(resultError) {

            resultList.removeChild(resultError);
            console.log('удалять')
            
        } 

            showResultList();
            showResultCards();
        }
    }
})

function resetInput () {
    if (searchInput.value == '') {
        console.log('работает')
        searchButton.removeAttribute('disabled', true)
    }
}

searchInput.addEventListener('input', resetInput)