# comment-service

Сервис комментариев со спам фильтром

<img src="./assets/img/Снимок.jpg" alt="Сервис комментариев со спам фильтром">

В нём три поля ввода:

- поле для ввода имени. С интерфейсом преобразования имени, который учтёт, все нюансы — лишние пробелы, отсутствие больших букв в имени и прочее.
- поле для ввода ссылки на аватар;
- поле ввода сообщения. Реализовано отображение и добавление сообщений;

```
const comment1 = checkSpam('buy ViAgRA now'); //результат buy *** now
const comment2 = checkSpam('free xxx'); //результат free ***
const comment3 = checkSpam("innocent rabbit") ; //результат innocent rabbit
```

## Команда для компиляции файлов Sass (SCSS) в CSS

`sass --watch assets/sass/app.scss assets/style/style.css`

## Технологии:

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## Результат:

[Перейти по ссылке 👈 ](https://xeni-ya.github.io/comment-service/)
