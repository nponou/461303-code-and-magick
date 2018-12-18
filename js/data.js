'use strict';

// var names = ['Иван', 'Мария', 'Кристоф', 'Виктор', 'Люпита', 'Вашингтон', 'Хуан Себастьян'];
// var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
// var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)',
//  'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
// var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
// var WIZARDS_QUANTITY = 4;

// var wizards = [];

// var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];


var data = {
  names: ['Иван', 'Мария', 'Кристоф', 'Виктор', 'Люпита', 'Вашингтон', 'Хуан Себастьян'],
  surnames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  coatColors: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)',
    'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  eyesColors: ['black', 'red', 'blue', 'yellow', 'green'],
  fireballColors: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
  WIZARDS_QUANTITY: 4,
  wizards: []
};
window.data = data;

for (var i = 0; i < data.WIZARDS_QUANTITY; i++) {
  window.shuffle(data.surnames);
  window.shuffle(data.names);
  window.shuffle(data.coatColors);
  window.shuffle(data.eyesColors);
  var mage = {
    name: data.names[i] + ' ' + data.surnames[i],
    coatColor: data.coatColors[i],
    eyesColor: data.eyesColors[i]
  };
  data.wizards.push(mage);
}