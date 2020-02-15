const resultList = document.querySelector('.result');
const commitSlider = document.querySelector('.comments__carousel')

export function showMainError() {
    const resultError = document.createElement("div");
          resultError.classList.add("result__error");
          resultError.innerHTML = `<div class="error__image"></div>
                                  <h4 class="content__subtitle">Во время запроса произошла ошибка.</h4>
                                  <h6 class="plane-text plane-text_color_gray error__message">Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</h6>`;
          resultList.appendChild(resultError);
}

export function showAboutError() {
    const resultError = document.createElement("div");
          resultError.classList.add("result__error");
          resultError.innerHTML = `<div class="error__image"></div>
                                  <h4 class="content__subtitle">Во время запроса произошла ошибка.</h4>
                                  <h6 class="plane-text plane-text_color_gray error__message">Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</h6>`;
          commitSlider.appendChild(resultError);
}