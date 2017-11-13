var result;
function preload() {
  result = loadStrings('../data/brew_quotes.txt');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  rectMode(CENTER);
  smooth();
}

function draw() {
  

  background(h, s, l);  
  
  textSize(24);

  textAlign(CENTER);
    
  // st = "The quick brown fox jumped over the lazy dog.";
  // var ind = floor(random(result.length));
  
  fill(50);
  text(result[q], windowWidth/2, windowHeight/2, windowWidth/2, windowHeight/2); // Text wraps within text box

  // blendMode(DIFFERENCE);
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}