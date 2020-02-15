import {options} from '../constants/constForNewsApi';
import NewsApi from '../modules/NewsApi';
import NewsCard from '../components/NewsCard';
import NewsCardList from '../components/NewsCardList';
import DataStorage from '../modules/DataStorage';

const newsApi = new NewsApi(options);
const newsCard = new NewsCard();
const newsCardList = new NewsCardList(newsCard); 
const dataStorage = new DataStorage()

const searchForm = document.forms.search;
const searchInput = searchForm.elements.searchtext;
const searchButton = document.querySelector('.search__button');

export {newsApi, newsCardList, dataStorage, searchForm, searchInput, searchButton}