var interval = setInterval(function(){ moveSquare(); }, 2000); //auto start
var square = document.getElementById('square');
var showRandX = document.getElementById('randNumX');
var showRandY = document.getElementById('randNumY');
var level = document.getElementById('level');

// move the squre div inside the cointainer and show the parametars
function moveSquare() {
var randNumX = Math.floor(Math.random() * 551);
var randNumY = Math.floor(Math.random() * 551);


showRandY.innerHTML =  randNumY;
showRandX.innerHTML =  randNumX;

  square.style.left = randNumX + 'px';
  square.style.top = randNumY + 'px';
  startInterval();

  //UI for scoring system

  if (points < 0) {
    pointSpan.style.color = "red";
  }
  else {
    pointSpan.style.color = "green";
  }
};

/* resets the interval,
  when the timer is over the point's will substract by 5
    */

/*
function startInterval(){
   clearInterval(interval);
   interval = setInterval(function(){ moveSquare(); substractPoints(); }, 2000);
   //moveSquare();
};*/

function startInterval(){

/*
Check if points is larger than 100
if true: set interval to 1000ms
          set level to level 2
if false: set level to leve 1 and continue
*/
   if (points >= 100) {
     // reset interval
     clearInterval(interval);
     /*set new interval
     every 1000ms (1 Second) run substractPoints function and then run moveSquare function
     */
     interval = setInterval(function(){ substractPoints(); moveSquare();  }, 1000);
     // display level 2
     level.innerHTML = 2;
  }
  else {
    //reset interval
    clearInterval(interval);
    /* set new interval,
    every 2000ms (2 Seconds) run substractPoints function and then run moveSquare function
    */
    interval = setInterval(function(){substractPoints(); moveSquare(); }, 2000);
    level.innerHTML = 1;
  }
}
var points = 0; //Game Points
var pointSpan = document.getElementById('points'); //Span of the points
//point system
pointSpan.innerHTML = points;

// Adding points
function addPoints() {
  points +=10;
  pointSpan.innerHTML = points;
};
// substract points
function substractPoints(){
  points -= 5;
  pointSpan.innerHTML = points;
};
interval;
