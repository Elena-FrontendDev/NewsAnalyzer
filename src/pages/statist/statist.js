import "../statist/statist.css";

import {statistics} from '../../js/constants/constForStatistic';

window.onload = function() {
     statistics.setRequest();
     statistics.makeYaxisForChart();
     statistics.checkHeaders();
    }
