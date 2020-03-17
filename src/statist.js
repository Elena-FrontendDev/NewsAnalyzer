import "./pages-css/statist.css";

import Statistics from './js/components/Statistics'
import DateTransform from './js/utils/DateTransform';
import DataStorage from './js/modules/DataStorage';

const dataStorage = new DataStorage();
const cardsArray = dataStorage.getCardsArray();
const searchRequest = dataStorage.getSearchRequest();

const dateTransform = new DateTransform();
const weekArray = dateTransform.getWeekArray();
const datesForChart = dateTransform.makeWeekFormatForChart();
const month = dateTransform.getMonth();

const statistics = new Statistics(cardsArray, searchRequest, weekArray, datesForChart, month);

window.onload = function() {
     statistics.setRequest();
     statistics.makeYaxisForChart();
     statistics.checkHeaders();
    }
