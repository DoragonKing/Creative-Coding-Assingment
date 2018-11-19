var xoff1=0;
var xoff2=10;
var frame=0;
var c=40;
function setup(){
createCanvas(500,500);
background(0);
frameRate(100000);
}

function draw(){
  noStroke();
  frame=frame+1
  x=map(noise(xoff1),0,1,0,width);
  y=map(noise(xoff2),0,1,0,width);
  siz=map(noise(xoff1),0,1,0,30)
  colour=map(noise(c),0,1,0,255);
  xoff1+=0.01;
  xoff2+=0.01;
  c+=0.01
  fill(colour)
  //if(frame>=220){
  //  fill(colour);
  //}
ellipse(x,y,siz);

}
