const resultList = document.querySelector('.result');
const commitSlider = document.querySelector('.comments__carousel')

export function showPreloader(isLoading) {


    if(isLoading) {
        const preloader = document.createElement("div");
    preloader.classList.add("result__preloader");
    preloader.innerHTML = `<i class="preloader__circle"></i>
                            <h6 class="plane-text plane-text_color_gray preloader__text">Идет поиск новостей...</h6>`;
    resultList.appendChild(preloader);

      preloader.classList.add('result__preloader_open');
    }
    else {
    resultList.removeChild(document.querySelector(".result__preloader"));
    }
  }

  export function commitPreloader(isLoading) {


    if(isLoading) {
        const preloader = document.createElement("div");
        preloader.classList.add("result__preloader");
        preloader.innerHTML = `<i class="preloader__circle"></i>
                                <h6 class="plane-text plane-text_color_gray preloader__text">Loading...</h6>`;
        commitSlider.appendChild(preloader);

          preloader.classList.add('result__preloader_open');
    }
    else {
    commitSlider.removeChild(document.querySelector(".result__preloader"));
    }
  }