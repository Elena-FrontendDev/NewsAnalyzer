import "./pages-css/style.css";

import {newsApi, dataStorage, searchForm, searchInput, searchButton} from './js/constants/constForMainPage';
import {showResultList, resetAnswer, openCards, showEmptyResultError} from './js/utils/resultList';
import '../src/images/image__error.jpg';


//при событии submit формы поиска - обрабатываем запрос, выводим результат и удаляем блок, если был предыдущий запрос
  searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    resetAnswer(); 
    const request = searchInput.value;
    renderRequest (newsApi, request);
  });


//отправим запрос к Api, запишем результат в localStorage, если есть статьи - выведем блок с карточками, если нет - выведем блок 'ничего не найдено'
function renderRequest (api, request) {
  searchButton.setAttribute('disabled', true)
    api.getNews(request)
    .then ((res) => { 
      dataStorage.setSearchRequest(request);
      dataStorage.setAnswerArray(res);
    })
    .then(() => {
      const resultArray = dataStorage.getAnswerArray()
        if (resultArray.length != 0) {
          showResultList();
          openCards(resultArray, api, 0)
        }    
          else {
            showEmptyResultError();
          }  
      })
};


//при изменении в поле input - разблокируем кнопку submit
searchInput.addEventListener('input', function () {
  event.preventDefault();
  searchButton.removeAttribute('disabled', true)
});


//при открытии страницы, проверяем был localstorage и если был запрос пользователя - выводим результат по ключевому слову
 window.onload = function() {
     const request = localStorage.getItem('searchRequest');
        if (request) {
        searchInput.value = request;
          renderRequest (newsApi, request);
        }
 }