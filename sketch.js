let num = 750;
let linkedNum = 14;
let noiseScale = 500;
let noiseStrength = 2;
let particles = [];

let extraCanvas;
let pulses = [];
let maxCircleSize = 100;
let fadeRate = 3;



function setup() {

  createCanvas(windowWidth*2, windowHeight*2);
  noStroke();

  extraCanvas = createGraphics(windowWidth*2, windowHeight*2); // Set the same size as the main canvas

  // normal particles
  for (let i = 0; i < num; i++) {
    var loc = createVector(random(width*0.15, width*0.85), random(height*0.15, height*0.85));
    var angle = 0;
    var dir = createVector(cos(angle), sin(angle));
    var speed = random(0.5, 2);
    particles[i] = new Particle(loc, dir, speed, 200);
  }

  // special particles
  for (let i = 0; i < linkedNum; i++) {
    var loc = createVector(random(width*0.15, width*0.85), random(height*0.25, height*0.75));
    var angle = 0;
    var dir = createVector(cos(angle), sin(angle));
    var speed = random(0.5, 2);
    particles[i] = new Particle(loc, dir, speed, 201);
  }
}

function windowResized() {
  resizeCanvas(windowWidth*2, windowHeight*2);
}

function draw() {
  background(5);

  extraCanvas.background(5, 5);

  for (let i = 0; i < particles.length; i++) {
    particles[i].run();
    if (particles[i].color != 200) {
      particles[i].sonarHit();
    }
    
  }

  image(extraCanvas, 0, 0); 
  // Clear the extra canvas
    
  // Display all circles
  for (let i = 0; i < pulses.length; i++) {
    let pulse = pulses[i];
    pulse.update();
    pulse.display();
  }

  
    
  // Draw the extra canvas onto the main canvas
    
}



function mouseClicked() {
  // Add a new circle at the mouse position
  let newPulse = new Pulse(mouseX, mouseY);
  pulses.push(newPulse);

  for (let i = 0; i < particles.length; i++) {
    let d = dist(mouseX, mouseY, particles[i].loc.x, particles[i].loc.y);
    if (d < 20) {
      particles[i].particleClicked();
      
    }
  }
}

function increaseCount() {
  count++;
  document.getElementById("popup-number").innerHTML = count;
}



