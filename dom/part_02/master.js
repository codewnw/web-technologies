setInterval("changeColor()", 500);

function changeColor() {
  var color = getRandomColor();
  document.querySelector("h1").style.color = color;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
