var svg = document.getElementById('svg');
var clearp = document.getElementById('clearp');

'Clearp because i get issues if i use clear as a variable or fxn name'


var clearpp = function() {
  while (svg.firstChild) {
    svg.removeChild(svg.firstChild);
  }
};

var circle = function(e) {
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  c.setAttribute("cx", e.offsetX);
  c.setAttribute("cy", e.offsetY);
  c.setAttribute("r", 15);
  c.setAttribute("fill", "blue");
  c.addEventListener("click", color, true);
  svg.appendChild(c);
};

var color = function(e) {
  this.setAttribute("fill", "red");
  this.addEventListener("click", deletep , true);
  e.stopPropagation();
};

var deletep = function(e) {
  svg.removeChild(e.target);
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  c.setAttribute("cx", Math.random() * svg.getAttribute('width'));
  c.setAttribute("cy", Math.random() * svg.getAttribute('height'));
  c.setAttribute("r", 15);
  c.setAttribute("fill", "blue");
  c.addEventListener("click", color, true);
  svg.appendChild(c);
}


svg.addEventListener("click", circle);
clearp.addEventListener("click", clearpp);
