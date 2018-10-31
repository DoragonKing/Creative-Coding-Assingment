

//this is all experimentation at the moment and figuring out what sort of thing i wanna do
function setup(){
createCanvas(594,841, WEBGL)
frameRate(10)
}
function draw(){
//The following variable lines are for the position and size of the shapes
//to get the the cordinates to be either positive negative had to have 2
//seperate values.
  var posX = random(width/2);
  var posY = random(height/2);
  var posX2 = random(width/2);
  var posY2 = random(height/2);
  var sizeX = random(50);
  var sizeY = random(50);
  //sets background colour to a shade of grey
  background(123);
//random will have random values inbetween 0 and the max value thats been inputed
  var colourR = random(255);
  var colourG = random(255);
  var colourB = random(255);
  fill(colourR,colourG,colourB);

//put the buttome code as string to keep it off for now
//  translate(mouseX-width/2,mouseY-height/2)
  sphere(sizeX,20,20)

  rect(200,200,30,30)


//have now realised can just inser "random" into the values

rect(posX-posX2,posY-posY2,sizeX+10,sizeY+10)
fill(255)
ellipse(random(30),random(30),30,30)
//there was an attempt to make multiple rectangles.
rect(mouseX-width/2,mouseY-height/2,30,30)


//noLoop();

}
