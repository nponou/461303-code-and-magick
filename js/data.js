'use strict';
(function () {
  var data = {
    names: ['Иван', 'Мария', 'Кристоф', 'Виктор', 'Люпита', 'Вашингтон', 'Хуан Себастьян'],
    surnames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    coatColors: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)',
      'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyesColors: ['black', 'red', 'blue', 'yellow', 'green'],
    fireballColors: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
    WIZARDS_QUANTITY: 4,
    wizards: [],
  };
  window.data = data;

  for (var i = 0; i < data.WIZARDS_QUANTITY; i++) {
    window.utility.shuffle(data.surnames);
    window.utility.shuffle(data.names);
    window.utility.shuffle(data.coatColors);
    window.utility.shuffle(data.eyesColors);
    var mage = {
      name: data.names[i] + ' ' + data.surnames[i],
      coatColor: data.coatColors[i],
      eyesColor: data.eyesColors[i],
    };
    data.wizards.push(mage);
  }
})();
