let x = 50;
let y = 50;

let speedX = 0;
let speedY = 0;

let fuel = 100;

let gameStarted = false;
let gameOver = false;
let landed = false;

function draw() {
if (gameStarted == false) {

    background(0);

    fill(255);
    textAlign(CENTER);

    textSize(50);
    text("LUNAR LANDER", 700, 200);

    textSize(25);
    text("Land your rocket safely!", 700, 260);

    textSize(20);
    text("W = Thrust", 700, 350);
    text("A = Left", 700, 380);
    text("D = Right", 700, 410);

    textSize(25);
    text("Press ENTER to start", 700, 500);

    return;
  }






}
  function rocketship(x, y) {

    background(0);

    // Body
    fill(255);
    ellipse(x + 120, y + 120, 120, 240);

    // Head
    fill(255, 0, 0);
    triangle(x + 95, y + 11,x + 120, y - 30,x + 145, y + 11);

    // Left wing
    triangle(x + 72, y + 192, x + 57, y + 279, x + 87, y + 219);

    // Right wing
    triangle(x + 168, y + 192, x + 183, y + 279, x + 153, y + 219);

    // Outer cockpit
    fill(0, 255, 255);
    ellipse(x + 120, y + 90, 72, 72);

    // Inner cockpit
    fill(219, 225, 227);
    ellipse(x + 120, y + 90, 60, 60);

    // Amogus
    function amogus(x, y) {

      // Body
      fill(255, 0, 0);
      rect(x + 105, y + 66, 30, 54, 12);

      // Outer visor
      fill(44, 45, 45);
      rect(x + 99, y + 78, 24, 15, 6);

      // Inner visor
      fill(128, 128, 128);
      rect(x + 101, y + 80, 19, 10, 5);
    }

    amogus(x, y);
  }


  function Fire(x, y) {

    noStroke();

    // Outer fire
    fill(255, 60, 0);
    triangle(x + 90, y + 246,x + 150, y + 246,x + 120, y + 330);

    // Orange fire
    fill(255, 140, 0);
    triangle(x + 102, y + 246,x + 138, y + 246,x + 120, y + 300);

    // Yellow fire
    fill(255, 220, 0);
    triangle(x + 111, y + 246,x + 129, y + 246,x + 120, y + 276);

    // Yellow hot center
    fill(255, 255, 0);
    triangle(x + 115, y + 246,x + 125, y + 246,x + 120, y + 261);
  }


  rocketship(x, y);
  Fire(x, y);
  planet(x,y);
function planet(x, y) {

  // Planet
  fill(70, 70, 80);
  ellipse(x + 650, y + 1000, 1600, 650);

  // Darker craters
  fill(50, 50, 60);

  ellipse(x + 250, y + 850, 140, 50);
  ellipse(x + 400, y + 950, 200, 60);
  ellipse(x + 700, y + 820, 120, 40);
  ellipse(x + 900, y + 970, 180, 55);
  ellipse(x + 1100, y + 850, 130, 45);

  // Smaller craters
  fill(90, 90, 100);

  ellipse(x + 320, y + 1050, 80, 30);
  ellipse(x + 600, y + 1000, 100, 35);
  ellipse(x + 1000, y + 1050, 90, 30);

  // Landing area
  fill(0, 255, 100);
  rect(x + 550, y + 680, 200, 20);

  // Landing lights
  fill(255, 255, 0);
  circle(x + 560, y + 690, 10);
  circle(x + 740, y + 690, 10);
}