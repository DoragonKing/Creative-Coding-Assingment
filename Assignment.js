var click=0;
let posx;
let posy;
let r1;
let g2;
let b2;

var r=[255,30,150,100,0];
var g=[0,200,150,100,0];
var b=[0,0,255,255,0];
var index=0

function setup () {
  strokeWeight(1);
  createCanvas(1000,1000);
  frameRate(100);
background(0);
}

function draw () {
fill(r[index],g[index],b[index]);
noStroke();
if(index==4){
 r1=random(255);
 g2=random(255);
 b2=random(255);
  fill(r1,g2,b2);
}

  if(click==1){
    ellipse(mouseX,mouseY,30,30)
  }

}



function mousePressed(){
  click=click+1
}

function mouseReleased(){
  click=click-1
}

function keyPressed(){
index=index+1
if(index>4){index=0}
}

//for the loop criteria instead of only having 1 shape everytime you click, have a line of shapes.
//
