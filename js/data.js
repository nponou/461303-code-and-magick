'use strict';

var names = ['Иван', 'Мария', 'Кристоф', 'Виктор', 'Люпита', 'Вашингтон', 'Хуан Себастьян'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)',
  'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_QUANTITY = 4;

var wizards = [];


var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];


for (var i = 0; i < WIZARDS_QUANTITY; i++) {
  window.shuffle(surnames);
  window.shuffle(names);
  window.shuffle(coatColors);
  window.shuffle(eyesColors);
  var mage = {
    name: names[i] + ' ' + surnames[i],
    coatColor: coatColors[i],
    eyesColor: eyesColors[i]
  };
  wizards.push(mage);
}
