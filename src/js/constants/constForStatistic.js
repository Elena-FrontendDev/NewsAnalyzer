import Statistics from '../../blocks/statist/chart/chart'
import DateTransform from '../../js/utils/DateTransform';
import DataStorage from '../../js/modules/DataStorage';

const numbersOfDaysForCalc = 6;

const dataStorage = new DataStorage();
const cardsArray = dataStorage.getCardsArray();
const searchRequest = dataStorage.getSearchRequest();

const dateTransform = new DateTransform(numbersOfDaysForCalc);
const weekArray = dateTransform.getWeekArray();
const datesForChart = dateTransform.makeWeekFormatForChart();
const month = dateTransform.getMonth();

const statistics = new Statistics(cardsArray, searchRequest, weekArray, datesForChart, month);

export {statistics};