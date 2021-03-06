import Validate from '../../blocks/content/search/__form/form__validate';
import {options} from '../constants/constForNewsApi';
import NewsApi from '../modules/NewsApi';
import NewsCard from '../../blocks/content/result/__card/result__card';
import NewsCardList from '../../blocks/content/result/__cards/result__cards';
import DataStorage from '../modules/DataStorage';


const resultList = document.querySelector('.result');
const resultCardsList = document.querySelector('.result__cards');
const resultListIsOpened = document.querySelector('.result__cards-is-opened');
const numbersOfCardsForShow = 3;

const validate = new Validate();
const newsApi = new NewsApi(options);
const newsCard = new NewsCard();
const newsCardList = new NewsCardList(newsCard, resultCardsList); 
const dataStorage = new DataStorage()

const searchForm = document.forms.search;
const searchInput = searchForm.elements.searchtext;
const searchButton = document.querySelector('.search__button');

const error = document.querySelector('.result__error');
const errorMessage = 'Пожалуйста, введите запрос';

export {validate,
        newsApi, 
        newsCardList, 
        dataStorage, 
        searchForm, 
        searchInput, 
        searchButton, 
        resultList, 
        resultCardsList,
        resultListIsOpened, 
        numbersOfCardsForShow,
        error,
        errorMessage
    }