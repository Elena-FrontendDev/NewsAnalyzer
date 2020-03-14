import {commitsSlider} from '../constants/constForAboutPage';


export function showAboutError() {
    const resultError = document.createElement("div");
          resultError.classList.add("result__error");
          resultError.insertAdjacentHTML('afterbegin', `<div class="error__image"></div>
                                  <h4 class="content__subtitle">Во время запроса произошла ошибка.</h4>
                                  <h6 class="plane-text plane-text_color_gray error__message">Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</h6>`);
          commitsSlider.appendChild(resultError);
}