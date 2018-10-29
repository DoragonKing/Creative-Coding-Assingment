


function setup(){
createCanvas(594,841, WEBGL)
frameRate(4)
}
function draw(){

  var posX = random(width/2);
  var posY = random(height/2);
  var posX2 = random(width/2);
  var posY2 = random(height/2);
  var sizeX = random(50);
  var sizeY = random(50);
  background(123);

  var colourR = random(255);
  var colourG = random(255);
  var colourB = random(255);
  fill(colourR,colourG,colourB);


//  translate(mouseX-width/2,mouseY-height/2)
  sphere(sizeX,20,20)

  rect(200,200,30,30)



rect(posX-posX2,posY-posY2,sizeX+10,sizeY+10)







}
