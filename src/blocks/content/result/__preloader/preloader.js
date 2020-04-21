import {resultList} from '../../../../js/constants/constForMainPage';

export function showPreloader(isLoading) {

    if(isLoading) {
        const preloader = document.createElement("div");
    preloader.classList.add("result__preloader");
    preloader.insertAdjacentHTML('afterbegin', `<i class="preloader__circle"></i>
                            <h6 class="plane-text plane-text_color_gray preloader__text">Идет поиск новостей...</h6>`);
    resultList.appendChild(preloader);

      preloader.classList.add('result__preloader_open');
    }
    else {
    resultList.removeChild(resultList.firstChild);
    }
  }