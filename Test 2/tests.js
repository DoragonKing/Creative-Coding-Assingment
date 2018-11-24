
function setup(){
createCanvas(500,500);


}

function draw(){
  noLoop();
background(0);
//beginShape();
stroke(255)
//draws a point at every x cordinate and at random Y coordinates, the size of
//the points are random.
for(let x=0;x<width;x++){
  strokeWeight(random(5))
  point(x,random(height))
}
//endShape();


}
