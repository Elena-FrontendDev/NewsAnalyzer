# *NewsAnalyzer*
### *Дипломный проект "Анализатор новостей"* 

[v 0.0.0] https://elena-frontenddev.github.io/NewsAnalyzer/


#### Цель:  
* разработать сервис для анализа происходящих в мире событий.   
Его задача — установить, насколько популярны новости на определённую тему.  

#### Как это должно работать:  
* Пользователь вводит в строку поиска ключевые слова, по которым хочет найти новости.  
Это обязательное поле. Если оставить его пустым, сайт должен показать ошибку. 

* По нажатию кнопки «Искать» сайт выполняет два действия:  
находит все статьи по запросу за последнюю неделю, отрисовывает карточки с новостями;  
и подсчитывает статистику: сколько новостей вышло в каждый из последних семи дней.  

#### Сайт состоит из трёх страниц:  
* Главная. Содержит только окно поиска.  
* Страница «О проекте». Содержит информацию о работе: что это за проект, кто его делал, какими технологиями пользовался.  
* Страница с аналитикой. На ней отображается диаграмма популярности новостей.  


**npm run build**  - сборка для финальной версии продукта.  
**npm run dev**  - сборка для разработки. Открывает проект на локальном сервере — по адресу http://localhost:8080/   
**npm run deploy**  - сборка для выкладывания сайта на сервер. Вебпак копирует собранный проект из папки dist в ветку gh-pages  репозитория. После этого можно посмотреть проект по адресу https://elena-frontenddev.github.io/NewsAnalyzer/