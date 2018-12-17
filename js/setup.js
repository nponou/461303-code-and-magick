'use strict';

var names = ['Иван', 'Мария', 'Кристоф', 'Виктор', 'Люпита', 'Вашингтон', 'Хуан Себастьян'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)',
  'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_QUANTITY = 4;
var userDialog = document.querySelector('.setup');
var wizards = [];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var wizardCoatColots = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
  'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

function shuffle(arr) {
  var j;
  var temp;
  for (var i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

for (i = 0; i < WIZARDS_QUANTITY; i++) {
  shuffle(surnames);
  shuffle(names);
  shuffle(coatColors);
  shuffle(eyesColors);
  var mage = {
    name: names[i] + ' ' + surnames[i],
    coatColor: coatColors[i],
    eyesColor: eyesColors[i]
  };
  wizards.push(mage);
}

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < WIZARDS_QUANTITY; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var defaultCoordinates = {};
var dialogStyle = getComputedStyle(userDialog);
defaultCoordinates.x = dialogStyle.left;
defaultCoordinates.y = dialogStyle.top;
var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');
var userNameInput = userDialog.querySelector('.setup-user-name');
var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && !(document.activeElement === userNameInput)) {
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
}
);

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

var wizardCoat = userDialog.querySelector('.wizard-coat');
var wizardEyes = userDialog.querySelector('.wizard-eyes');
var fireballColor = userDialog.querySelector('.setup-fireball-wrap');
var coatInput = userDialog.querySelector('input[name=coat-color]');
var eyesInput = userDialog.querySelector('input[name=eyes-color]');
var fireballInput = userDialog.querySelector('input[name=fireball-color]');

wizardEyes.addEventListener('click', function () {
  shuffle(eyesColors);
  wizardEyes.style = 'fill: ' + eyesColors[1];
  eyesInput.value = eyesColors[1];
});

wizardCoat.addEventListener('click', function () {
  shuffle(wizardCoatColots);
  wizardCoat.style = 'fill: ' + wizardCoatColots[1];
  coatInput.value = wizardCoatColots[1];
});

fireballColor.addEventListener('click', function () {
  shuffle(fireballColors);
  fireballColor.style.background = fireballColors[1];
  fireballInput.value = fireballColors[1];
});

