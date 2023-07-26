let cols, rows;
let scl = 20;
let w = 1600;
let h = 900;

let flying = 0;
let terrain = [];

function setup() {
  createCanvas(800, 800, WEBGL);
  cols = w / scl;
  rows = h / scl;

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0;
    }
  }
}

function draw() {

  flying -= 0.02;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.07;
    }
    yoff += 0.07;
  }
    
  background(0);
  stroke(255);
  noFill();

  translate(width/2, height/2);
  rotateX(PI/3);

  translate(-w/2, -h/2);

  for(let y = 0; y < cols - 1; y++){
    beginShape(TRIANGLE_STRIP);
    for(let x = 0; x < rows; x++){
      vertex(x*scl, y*scl, terrain[x][y]);
      vertex(x*scl, (y+1)*scl, terrain[x][y + 1]);
    }
    endShape();
  }
}