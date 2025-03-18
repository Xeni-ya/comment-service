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

// Обработчик события на кнопку для отправки комментария
const sendForm = document.querySelector('.submit');

sendForm.addEventListener('click', function (evt) {
  evt.preventDefault(); // Отмена стандартного поведения формы

  // Все ли поля заполнены
  if (!username.value || !avatarLink.value || !commentText.value) {
    alert("Поле не заполнено! Пожалуйста, заполните все поля");
    return;
  }

  const usernameValue = transformName(username.value);
  const avatarLinkValue = avatarLink.value;
  const commentValue = checkSpam(commentText.value);

  addComment(usernameValue, avatarLinkValue, commentValue);

  // Очистка полей формы
  username.value = '';
  avatarLink.value = '';
  commentText.value = '';
});

// Добавление комментария после того, как пользователь ввел все необходимые данные
const addComment = (username, avatarLink, commentText) => {
  const chatDiv = document.getElementById('chat');

  const chatElement = document.createElement('div');
  chatElement.classList.add('comment__style');

  const avatarImg = document.createElement('img');
  avatarImg.src = avatarLink;
  avatarImg.alt = 'Аватар';
  avatarImg.classList.add('comment__style_avatar');
  chatElement.appendChild(avatarImg);

  const nameElement = document.createElement('h3');
  nameElement.textContent = username;
  nameElement.classList.add('comment__style_username');
  chatElement.appendChild(nameElement);

  const textCommentElement = document.createElement('p');
  textCommentElement.textContent = commentText;
  textCommentElement.classList.add('comment__style_text-comment');
  chatElement.appendChild(textCommentElement);

  chatDiv.appendChild(chatElement);
}