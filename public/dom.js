/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const input = document.querySelector('.data-section-input');
const sendData = () => {
  const query = input.value.trim();
  return createDataList(query)
};
input.oninput = sendData
