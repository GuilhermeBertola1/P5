let cols, rows;
let scl = 20;
let w = 1400;
let h = 600;

let terrain = [];

function setup() {
  createCanvas(800, 600, WEBGL);
  cols = w / scl;
  rows = h / scl;

  terrain = new let[cols][rows];
}

function draw() {
  background(0);
  stroke(255);
  noFill();

  translate(width/2, height/2);
  rotateX(PI/3);

  translate(-w/2, -h/2);

  for(let y = 0; y < cols; y++){
    beginShape(TRIANGLE_STRIP);
    for(let x = 0; x < rows; x++){
      vertex(x*scl, y*scl, random(-10, 10));
      vertex(x*scl, (y+1)*scl, random(-10, 10));
    }
    endShape();
  }
}
