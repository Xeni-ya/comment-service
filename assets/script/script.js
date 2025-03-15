// function normalizeName(name) {
//   return name.trim().toLowerCase().replace(/\s+/g, ' ').replace(/^./, match => match.toUpperCase());
// }

// function checkSpam(str) {
//   return str.replace(/viagra/gi, '***').replace(/xxx/gi, '***');
// }

// const formElement = document.querySelector('.form-inner');
// const button = document.querySelector('.submit');
// const form = document.forms.form;
// const usernameInput = form.elements.username;

// // вешаем на неё обработчик события submit
// button.addEventListener('submit', function (evt) {
//   evt.preventDefault(); //Отмена стандартного поведения формы
//   console.log(usernameInput.value);    //Вывод значения input
// });

// const chatDiv = document.getElementById('chat');

// const chatElement = document.createElement('li');
// chatElement.textContent = '';

// chatDiv.append(chatElement);

// function addComment() {
//   const usernameInput = document.getElementById('username');
//   const linkInput = document.getElementById('link');
//   const commentInput = document.getElementById('comment');
//   const button = document.querySelector('.submit');
//   const chat = document.getElementById('chat');

//   const textComment = usernameInput.value;
// //checkSpam();
//   chat.innerText = console.log('textComment')
// }
// //button.EventListener
// addComment();


// Найти нужный элемент
const username = document.getElementById('username');
const avatarLink = document.getElementById('link');
const commentText = document.getElementById('comment');

// Преобразование имени
function transformName(name) {
  name.trim().charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

//фильтрация спама
function checkSpam(str) {
  return str.replace(/viagra/gi, '***').replace(/xxx/gi, '***');
}

// Проверить, что ссылка действительна (например, начинается с "http://" или "https://")
function isValidUrl(url) {
  const regex = /^(http:\/\/|https:\/\/)/;
  return regex.test(url);
}

const addComment = () => {
  transformName(username.value);
  transformName(avatarLink.value);
  checkSpam(commentText.value);
}

// Создание элемента для отображения комментария
const commentElement = document.createElement('div');
commentElement.innerHTML = <img src="${avatarLink}" alt="Аватар" style="width:30px; height:30px;"> <strong>${username}</strong>: ${commentText};
