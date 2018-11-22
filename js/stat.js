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
var HEADER_X = 120;
var HEADER_Y = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', HEADER_X, HEADER_Y);
  ctx.fillText('Список результатов:', HEADER_X, HEADER_Y + (CLOUD_GAP * 2));

  var maxTime = Math.max.apply(null, times);
  var getRandom = function (min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
  };

  for (var i = 0; i < names.length; i++) {
    var randomColor = 'rgb( 0, 0, ' + getRandom(50, 255) + ')';
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], TEXT_X + (BAR_WIDTH + GAP) * i, TEXT_Y);
    ctx.fillText(Math.round(times[i]), TEXT_X + (BAR_WIDTH + GAP) * i, (BAR_Y - CLOUD_GAP - (times[i] * MAX_BAR_HEIGHT / maxTime)));
    ctx.fillStyle = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : randomColor;
    ctx.fillRect(BAR_X + (BAR_WIDTH + GAP) * i, BAR_Y, BAR_WIDTH, -(times[i] * MAX_BAR_HEIGHT / maxTime));
  }
};
