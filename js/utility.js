'use strict';
(function () {
  var Utility = {
    shuffle: function (arr) {
      var j;
      var temp;
      for (var i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
      return arr;
    },
    errorHandler: function (errorMessage) {
      var message = document.createElement('div');
      message.style = 'z-index: 100; margin: 0 auto; padding: 0; bacground-color: grey; text-align: center;';
      message.style.position = 'absulute';
      message.style.top = 0;
      message.style.left = 0;
      message.style.fontSize = '30px';
      message.textContent = errorMessage;
      document.body.insertAdjacentElement('afterbegin', message);
    }
  };
  window.utility = Utility;
})();
