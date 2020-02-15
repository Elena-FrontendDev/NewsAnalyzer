//класс для вывода графика статистики (создан через боль, прошу понять и простить, буду рефакторить в будущем)

export default class Statistics {
    constructor(arr, request) {
        this.arr = arr  //массив из localStorage
        this.request = request //запрос пользователя из localStorage
    }

    //запись запроса пользователя в блок страницы 
    setRequest() {
        const request = this.request.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
        document.querySelector('.chart-info__title').textContent = 'Вы спросили: «'+ request +'»';
        const weekInfo = this.arr.length;
        document.querySelector('.week__info').textContent = weekInfo; 
    } 

//получим массив 7-ми дней недели от сегодняшней даты для последующей проверки массива статей
getDateArr() {
  const dateBefore = new Date();
    const dateNow = new Date();
   
    const weekArray = [dateNow.toLocaleDateString('ru')]
   for (let index = 0; index < 6; index++) { 
    let daysfore = dateBefore.setDate(dateBefore.getDate() - 1);
    let daysBefore = new Date(daysfore);       
    weekArray.push(daysBefore.toLocaleDateString('ru'));
}

this.checkHeaders(weekArray)
return weekArray; 
}

//проверим массив статей и сделаем массив с совпадениями запроса по заголовкам и описанию к статьям 
checkHeaders(weekArray) {
  let count = 0
  let arrForChart = []
  this.arr.forEach(element => {
    //проверка, есть ли заголовок у статьи, если null была ошибка без проверки
    if (element.title) {
      const title = element.title.toLowerCase()
      if (title.includes(this.request)) {
         count++
         let date = new Date(element.publishedAt)
         arrForChart.push(date.toLocaleDateString('ru'))
   
         document.querySelector('.title__info').textContent = count;
         return arrForChart 
        }
      }    
     })
     //проверим описание статей на совпадение с запросом пользователя
     this.arr.forEach(element => {

      const description = element.description.toLowerCase()
   
   if (description.includes(this.request)) {

    count++
    let date = new Date(element.publishedAt)
    arrForChart.push(date.toLocaleDateString('ru'))
    return arrForChart 
   }

   })   
     this.makeArrForChart(arrForChart, weekArray)   //передадим массив из 7-ми дней и массив с совпадениями по дате для отрисовки графика        
} 

//сделаем из двух массивов один и далее перебором найдем количество совпадений для каждого дня 
makeArrForChart(arrForChart, weekArray) {
 const  dowbleArray = arrForChart.concat(weekArray).sort()
 let row = [];
 // console.log(dowbleArray)
 
  for (let index = 0; index < dowbleArray.length; index++) {
    const count = row[dowbleArray[index]];
    if (count) {
      row[dowbleArray[index]] = count+1;
    } else {
      row[dowbleArray[index]] = 1;
    }

  }
  const rowGraph = Object.values(row)
  let newArrayForGraph = []
  rowGraph.forEach(element => {
    let d = element-1
    newArrayForGraph.push(d)

  });
 // console.log(newArrayForGraph) // это последние данные для отрисовки рядов графика!
  
//рисуем ряды графика - по количеству совпадений создаем блок с заливкой и записываем число в этот блок
for (let index = 0; index < newArrayForGraph.length; index++) {
  let element = newArrayForGraph[index];
  const dateRow = document.createElement('div');

  dateRow.textContent = element
  
  document.querySelector('.chart__bar').appendChild(dateRow)
  dateRow.style.width = element +'%'
  dateRow.classList.add("chart__item");
}
document.querySelector('.chart__item').classList.add('y-axes__text')
document.querySelector('.chart__item').classList.add('y-axes__text_row_first')

}

//создаем массив для заполнения оси Y графика и выводим в заголовок графика месяц
    makeWeekArray() {
      const dateBefore = new Date();
        const dateNow = new Date();
        let weekDays = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
        const arrChart = [dateNow.getDate() + ', ' + weekDays[dateNow.getDay()]]
       for (let index = 0; index < 6; index++) { 
        let daysfore = dateBefore.setDate(dateBefore.getDate() - 1);
        let daysBefore = new Date(daysfore);
        
        arrChart.push(daysBefore.getDate() + ', ' + weekDays[daysBefore.getDay()]);

    }
    let month = (dateNow.toLocaleString('ru', {month:'long'}).toUpperCase())
    document.querySelector('.chart__text_column-first').textContent = 'ДАТА ' + '(' + month + ')';

   arrChart.reverse()
   this.makeDateColumn(arrChart);

   this.getDateArr()
    return arrChart; 
    }

    //заполняем ось Y числом и днем недели (13, пт)
    makeDateColumn (arrChart) {
      for (let index = 0; index < arrChart.length; index++) {
        let element = arrChart[index];
        const dateColumn = document.createElement('h6');
        
       dateColumn.textContent = element
       
       document.querySelector('.chart__y-axes').appendChild(dateColumn)
       dateColumn.classList.add("y-axes__text");
       dateColumn.classList.add("plane-text");
      }
      document.querySelector('.y-axes__text').classList.add('y-axes__text_row_first')
        }

}


