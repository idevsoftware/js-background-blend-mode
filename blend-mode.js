var URLreg = /(?:\(['|"]?)(.*?)(?:['|"]?\))/;

document.addEventListener('DOMContentLoaded', function() {
  var supportsBackgroundBlendMode = window.getComputedStyle(document.body).backgroundBlendMode;
  if(typeof supportsBackgroundBlendMode == 'undefined') {  
    // TODO: maybe check for Canvas composite support?
    createBlendedBackgrounds();
  }
}, false);

function createBlendedBackgrounds() {
  var els = document.querySelectorAll('.blend-multiply');
  for(var i = 0; i < els.length; i++) {
    var el = els[i];
    processElement(el);
  }
}

function processElement(el) {
  var style = window.getComputedStyle(el);
  var backgroundImageURL = URLreg.exec(style.backgroundImage)[1];
  var backgroundColor = style.backgroundColor;
  createBlendedBackgroundImageFromURLAndColor(backgroundImageURL, backgroundColor, function(imgData) {
    el.style.backgroundImage = 'url(' + imgData + ')';
  });
}

function createBlendedBackgroundImageFromURLAndColor(url, color, callback) {
  var img = document.createElement('img');
  img.src = url;
  img.onload = function() {
    var canvas = document.createElement('canvas');
    canvas.width = this.naturalWidth;
    canvas.height = this.naturalHeight;
    var context = canvas.getContext('2d');
    context.globalCompositeOperation = 'multiply'
    context.drawImage(this, 0, 0);
    context.fillStyle = color;
    context.fillRect(0, 0, canvas.width, canvas.height);
    var data = canvas.toDataURL('image/jpeg');
    callback(data);
  };
}
