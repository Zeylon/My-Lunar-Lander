function draw() {
function rocketship(x, y) {
    background(0);





//body
    fill(255);
    ellipse(x + 400, y + 200, 200, 400);

    strokeWeight(0.2);

//head
    fill(255,0,0);
    triangle(x + 359, y + 18, x + 400, y - 50, x + 440, y + 18);

//left wing
    triangle(x + 320, y + 320, x + 295, y + 465, x + 345, y + 365);
 
// right wing
    triangle(x + 480, y + 320, x + 505, y + 465, x + 455, y + 365);
//outer cockpit circle
    fill(0,255,255);
    ellipse(x + 400, y + 150, 120, 120); 
//inner cockpit cirlce
    fill(219, 225, 227);
    ellipse(x + 400, y + 150, 100, 100);


function amogus (x, y){
//Body
    fill(255, 0, 0);
    rect(x + 375, y + 110, 50, 90, 20);

//Outer visor
    fill(44, 45, 45);
    rect(x + 365, y + 130, 40, 25, 10);

//Inner visor
    fill(128, 128, 128);
    rect(x + 369, y + 134, 32, 17, 8);

}
amogus(x, y);
}
function Fire (x, y) {
    noStroke();
//Outer fire
    fill(255, 60, 0);
    triangle(x + 350, y + 410, x + 450, y + 410, x + 400, y + 550);

//Orange fire
    fill(255, 140, 0);
    triangle(x + 370, y + 410, x + 430, y + 410, x + 400, y + 500);

//Yellow fire
    fill(255, 220, 0);
    triangle(x + 385, y + 410, x + 415, y + 410, x + 400, y + 460);

//Yellow hot center
    fill(255,255,0);
    triangle(x + 392, y + 410, x + 408, y + 410, x + 400, y + 435);
}

rocketship(x, y);
Fire (x, y);















}
