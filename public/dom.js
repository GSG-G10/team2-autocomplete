/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const input = document.querySelector('.data-section-input');
const sendData = () => {
  const data = input.value.trim();
  sendRequest(`/search?${data}`, () => JSON.parse(data));
};

input.oninput = sendData