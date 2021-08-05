const headerTtitle = document.querySelector('.header-title');
const dataListSection = document.querySelector('#list');
const createDataList = (query) => {
  const request = new XMLHttpRequest();
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        const jsonOptions = JSON.parse(request.responseText);
        jsonOptions.forEach((elm) => {
          const createOption = document.createElement('option');
          dataListSection.appendChild(createOption);
          createOption.value = elm.title;
        });
      } else {
        headerTtitle.textContent = "Couldn't load datalist options :(";
      }
    }
  };
  request.open('GET', `/search?q=${query}`);
  request.send();
};
