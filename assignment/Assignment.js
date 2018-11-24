//List or variables
var click=0;
let posx;
let posy;
let r2;
let g2;
let b2;
let size=30;
var colour={
 r:[255,30,150,255,0,0],
 g:[0,200,150,0,0,0],
 b:[0,0,255,255,0,0]};
 var cname=['Colour1','Colour2','Colour3','Colour4','Rainbow','Black/Erase']
var index=0;
var xoff=0;
//var s;
//the x value of where to pick up the value for the perlin noise
var yoff1=0;
var yoff2=200;
var yoff3=600;
var col1;
var col2;
var col3;



function setup () {
  strokeWeight(1);
  createCanvas(600,600);
  frameRate(300);
background(0);
}

function draw () {
  //maps the perlin noise value to RGB
  var col1= map(noise(yoff1),0,1,0,255);
  var col2= map(noise(yoff2),0,1,0,255);
  var col3= map(noise(yoff3),0,1,0,255);
//  var s= map(noise(xoff),0,1,0,60);
  var rainbow={
    r:col1,
    g:col2,
    b:col3,
  }

fill(0)
rect(0,0,220,40)
//Add text stating what the colour is so uses know what the colour is
  strokeWeight(1);
  textSize(30);
  fill(255);
  text(cname[index],12,30);
//So the colour changes depending on what the index is
fill(colour.r[index],colour.g[index],colour.b[index]);
noStroke();
//The random colour, so every circle colour is random
if(index==4){
 //r2=random(255);
 //g2=random(255);
 //b2=random(255);
 fill(rainbow.r,rainbow.g,rainbow.b);
}

  if(click==1){
    ellipse(mouseX,mouseY,size)
  //  xoff+=0.01
  //this is so that the the colours keep changing
    yoff1+=0.02
    yoff2+=0.02
    yoff3+=0.02
  }
}
/*This is so I can activate when to start drawing which is when
the mouse is clicked and stop drawing when the mouse is released*/
function mousePressed(){
  // changed from adding 1 to click to making it one, found a bug if you somehow click while the mouse is held and vice versa for the release
  click=1
}
function mouseReleased(){
  click=0
}
/*The code here changes the colour, I have it so if any key is press the colour changes
and made sure that the colour doesn't change whenever I press 0 to clear the canvas*/
function keyPressed(){
if(key=='0'){background(0)}
else{
index=index+1
if(index==colour.r.length){index=0}
}
}



//This is the code that adjusts the size of the circles
function mouseWheel(event){
  var movement=event.delta
  //This is to make the changes to the circle size much less drastic whenever the mouse is scrolled
if(movement<-1){movement=movement+115}
if(movement>+1){movement=movement-115}
size=movement+size
//The console log is just so I can see if the size is changing as it should be
//and to figure out how much the mousewheel changed the size
  console.log(size)
  //Just adds a minimum size so that it doesn't get ridicolously small
  if(size<15){
    size=10
  }

}

//idea,if the there's a large amount of circles on the screen have all the balls drop or have something happen.
//use the perlin noise to draw instead of having the person draw
//better idea, use the perlin noise for the rainbow instead of random
//and use it to change the size of the brush
