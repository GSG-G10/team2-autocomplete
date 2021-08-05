const submitButton = document.querySelector('.submitButton')
submitButton.addEventListener('click', ()=> {
    const inputValue = document.querySelector('.data-section-input').value;
    let url = `/search?q=${inputValue}`;
    sendRequest(url, creatCards);
});
