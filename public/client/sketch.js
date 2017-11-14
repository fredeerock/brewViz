var quotes;
function preload() {
  quotes = loadStrings('../data/brew_quotes.txt');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  rectMode(CENTER);
  smooth();
}

function draw() {

  background(h, s, l);  

  textAlign(CENTER);
 
  textSize(24); 
  fill(200);
  text(quotes[quoteNumber], windowWidth/2, windowHeight/2, windowWidth/2, windowHeight/2);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}