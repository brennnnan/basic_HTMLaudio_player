var waveformPoints;
var pointArray;

function preload() {
  waveformPoints = loadJSON('coco_small.json');
}

function setup() {
  // pointArray is basically an array of samples of audio, each an int between [-(2^16), 2^16]
  // I will probably change this to 8 bit so they are only between -256 and 256, we don't need that much granularity
  pointArray = waveformPoints.data;
  console.log("Max point is: " + max(pointArray));
  console.log("Min point is: " + min(pointArray));
  createCanvas(1200,600)
  noLoop()
}

function draw() {
  var lastx = 2;
  var lasty = 300;
  
  // draws first line from origin (0,300) to first point. 
  // i'm calling that the origin because 300 is half the height of the canvas.
  // the y distance between points can change
  line(0,300,2,300+(pointArray[100]/100));
  for(var i=100; i<1000; i++) {
    // draw a bunch more lines, each connecting to the previous point
    line(lastx, 300+(pointArray[i]/100), lastx+2, 300+(pointArray[i+1]/100));
    lastx+=2
  }
};