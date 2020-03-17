import "./pages-css/about.css";

import Flickity from 'flickity'
import {commitPreloader} from './js/utils/preloaderForCommits'
import {showAboutError} from './js/utils/errorForAboutPage'
import {githubApi, commitCardList} from './js/constants/constForAboutPage';

//получаем ответ с githubApi и затем создаем контейнер с карточками и полсе добавляем слайдер Flickity

window.onload = function() {
  commitPreloader(true);
    githubApi.getCommits() 
      .then ((res) => { 
        commitPreloader(false)
          commitCardList.create(res);
          
        })
        .then(() => {
          new Flickity( '.comments__carousel', {
              'wrapAround': true,   
              'contain': true,       
              'freeScroll': true,
              'cellAlign': 'center',
              'groupCells': 1,
          }) 
        })
      .catch((err)=> {
        console.log(`Ошибка: ${err}`);
        commitPreloader(false);
        showAboutError();
      })
  }