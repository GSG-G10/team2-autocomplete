const headerTtitle = document.querySelector('.header-title')
const dataListSection = document.querySelector('#list')
// eslint-disable-next-line no-unused-vars
const createDataList = (query)=>{
    const  request = new XMLHttpRequest();
    request.onreadystatechange = ()=> {
      if (request.readyState === 4) {
        if (request.status === 200) {
          let jsonOptions = JSON.parse(request.responseText);
          jsonOptions.forEach( (elm)=> {
            const createOption = document.createElement('option');
            dataListSection.appendChild(createOption);
            createOption.value = `${elm.name} , ${elm.country}` ;



          });
        } else {
            headerTtitle.textContent = "Couldn't load datalist options :(";
        }
      }
    };
    
    // Update the placeholder text.
    headerTtitle.textContent = "Loading options...!";
    
    // Set up and make the request.
    request.open('GET', `/search?${query}`);
    request.send();
}