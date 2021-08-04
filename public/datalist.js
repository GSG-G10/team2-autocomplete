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
          createOption.value = `${elm.name},${elm.country}`;
        });
      } else {
        headerTtitle.textContent = "Couldn't load datalist options :(";
      }
    }
  };

  // Update the placeholder text.
  headerTtitle.textContent = 'Loading options...!';

  // Set up and make the request.
  request.open('GET', `/search?q=${query}`);
  request.send();
};
