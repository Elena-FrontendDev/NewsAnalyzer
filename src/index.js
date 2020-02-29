import "./pages-css/style.css";

import {newsApi, dataStorage, searchForm, searchInput, searchButton} from './js/constants/constForMainPage';
import {showResultList, resetAnswer, openCards, showEmptyResultError} from './js/utils/resultList';
import {showPreloader} from './js/utils/preloader'
import {showMainError} from './js/utils/error'
import '../src/images/image__error.jpg'
import '../src/images/not-found_v1.png'


//при событии submit формы поиска - обрабатываем запрос, 
//выводим результат и удаляем блок, если был предыдущий запрос

  searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    resetAnswer(); 
    const request = searchInput.value;
    renderRequest (newsApi, request);
  });


//отправим запрос к Api, запишем результат в localStorage, 
//если есть статьи - выведем блок с карточками, если нет - выведем блок 'ничего не найдено'

function renderRequest (api, request) {
  searchButton.setAttribute('disabled', true)
    showPreloader(true);
    api.getNews(request)
    .then ((res) => { 
      dataStorage.setSearchRequest(request);
      dataStorage.setCardsArray(res);
    })
    .then(() => {
      const resultArray = dataStorage.getCardsArray()
        if (resultArray.length != 0) {
          showResultList();
          openCards(resultArray, 0)
        }    
          else {
            showEmptyResultError();
          }  
      })
    .catch((err)=> {
      showMainError();
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      showPreloader(false)
    })
};


//при изменении в поле input - разблокируем кнопку submit

searchInput.addEventListener('input', function () {
  event.preventDefault();
  searchButton.removeAttribute('disabled', true)
});


//при открытии страницы, проверяем была ли запись в localstorage 
//если был запрос пользователя - выводим его в поле формы и выводим результат на основании массива статей в localstorage

 window.onload = function() {
     const request = dataStorage.getSearchRequest();
     const resultArray = dataStorage.getCardsArray();

        if (request && resultArray.length !=0) {
        searchInput.value = request;
        showResultList();
        openCards(resultArray, 0)
        }
        if(request && resultArray.length == 0) {
          searchInput.value = request;
          showEmptyResultError();
        }
 }