// Функция для обработки нажатия на кнопку "Home Page"
function onHomeButtonClick() {
  var newHomePageLink = document.createElement('a');
  newHomePageLink.href = 'home.html';
  document.body.appendChild(newHomePageLink);
  newHomePageLink.click();
}

// Добавляем обработчик события для кнопки "Home Page"
document.getElementById('homeButton').addEventListener('click', onHomeButtonClick);
