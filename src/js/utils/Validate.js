import {searchInput, searchButton} from '../constants/constForMainPage'

//Класс для проверки поля ввода формы
export default class Validate {

    checkInput() {
        let error = '';
        searchButton.removeAttribute('disabled', true);
        if (!searchInput.checkValidity()) {
            
            if (searchInput.validity.valueMissing) {
              error = 'Пожалуйста, введите запрос';              //если поле пустое выводим ошибку
              searchButton.setAttribute('disabled', true); //и блокируем кнопку submit    
            }     
          }
          searchInput.nextElementSibling.textContent = error; 
    }
}