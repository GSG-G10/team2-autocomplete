/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const sendRequest = (url, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      // eslint-disable-next-line no-empty
      if (xhr.status === 200) {
        cb(JSON.parse(xhr.responseText));
      }else{
        console.log('Error')
      }

    }
  };
  xhr.open('GET', url);
  xhr.send();
};
