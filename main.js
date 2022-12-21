leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup()
{
  canvas = createCanvas(500,500);
  canvas.position(750,100);
  video = createCapture(500,500);
  video.position(100,100);
  poseNet = ml5.poseNet(video,modalLoaded);
  poseNet.on('pose',gotPoses);
}

function preload()
{

}


function draw()
{
  background('0,0,0');
  textSize(difference);
  fill('#6C91C2');
  text('Krish' , 50, 400);
  document.getElementById("fontSize").innerHTML = "font size of the text is -"+ difference+ "px";
}

function modalLoaded()
{
    console.log("PoseNet is initialised");

}


function gotPoses(results)
{
   if(results.length>0)
   {
    console.log(results);
    
   leftWristX = results[0].pose.leftWrist.x;
   rightWristX = results[0].pose.rightWrist.x;
   difference = floor(leftWristX-rightWristX);
   console.log(difference);
   }

}


