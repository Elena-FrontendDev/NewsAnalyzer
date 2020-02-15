
export default class DateTransform {
    constructor() {
    this.dateNow = new Date();;
    this.dateBefore = new Date();
    this.arrChart = [this.dateNow.toLocaleDateString('ru')]
    }

    //метод для передачи в конструктор класса NewsApi сегодняшней даты и 7 дней назад
    getDateForApi() {
        this.dateBefore.setDate(this.dateNow.getDate() - 6);
        let dateFrom = this.dateNow.toLocaleDateString();
        let dateTo = this.dateBefore.toLocaleDateString();
        return {dateFrom, dateTo}
    }

    //метод для получения сегодняшнего дня
    getTodayDate() {
        this.dateNow.toLocaleDateString();
    }
   
}