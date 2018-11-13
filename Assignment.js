var click=0;
let posx;
let posy;
var colour;
function setup () {
  strokeWeight(1);
  createCanvas(1000,1000);
  frameRate(100)
background(0);
for(let x=0;x<10;x=x+1){
  fill(random(255),random(255),random(255))
  posx=random(width);
  posy=random(height);

  rect(posx,posy,100,100);}
}

function draw () {
  if(colour==0){
  fill(0,255,0)

}
else{
  fill(random(255),random(255),random(255))
}
  if(colour==1){
    fill(255,0,0)
  }

noStroke();

  if(click==1){
    rect(mouseX,mouseY,30,30)
  }

}



function mousePressed(){
  click=click+1
}

function mouseReleased(){
  click=click-1
}

function keyPressed(){
  if(key=='1')colour=0
  if(key=='2')colour=1
  if(key=='0')colour=100
}

//for the loop criteria instead of only having 1 shape everytime you click, have a line of shapes.
//
