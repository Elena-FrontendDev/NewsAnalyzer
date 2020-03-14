import {options} from '../constants/constForNewsApi';
import NewsApi from '../modules/NewsApi';
import NewsCard from '../components/NewsCard';
import NewsCardList from '../components/NewsCardList';
import DataStorage from '../modules/DataStorage';


const resultList = document.querySelector('.result');
const resultCardsList = document.querySelector('.result__cards');
const resultListIsOpened = document.querySelector('.result__cards-is-opened');

const newsApi = new NewsApi(options);
const newsCard = new NewsCard();
const newsCardList = new NewsCardList(newsCard, resultCardsList); 
const dataStorage = new DataStorage()

const searchForm = document.forms.search;
const searchInput = searchForm.elements.searchtext;
const searchButton = document.querySelector('.search__button');

const error = document.querySelector('.result__error');

export {newsApi, 
        newsCardList, 
        dataStorage, 
        searchForm, 
        searchInput, 
        searchButton, 
        resultList, 
        resultCardsList,
        resultListIsOpened, 
        error
    }