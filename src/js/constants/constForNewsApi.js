import DateTransform from '../utils/DateTransform';

//создаем options для запроса к Api 

const dateTransform = new DateTransform();
const dateForApi = dateTransform.getDateForApi();
const from = dateForApi.dateFrom;
const to = dateForApi.dateTo

const serverUrl = 'https://praktikum.tk/news/v2/everything?';


export const options = {
    url: serverUrl,                             //сервер запроса
    from: from,                                 //запрос от семи дней назад 
    to: to,                                     //до сегодняшней даты
    apiKey: '8580585fdab149779077d5a2a929c067', //мой ключ для сервера newsapi
};