let canvasWidth = 500;
let canvasHight = 500;
let panelR = canvasWidth / 1.5;
let sCtr, mCtr, hCtr;


function setup() {
  createCanvas(canvasWidth, canvasHight);
  frameRate(20);
  preSettings();
}

function draw() {
  preSettings();

  pointer('hours');
  pointer('minutes');
  pointer('seconds');



}
function preSettings() {
  background(0);
   var r=random(0,255);
  var g=random(0,255);
  var b=random(0,255);

  //fill(19, 31, 37);
  fill(r,g,b,50);
  stroke(126, 178, 204);
  strokeWeight(2);
  
  //center
  ellipse(canvasWidth / 2, canvasHight / 2, random(0, 10), random(0, 10));

  //outer
 
  stroke(r,g,b);
  var r = panelR + random(0, 150);
  arc(canvasWidth / 2, canvasHight / 2, r, r, random(0, 2 *PI), random(0, 2 * PI), random(10, 100));


}


function pointer(type) {
  switch (type) {
    case 'seconds':
      if (sCtr < 60) {
        sCtr += 1;
        piDraw(sCtr, type);
      }
      else {
        mCtr++;
        sCtr = 0;
      }
      break;
    case 'minutes':
      if (mCtr < 60) {
        piDraw(mCtr, type);
      }
      else {
        hCtr++;
        mCtr = 0;
      }


      break;
    case 'hours':
      if (hCtr < 12) {
        piDraw(hCtr, type);
      }
      else {
        hCtr = 0;
      }

      break;
  }

}

function piDraw(i, type) {


  strokeWeight(2);


  switch (type) {
    case 'seconds':
      stroke(255, 255, 51);
      fill(229, 125, 20);
      arc(canvasWidth / 2, canvasHight / 2,
        panelR - 30, panelR - 30,
        1.5 * PI + ((i - 1) * PI / 30), 1.5 * PI + i * PI / 30 - 0.07);
      break;
    case 'minutes':
      stroke(229, 181, 149);
      fill(143, 75, 172);
      arc(canvasWidth / 2, canvasHight / 2,
        panelR - 20, panelR - 20,
        1.5 * PI + ((i - 1) * PI / 30), 1.5 * PI + i * PI / 30 - 0.02);
      break;
    case 'hours':
      stroke(51, 255, 255);
      fill(37, 135, 171);
      arc(canvasWidth / 2, canvasHight / 2,
        panelR - 10, panelR - 10,
        1.5 * PI + ((i - 1) * PI / 6), 1.5 * PI + i * PI / 6 - 0.01);
      break;
  }

}