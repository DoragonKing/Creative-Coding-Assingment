
function setup(){
createCanvas(500,500);


}

function draw(){
  noLoop();
background(0);
//beginShape();
stroke(255)

for(let x=0;x<width;x++){
  strokeWeight(random(5))
  point(x,random(height))
}
//endShape();


}
