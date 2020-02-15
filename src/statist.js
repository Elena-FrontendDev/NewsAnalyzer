import "./pages-css/statist.css";

import Statistics from './js/components/Statistics'
import DateTransform from './js/utils/DateTransform';
import DataStorage from './js/modules/DataStorage';

const dataStorage = new DataStorage();
const resultArray = dataStorage.getAnswerArray();
const request = dataStorage.getSearchRequest()

const dateTransform = new DateTransform();
const statistics = new Statistics(resultArray, request);

window.onload = function() {
     dateTransform.getTodayDate();
     statistics.setRequest();
     statistics.makeWeekArray();
    }
