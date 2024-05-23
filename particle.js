noRedParticle = true;

class Particle {
    constructor(_loc, _dir, _speed, _color) {
        this.loc = _loc;
        this.dir = _dir;
        this.speed = _speed;
        this.color = _color;
    }

    run() {
        this.move();
        this.checkEdges();
        this.update();
    }
    move() {
        let angle =
        noise(
            this.loc.x / noiseScale,
            this.loc.y / noiseScale,
            frameCount / noiseScale
        ) 
        *TWO_PI *noiseStrength;
        this.dir.x = cos(angle);
        this.dir.y = sin(angle);
        var vel = this.dir.copy();
        var d = 1;
        vel.mult(this.speed * d);
        this.loc.add(vel);
    }
    checkEdges() {
        if (
            this.loc.x < 0 ||
            this.loc.x > width ||
            this.loc.y < 0 ||
            this.loc.y > height
        ) {
            this.loc.x = random(width);
            this.loc.y = random(height);
        }
    }
    sonarHit() {
        for (let pulse of pulses) {
            let d = dist(this.loc.x, this.loc.y, pulse.x, pulse.y);
            if (d < pulse.radius && this.color !=200 ) {
                this.color = color(190, 0, 0); 
                // Change color to red
                break; // Exit the loop if one pulse hit is detected
            }
        }
    }
    particleClicked() {

        if(this.color != 200) {
            popUp();
            this.color = 200;
            increaseCount();
        }
    }
    update() {
        extraCanvas.noStroke();
        extraCanvas.fill(this.color);
        extraCanvas.ellipse(this.loc.x, this.loc.y, 5);
    }
}


class Pulse {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 1;
        this.opacity = 190;
    }

    update() {
        this.radius += 2;
        this.opacity -= fadeRate;

        if (this.opacity <= 0) {
            let index = pulses.indexOf(this);
            pulses.splice(index, 1);
        }   
    }

    display() {
        noFill();
        strokeWeight(2);
        stroke(200, this.opacity);
        circle(this.x, this.y, this.radius * 2);
    }


}
