import "./pages-css/about.css";

import Flickity from 'flickity'
import GithubApi from './js/modules/GithubApi';
import CommitCardList from './js/components/CommitCardList';
import CommitCard from './js/components/CommitCard';


const githubApi = new GithubApi();
const commitCard = new CommitCard();
const commitCardList = new CommitCardList(commitCard);

githubApi.getCommits() //получаем ответ с githubApi и затем создаем контейнер с карточками и полсе добавляем слайдер Flickity
.then ((res) => { 
    commitCardList.create(res);
  })
  .then(() => {
    let flickity = new Flickity( '.comments__carousel', {
        'wrapAround': true,   
        'contain': true,       
        'freeScroll': true,
        'cellAlign': 'center',
        'groupCells': 1,
    });
  })
