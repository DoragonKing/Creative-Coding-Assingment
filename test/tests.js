var xoff=0;
function setup(){
createCanvas(500,500);
background(0);

}

function draw(){
  background(0)
  x=map(noise(xoff),0,1,0,width);
  xoff+=0.01
ellipse(x,250,30);

}
