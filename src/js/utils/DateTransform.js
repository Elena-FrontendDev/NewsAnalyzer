
export default class DateTransform {
    constructor() {
    this.dateNow = new Date();
    this.dateBefore = new Date();
    this.weekArray = [];
    }

    //метод для передачи в конструктор класса NewsApi сегодняшней даты и даты 7 дней назад для запроса Api
    getDateForApi() {
        this.dateBefore.setDate(this.dateNow.getDate() - 6);
        const dateTo = this.dateNow.getFullYear() + "-" + (this.dateNow.getMonth()+1) + "-" + this.dateNow.getDate();
        const dateFrom = this.dateBefore.getFullYear() + "-" + (this.dateBefore.getMonth()+1) + "-" + this.dateBefore.getDate();
        return {dateTo, dateFrom}
    }


    //метод для получения массива дат из 7-ми дней от сегодняшнего числа
    getWeekArray() {
        this.weekArray.push((this.dateNow).toLocaleDateString('ru'));
        for (let index = 0; index < 6; index++) { 
            const daysBefore = new Date(this.dateNow.setDate(this.dateNow.getDate() - 1));      
            this.weekArray.push(daysBefore.toLocaleDateString('ru'));
        }
        return this.weekArray;
    }

    //метод форматирования дней недели для отображения в графике Статистики
    makeWeekFormatForChart() {
          const weekDays = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
          const datesForChart = [new Date().getDate() + ', ' + weekDays[new Date().getDay()]]
            for (let index = 0; index < 6; index++) { 
                const daysBefore = new Date(this.dateBefore.setDate(this.dateBefore.getDate() - 1)); 
                datesForChart.push(daysBefore.getDate() + ', ' + weekDays[daysBefore.getDay()]);
            }     
        datesForChart.reverse();   
        return datesForChart; 
      }
    
    //метод для получения текущего месяца в формате для отображения в заголовке таблицы Статистики
    getMonth() {
        const month = (this.dateNow.toLocaleString('ru', {month:'long'}).toUpperCase());
        return month;
    }

}