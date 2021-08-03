/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const input = document.querySelector('.data-section-input');
const sendData = () => {
  const data = input.value.trim();
  return sendRequest(`/search?${data}`, () => data);
};
