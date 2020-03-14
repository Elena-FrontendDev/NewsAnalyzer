//Класс для вывода графика статистики

export default class Statistics {
    constructor(cardsArray, searchRequest, weekArray, datesForChart, month) {
        this.cardsArray = cardsArray;             //массив статей из localStorage
        this.searchRequest = searchRequest;       //запрос пользователя из localStorage
        this.weekArray = weekArray;               //массив дат из 7ми дней от сегодняшнего числа
        this.datesForChart = datesForChart;       //массив дат в формате (13,пт) для графика
        this.month = month;                       //название текущего месяца для заголовка таблицы
    }

    //записываем запроса пользователя в блок страницы 
    setRequest() {
        document.querySelector('.chart-info__title').textContent = 'Вы спросили: «'+ this.searchRequest +'»';
        document.querySelector('.week__info').textContent = this.cardsArray.length;
    } 

    //считаем количество совпадений запроса пользователя в заголовках и описаниях в массиве статей
    checkHeaders() {

      //создаем начальный массив с датами за 7 дней и ставим кол-во повторений 0
       const weekArray = this.weekArray.sort().map(date => {
        return [date, 0]
      }) 

      let countTitles = 0    //отдельно считаем упоминания в заголовках к статьям, чтобы записать в блок 'Вы спросили'

      //цикл для отбора массива статей с датами, соответствующими текущей недели, 
      //тк если произошла смена дат, в localstorage остается массив со старыми датами, которые нужно откинуть для отображения графика        
      this.weekArray.forEach(element => {
        const currentWeek = element;

        const cardsFiltered = this.cardsArray.filter(card => {
          return new Date(card.publishedAt).toLocaleDateString('ru') === currentWeek
        })
        
     //переберем массив статей на все совпадения и добавим к массиву с датами в значении [дата, кол-во упоминаний]
      cardsFiltered.forEach(element => {
        const regExp = new RegExp(this.searchRequest, 'gi'); 
        
        if (element.title) {
              if (element.title.match(regExp)) {
                  const repeatsTitles = element.title.match(regExp).length
                  const date = new Date(element.publishedAt).toLocaleDateString('ru')
                  weekArray.push([date, repeatsTitles]);
                  countTitles ++;
                  document.querySelector('.title__info').textContent = countTitles;
                }
          }    
        if (element.description) {
              if (element.description.match(regExp)) {
                const repeatsDescription = element.description.match(regExp).length
                const date = new Date(element.publishedAt).toLocaleDateString('ru')
                weekArray.push([date, repeatsDescription]);
                }
            }
            
        }) 
      })

      //собираем из массива с датами и кол-вом упоминаний массив отфильтрованный по датам
      const countRepeatsForRows = weekArray.reduce(function (prevVal, item) {
        if (!prevVal[item[0]]) {
          prevVal[item[0]] = item[1];    
        } else {         
          prevVal[item[0]] = prevVal[item[0]] + item[1];      
        }     
        return prevVal;
      }, []); 

    //итоговый массив с датами и количеством упоминаний передаем в метод создания графика
    this._makeRowsForChart(countRepeatsForRows)
    } 

    //заполненяем ряды графика - по количеству совпадений создаем блок с заливкой и записываем число в этот блок
    _makeRowsForChart(countRepeatsForRows) {

    Object.keys(countRepeatsForRows).forEach(function (repeats) {
      const rowValue = countRepeatsForRows[repeats];
      const chartRow = document.createElement('div');

      chartRow.textContent = rowValue
      
      document.querySelector('.chart__bar').appendChild(chartRow)
      chartRow.style.width = rowValue +'%'
      chartRow.classList.add("chart__item");
    });

    document.querySelector('.chart__item').classList.add('y-axes__text')
    document.querySelector('.chart__item').classList.add('y-axes__text_row_first')

    }

    //выводим день недели в столбец по оси Y и заполняем название месяца в заголовке графика
    makeYaxisForChart() {
     document.querySelector('.chart__text_column-first').textContent = 'ДАТА ' + '(' + this.month + ')';

      this.datesForChart.forEach(element => {
      
        const chartColumn = document.createElement('h6'); 
        chartColumn.textContent = element;
        
        document.querySelector('.chart__y-axes').appendChild(chartColumn)
        chartColumn.classList.add("y-axes__text");
        chartColumn.classList.add("plane-text");
      })
      document.querySelector('.y-axes__text').classList.add('y-axes__text_row_first')
    }

}


