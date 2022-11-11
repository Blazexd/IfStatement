function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}

function draw() {
    background(220);

if (mouseX > 0 && mouseX < width/2) {
    fill(255, 255, 0)    
    ellipse(300, 300, 50, 50);
    ellipse(600, 300, 50, 50);
}
else {
    fill(255, 0, 0)
    ellipse(300, 300, 50, 50);
    ellipse(600, 300, 50, 50);
}



}