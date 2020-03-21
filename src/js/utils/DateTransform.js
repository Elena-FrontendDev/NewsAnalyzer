//Класс для получения даты, дней для запроса API и построения графика

export default class DateTransform {
    constructor(numbersOfDaysForCalc) {
    this._dateNow = new Date();
    this._dateBefore = new Date();
    this.weekArray = [];
    this.daysForCalc = numbersOfDaysForCalc;
    }

    //метод для передачи в конструктор класса NewsApi сегодняшней даты и даты 7 дней назад для запроса Api
    getDateForApi() {
        this._dateBefore.setDate(this._dateNow.getDate() - this.daysForCalc);
        const dateTo = this._dateNow.getFullYear() + "-" + (this._dateNow.getMonth()+1) + "-" + this._dateNow.getDate();
        const dateFrom = this._dateBefore.getFullYear() + "-" + (this._dateBefore.getMonth()+1) + "-" + this._dateBefore.getDate();
        return {dateTo, dateFrom}
    }


    //метод для получения массива дат из 7-ми дней от сегодняшнего числа
    getWeekArray() {
        this.weekArray.push((this._dateNow).toLocaleDateString('ru'));
        for (let index = 0; index < this.daysForCalc; index++) { 
            const daysBefore = new Date(this._dateNow.setDate(this._dateNow.getDate() - 1));      
            this.weekArray.push(daysBefore.toLocaleDateString('ru'));
        }
        return this.weekArray;
    }

    //метод форматирования дней недели для отображения в графике Статистики
    makeWeekFormatForChart() {
          const weekDays = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
          const datesForChart = [new Date().getDate() + ', ' + weekDays[new Date().getDay()]]
            for (let index = 0; index < this.daysForCalc; index++) { 
                const daysBefore = new Date(this._dateBefore.setDate(this._dateBefore.getDate() - 1)); 
                datesForChart.push(daysBefore.getDate() + ', ' + weekDays[daysBefore.getDay()]);
            }     
        datesForChart.reverse();   
        return datesForChart; 
      }
    
    //метод для получения текущего месяца в формате для отображения в заголовке таблицы Статистики
    getMonth() {
        const month = (this._dateNow.toLocaleString('ru', {month:'long'}).toUpperCase());
        return month;
    }

}