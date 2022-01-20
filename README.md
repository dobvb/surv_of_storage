# Мониторинг хранилищ конфигураций 1С

Реализация отчета на JavaScript, которые заполняется данными из http-сервера 1С. 


**На стороне 1С:**

Бэкенд - база 1С, http-сервис которой опубликован на веб-сервере. В структуре метаданных он назвается myservice. Путь к этому веб-сервису необходимо прописать в файле hjava.js, заменив все get-запрос на тот, который будет у вас в сети. Сейчас ссылки на http-сервис в файле выглядят так: https://ваш_веб_вервер/имя_опубликованной_базы/hs/myservice

1.1. База 1С - dt файл базы в каталоге base. 

1.2. По регламентному заданию выгружает изменения из хранилищ конфигурации, разбирает полученный файл и пишет в базу. 

1.3. По второму регламенту взятому выполняется рассылку отчета по изменениям заинтересованным лицам на почту (на базе БСП). 

1.4. В отчет в макете добавляем ссылку на адрес, привязанный к вашему index.php или index.html. Примерно, что-то такого вида, https://mysite.ru/surv_of_storage


**На стороне странички отчета**

2.1. Публикуете страничку на веб-сервере по вашему адресу в сети (см. 1.4).

2.2. Если на Bitrix. Файл стилей включен внутрь Index.php, соответствующий hjava.js лежат каталоге Bitrix

2.3. Если на обычном Html, все вынесено в папку Html. 



Конфигурация мониторит хранилища баз 1С и рассылает отчет. Также есть страничка на JavaScript, выводящая изменения по объектам, за период и т.д. Понятно, что в базе может быть любая информация, которую можно выводить в html+js, при условии наличия соответсвующего http-сервиса.

