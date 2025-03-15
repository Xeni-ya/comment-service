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
  return name.trim().charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

//фильтрация спама
function checkSpam(str) {
  return str.replace(/viagra/gi, '***').replace(/xxx/gi, '***');
}

// Обработчик события на кнопку
const btn = document.querySelector('.submit');

btn.addEventListener('click', function (evt) {
  evt.preventDefault(); // Отмена стандартного поведения формы

  const usernameValue = transformName(username.value);
  const avatarLinkValue = avatarLink.value;
  const commentValue = checkSpam(commentText.value);

  addComment(usernameValue, avatarLinkValue, commentValue);

  // Очистка полей формы
  username.value = '';
  avatarLink.value = '';
  commentText.value = '';
});

const addComment = (username, avatarLink, comment) => {
  const chatDiv = document.getElementById('chat');

  const chatElement = document.createElement('div');

  const avatarImg = document.createElement('img');
  avatarImg.src = avatarLink;
  avatarImg.alt = 'Аватар';
  avatarImg.style.width = '50px';
  avatarImg.style.height = '50px';
  avatarImg.style.borderRadius = '50%';
  chatElement.appendChild(avatarImg);

  const nameElement = document.createElement('h3');
  nameElement.textContent = username;
  chatElement.appendChild(nameElement);

  const messageElement = document.createElement('p');
  messageElement.textContent = comment;
  chatElement.appendChild(messageElement);

  chatDiv.appendChild(chatElement);
}