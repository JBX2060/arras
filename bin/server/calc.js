exports.dist = function (x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

exports.constrain = function (num, min, max) {
  return Math.min(Math.max(num, min), max);
};

exports.scale = function (num, fromMin, fromMax, toMin, toMax) {
  num = Math.min(Math.max(num, fromMin), fromMax);
  return (num - fromMin) * (toMax - toMin) / (fromMax - fromMin) + toMin;
};

exports.radToDeg = function (radians) {
  return radians * 180 / Math.PI;
};

exports.degToRad = function (degrees) {
  return degrees * Math.PI / 180;
};

exports.circleArea = function (radius) {
  return Math.pow(radius, 2) * Math.PI;
};

exports.randFloat = function (min, max) {
  return Math.random() * (max - min) + min;
};

exports.randInt = function (min, max) {
  min = Math.ceil(min);
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + min;
};