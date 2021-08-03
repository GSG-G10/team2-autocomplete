/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const sendRequest = (url, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        
      }

    }
  };
  xhr.open('GET', url);
  xhr.send();
};
