function onHomeButtonClick() {
    var newHomePageLink = document.createElement('a');
    newHomePageLink.href = 'home.html';
    document.body.appendChild(newHomePageLink);
    newHomePageLink.click();
  }
  
  document.getElementById('homeButton').addEventListener('click', onHomeButtonClick);

  // Функция для обработки нажатия на кнопку "Submit"
  function onSubmitButtonClick() {
    var userInput2 = document.getElementById('userInput2').value;
    //var newResultLink = document.createElement('a');
    //newResultLink.href = 'newResult.html';
    //document.body.appendChild(newResultLink);
    //newResultLink.click();
    alert('Your input is: ' + userInput2);
  }
  
  // Добавляем обработчик события для кнопки "Submit"
  document.getElementById('submitButton').addEventListener('click', onSubmitButtonClick);

  // Функция для извлечения параметров из URL
function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const queryArray = queryString.split('&');
    
    queryArray.forEach(query => {
      const pair = query.split('=');
      params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    });
  
    return params;
  }
  
  // Получаем текст из параметров URL
  const queryParams = getQueryParams();
  const userText = queryParams['text'] || '';
  
  // Отображаем текст на странице
  document.getElementById('displayText').textContent = userText;
  