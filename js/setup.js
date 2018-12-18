'use strict';

var userDialog = document.querySelector('.setup');
var dialogStyle = getComputedStyle(userDialog);
var defaultCoordinates = {
  x: dialogStyle.left,
  y: dialogStyle.top
};

var wizardCoat = userDialog.querySelector('.wizard-coat');
var wizardEyes = userDialog.querySelector('.wizard-eyes');
var fireballColor = userDialog.querySelector('.setup-fireball-wrap');
var coatInput = userDialog.querySelector('input[name=coat-color]');
var eyesInput = userDialog.querySelector('input[name=eyes-color]');
var fireballInput = userDialog.querySelector('input[name=fireball-color]');

wizardEyes.addEventListener('click', function () {
  window.shuffle(eyesColors);
  wizardEyes.style = 'fill: ' + eyesColors[1];
  eyesInput.value = eyesColors[1];
});

wizardCoat.addEventListener('click', function () {
  window.shuffle(coatColors);
  wizardCoat.style = 'fill: ' + coatColors[1];
  coatInput.value = coatColors[1];
});

fireballColor.addEventListener('click', function () {
  window.shuffle(fireballColors);
  fireballColor.style.background = fireballColors[1];
  fireballInput.value = fireballColors[1];
});

