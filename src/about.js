import "./pages-css/about.css";

import Flickity from 'flickity'
import GithubApi from './js/modules/GithubApi'
import CommitCardList from './js/components/CommitCardList'
import CommitCard from './js/components/CommitCard'

import {commitPreloader} from './js/utils/preloader'
import {showAboutError} from './js/utils/error'


const githubApi = new GithubApi();
const commitCard = new CommitCard();
const commitCardList = new CommitCardList(commitCard);

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
        showAboutError();
      })
  }