const sendRequest = (url, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        cb(JSON.parse(xhr.responseText));
      } else if (xhr.status === 404) xhr.responseText.status = 404;
    }
  };
  xhr.open('GET', url);
  xhr.send();
};
