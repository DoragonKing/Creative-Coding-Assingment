var rot=0;
var star=0;
function setup(){
createCanvas(500,500,WEBGL);
background(0);


}

function draw(){
  //has things rotate on the z axis, only avaiable in WEBGL, had it so every
  //every frame it would rotate.
  rotateZ(rot);
  rot+=0.1;
rect(10,10,0,0);
star+=1;
//runs the function starry
noStroke();
fill(255);
starry();

}

//Gets a star appearrance, had to be done with ellipses in WEBGL coudln't be
//done in points
function starry(){
  noLoop();
  for(let x=-250;x<width;x++){
    var siz=random(10);

  ellipse(x,random(-250,250),siz,siz)
  }
}
