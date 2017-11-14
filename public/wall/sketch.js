//pull upvoted quotes here

var result;
var compass;
function preload() {
  result = loadStrings('../data/brew_quotes.txt');
  compass = loadImage("../data/compass4x.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  rectMode(CENTER);
  imageMode(CENTER);
}

var n = 0;

function draw() {
  background(h, s, l);
  
  n = n + 0.1;
  translate(width, 0);
  rotate(radians(n));
  image(compass, 0, 0, windowHeight*1.5, windowHeight*1.5);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}