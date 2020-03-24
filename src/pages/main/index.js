import "../main/style.css";

import {validate, newsApi, dataStorage, searchForm, searchInput, searchButton} from '../../js/constants/constForMainPage';
import {showResultList, resetAnswer, openCards, showEmptyResultError} from '../../blocks/content/result/result';
import {showPreloader} from '../../blocks/content/result/__preloader/preloader'
import {showMainError} from '../../blocks/content/result/__error/error'
import '../../blocks/content/result/__card/__image/images/image_error.jpg'
import '../../images/not-found_v1.png'
import '../../blocks/content/search/__image/background_georgia.png'
import '../../blocks/content/search/__image/background_georgia_Ipad.png'
import '../../blocks/content/search/__image/background_georgia_Iphone.png'



//отправим запрос к Api, запишем результат в localStorage, 
//если есть статьи - выведем блок с карточками, если нет - выведем блок 'ничего не найдено'
function renderRequest (api, request) {
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
      showPreloader(false);                             //убираем прелоудер
      searchInput.removeAttribute('disabled', true);    //снимаем блокировку с поля ввода
      searchButton.removeAttribute('disabled', true);   //убираем блокировку кнопки submit
    })
};


//Функция для разблокирования поля ввода и кнопки submit
function formActivate () {
  searchInput.setAttribute('disabled', true);
  searchButton.setAttribute('disabled', true);
};


//при открытии страницы, проверяем была ли запись в localstorage 
//если был запрос пользователя - выводим его в поле формы и выводим результат на основании массива статей в localstorage
 window.onload = () => {
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


//Проверяем, что поле запроса не пустое
searchInput.addEventListener('input', () => {
  validate.checkInput();
});


//при событии submit формы поиска - обрабатываем запрос, 
//очищаем блок результатов, если был предыдущий запрос и выводим результат нового запроса
searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formActivate();
  resetAnswer();
  renderRequest (newsApi, searchInput.value);
});