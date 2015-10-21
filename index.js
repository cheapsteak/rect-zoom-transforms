var clamp = require('clamp');

module.exports = function (originalRect, targetRect) {

  var originalCenter = {
    x: originalRect.width / 2,
    y: originalRect.height / 2
  };

  var scale = {
    x: originalRect.width / targetRect.width,
    y: originalRect.height / targetRect.height
  };

  var xTranslations = {
    unbounded: (originalCenter.x - targetRect.x - targetRect.width / 2) * scale.x,
    min: -1 * originalRect.width * (scale.x - 1) / 2,
    max: originalRect.width * (scale.x - 1) / 2
  };

  var yTranslations = {
    unbounded: (originalCenter.y - targetRect.y - targetRect.height / 2) * scale.y,
    min: -1 * originalRect.height * (scale.y - 1) / 2,
    max: originalRect.height * (scale.y - 1) / 2
  };

  var translateX = clamp(xTranslations.unbounded, xTranslations.min, xTranslations.max);
  var translateY = clamp(yTranslations.unbounded, yTranslations.min, yTranslations.max);

  var translate = {
    x: translateX,
    y: translateY,
    xPercent: translateX / originalRect.width * 100,
    yPercent: translateY / originalRect.height * 100
  };

  return {scale: scale, translate: translate};

};
