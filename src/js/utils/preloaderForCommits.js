import {commitsSlider} from '../constants/constForAboutPage';

  export function commitPreloader(isLoading) {

    if(isLoading) {
        const preloader = document.createElement("div");
        preloader.classList.add("result__preloader");
        preloader.insertAdjacentHTML('afterbegin', `<i class="preloader__circle"></i>
                                <h6 class="plane-text plane-text_color_gray preloader__text">Loading...</h6>`);

          preloader.classList.add('result__preloader_open');
          commitsSlider.appendChild(preloader);
    }
    else {
      commitsSlider.removeChild(document.querySelector('.result__preloader'));
    }
  }