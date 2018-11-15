var click=0;
let posx;
let posy;
let r2;
let g2;
let b2;
let size=30;
var colour={
 r:[255,30,150,255,0],
 g:[0,200,150,0,0],
 b:[0,0,255,255,0]};
 var cname=['Colour1','Colour2','Colour3','Colour4','Rainbow']
var index=0

function setup () {
  strokeWeight(1);
  createCanvas(600,600);
  frameRate(100);
background(0);

}

function draw () {
fill(0)
rect(0,0,160,40)

  strokeWeight(1);
  textSize(30);
  fill(255);
  text(cname[index],12,30);

fill(colour.r[index],colour.g[index],colour.b[index]);
noStroke();
if(index==4){
 r2=random(255);
 g2=random(255);
 b2=random(255);
 fill(r2,g2,b2);
}

  if(click==1){
    ellipse(mouseX,mouseY,size,size)
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
if(index==colour.r.length){index=0}
}

function mouseWheel(event){
  var movement=event.delta
if(movement<-1){movement=movement+115}
if(movement>+1){movement=movement-115}
size=movement+size
  console.log(size)
  if(size<15){
    size=10
  }

}
//for the loop criteria instead of only having 1 shape everytime you click, have a line of shapes.
//
