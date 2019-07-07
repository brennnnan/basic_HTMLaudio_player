var waveformPoints;
var pointArray
function preload() {
  waveformPoints = loadJSON('coco_small.json');
}

function setup() {
  pointArray = waveformPoints.data;
  console.log("Max point is: " + max(pointArray));
  console.log("Min point is: " + min(pointArray));
  createCanvas(1200,600)
  noLoop()
}

function draw() {
  var lastx = 12;
  var lasty = 300;
  line(10,300,12,300+(pointArray[100]/100));
  for(var i=100; i<1000; i++) {
    line(lastx, 300+(pointArray[i]/100), lastx+2, 300+(pointArray[i+1]/100));
    lastx+=2
  }
};