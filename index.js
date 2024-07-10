// Создаем базовые элементы
const doc = document.implementation.createHTMLDocument('');
const body = doc.body;

// Создаем элементы
const header = document.createElement('header');
const main = document.createElement('main');
const footer = document.createElement('footer');

// Создаем содержимое
const h1 = document.createElement('h1');
const p = document.createElement('p');
const button = document.createElement('button');
const footerText = document.createElement('p');

// Устанавливаем текстовое содержимое элементов
h1.textContent = 'Contensus';
p.textContent = 'Your solution for different contention.';
button.textContent = 'Poll';
footerText.textContent = '© 2024 My Website';

// Добавляем элементы в DOM
header.appendChild(h1);
main.appendChild(p);
main.appendChild(button);
footer.appendChild(footerText);

// Добавляем стили
const style = document.createElement('style');
style.textContent = `
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
  }
  header, footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1em 0;
  }
  main {
    padding: 2em;
    text-align: center;
  }
`;
doc.head.appendChild(style);

// Добавляем элементы в body
body.appendChild(header);
body.appendChild(main);
body.appendChild(footer);

// Функция для обработки нажатия на кнопку
function onButtonClick() {
    // Создаем новую ссылку (элемент 'a')
  var newPageLink = document.createElement('a');
  
  // Устанавливаем атрибут href для новой ссылки
  newPageLink.href = 'newpage.html';
  
  // Добавляем текст для ссылки (необязательно)
  newPageLink.textContent = 'Перейти на новую страницу';
  
  // Добавляем созданную ссылку в тело документа
  document.body.appendChild(newPageLink);
  
  // Нажимаем на ссылку (переход на новую страницу)
  newPageLink.click();
  }
  
  // Добавляем обработчик события для кнопки
  button.addEventListener('click', onButtonClick);

// Устанавливаем содержимое документа
document.replaceChild(doc.documentElement, document.documentElement);


