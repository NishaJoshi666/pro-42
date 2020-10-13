  var hr,mn,sc;
var hrAngle,mnAngle,scAngle; 
var time = [hrAngle,mnAngle,scAngle]

function setup(){
    createCanvas(displayWidth,displayHeight); 

    getCurrentTime();

    angleMode(DEGREES);   
}

function draw(){
    background(0,270,295);
    textSize(30)
    fill("blue")
    text("(RELOAD THE PAGE TO GET CURRENT TIME)",displayWidth/2-100,displayHeight/2+100)
    textSize(60);
    text("CURRENT TIME = "+ time,displayWidth/2-100,displayHeight/2)
   

    translate(200,200);
    rotate(-90);

    hr = hour();
    mn = minute();
    sc = second();

    scAngle = map(sc, 0, 60, 0, 360);
    mnAngle = map(mn,0,60,0,360);
    hrAngle = map(hr % 12,0,12,0,360);

    //seconds hand
    push();
    rotate(scAngle);
    stroke(255,215,0);
    strokeWeight(7);
    line(0,0,100,0);
    pop()

    //minute hand
    push();
    rotate(mnAngle);
    stroke(7,163,247);
    strokeWeight(7);
    line(0,0,75,0);
    pop()

    //hour hand
    push();
    rotate(hrAngle);
    stroke(159,19,240);
    strokeWeight(7);
    line(0,0,50,0);
    pop()

    stroke(255,0,255);
    point(0,0)

    
    strokeWeight(10);
    noFill();

    //Seconds
    stroke(255,215,0);
    arc(0,0,300,300,0,scAngle);

    //Minutes
    stroke(7,163,247);
    arc(0,0,280,280,0,mnAngle);

    //Hour
    stroke(159,19,240);
    arc(0,0,260,260,0,hrAngle);


}

async function getCurrentTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  

  var datetime = responseJSON.datetime;
  time = datetime.slice(11,16);
  

   
}
