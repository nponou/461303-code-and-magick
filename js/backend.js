'use strict';
(function () {
  var Backend = {
    save: function (data, onSuccess, onError) {
      var URL = 'https://js.dump.academy/code-and-magick';
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.addEventListener('load', function () {
        onSuccess(xhr.response);
      });
      xhr.addEventListener('error', function () {
        onError(xhr);
      });
      xhr.addEventListener('timeout', function () {
        onError(xhr.response);
      });
      xhr.timeout = 100;
      xhr.open('POST', URL);
      xhr.send(data);
    },
    load: function (onSuccess, onError) {
      var URL = 'https://js.dump.academy/code-and-magick/data';
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          onSuccess(xhr.response);
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
        xhr.addEventListener('error', function () {
          onError('Произошла ошибка соеденения');
        });
        xhr.addEventListener('timeout', function () {
          onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
        });
      });
      xhr.open('GET', URL);
      xhr.send();
    },
  };
  window.backend = Backend;
})();
