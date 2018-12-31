'use strict';
(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var form = document.querySelector('.setup-wizard-form');
  var userDialog = document.querySelector('.setup');
  var dialogStyle = getComputedStyle(userDialog);
  var defaultCoordinates = {
    x: dialogStyle.left,
    y: dialogStyle.top,
  };
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = userDialog.querySelector('.setup-close');

  var successSaveHandler = function (evt) {
    window.backend.save(new FormData(form), function () {
      userDialog.classList.add('hidden');
    });
    evt.preventDefault();
  };

  form.addEventListener('submit', successSaveHandler, function (errorMessage) {
    window.utility.errorHandler(errorMessage);
  }, function () {
    var errorMsg = document.querySelector('.error_message');
    if (errorMsg) {
      errorMsg.remove();
    }
  });
  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE && !(document.activeElement === document.querySelector('.setup-user-name'))) {
      userDialog.classList.add('hidden');
    }
  };

  var openPopup = function () {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
    userDialog.style.left = defaultCoordinates.x;
    userDialog.style.top = defaultCoordinates.y;
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
      userDialog.style.left = defaultCoordinates.x;
      userDialog.style.top = defaultCoordinates.y;
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });
})();
