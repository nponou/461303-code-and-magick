'use strict';
(function () {
  var Data = {
    names: ['Иван', 'Мария', 'Кристоф', 'Виктор', 'Люпита', 'Вашингтон', 'Хуан Себастьян'],
    surnames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    coatColors: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)',
      'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyesColors: ['black', 'red', 'blue', 'yellow', 'green'],
    fireballColors: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
    WIZARDS_QUANTITY: 4,
    Wizards: [],
  };
  window.data = Data;

  for (var i = 0; i < Data.WIZARDS_QUANTITY; i++) {
    window.utility.shuffle(Data.surnames);
    window.utility.shuffle(Data.names);
    window.utility.shuffle(Data.coatColors);
    window.utility.shuffle(Data.eyesColors);
    var Mage = {
      name: Data.names[i] + ' ' + Data.surnames[i],
      coatColor: Data.coatColors[i],
      eyesColor: Data.eyesColors[i],
    };
    Data.Wizards.push(Mage);
  }
})();
