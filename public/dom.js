const input = document.querySelector(".data-section-input");
const sendData = () => {
  const query = input.value.trim();
  createDataList(query);
};
input.oninput = sendData;
