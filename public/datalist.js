const headerTtitle = document.querySelector('.header-title')
const dataListSection = document.querySelector('#list')
// eslint-disable-next-line no-unused-vars
const createDataList = (data)=>{
  url = `/search?${data}`;
  sendRequest(url,(data)=>{
          data.forEach((elm)=> {
            const createOption = document.createElement('option');
      dataListSection.appendChild(createOption);
      createOption.value = `${elm.name} , ${elm.country}` ;
  });
  });
    // Update the placeholder text.
    headerTtitle.textContent = "Loading options...!";
};
