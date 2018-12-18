'use strict';

var userDialog = document.querySelector('.setup');

var wizardCoat = userDialog.querySelector('.wizard-coat');
var wizardEyes = userDialog.querySelector('.wizard-eyes');
var fireballColor = userDialog.querySelector('.setup-fireball-wrap');
var coatInput = userDialog.querySelector('input[name=coat-color]');
var eyesInput = userDialog.querySelector('input[name=eyes-color]');
var fireballInput = userDialog.querySelector('input[name=fireball-color]');

wizardEyes.addEventListener('click', function () {
  window.shuffle(window.data.eyesColors);
  wizardEyes.style = 'fill: ' + window.data.eyesColors[1];
  eyesInput.value = window.data.eyesColors[1];
});

wizardCoat.addEventListener('click', function () {
  window.shuffle(window.data.coatColors);
  wizardCoat.style = 'fill: ' + window.data.coatColors[1];
  coatInput.value = window.data.coatColors[1];
});

fireballColor.addEventListener('click', function () {
  window.shuffle(window.data.fireballColors);
  fireballColor.style.background = window.data.fireballColors[1];
  fireballInput.value = window.data.fireballColors[1];
});

