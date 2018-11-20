'use strict';

var CLOUD_WIDTH = 470;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var GAP = 50;
var BAR_WIDTH = 40;
var MAX_BAR_HEIGHT = 150;
var TEXT_Y = 260;
var TEXT_X = 140;
var BAR_Y = 240;
var BAR_X = 140;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};


window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 270, 30);
  ctx.fillText('Список результатов:', 260, 50);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var getRandom = function (min, max) {
      var rand = min - 0.5 + Math.random() * (max - min + 1);
      rand = Math.round(rand);
      return rand;
    };
    var randomColor = 'rgb( 0, 0, ' + getRandom(50, 255) + ')';

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillText(names[i], TEXT_X + (BAR_WIDTH + GAP) * i, TEXT_Y);
      ctx.fillRect(BAR_X + (BAR_WIDTH + GAP) * i, BAR_Y, BAR_WIDTH, -(times[i] * MAX_BAR_HEIGHT / maxTime));
      ctx.fillText(times[i], TEXT_X + (BAR_WIDTH + GAP) * i, (BAR_Y - CLOUD_GAP - (times[i] * MAX_BAR_HEIGHT / maxTime)));
    } else {
      ctx.fillStyle = randomColor;
      ctx.fillText(names[i], TEXT_X + (BAR_WIDTH + GAP) * i, TEXT_Y);
      ctx.fillRect(BAR_X + (BAR_WIDTH + GAP) * i, BAR_Y, BAR_WIDTH, -(times[i] * MAX_BAR_HEIGHT / maxTime));
      ctx.fillText(Math.round(times[i]), TEXT_X + (BAR_WIDTH + GAP) * i, (BAR_Y - CLOUD_GAP - (times[i] * MAX_BAR_HEIGHT / maxTime)));
    }
  }
};
