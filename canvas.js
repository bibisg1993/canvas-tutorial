var canvas = document.querySelector('canvas');

// sets
canvas.width    = window.innerWidth;    // get width
canvas.height   = window.innerHeight;   // get Height

// start draw 
var c = canvas.getContext('2d');

c.fillStyle = "rgba(255,0,0,0.5)"; // Set the fill style 
c.fillRect(100, 100, 100, 100); //Drawing Rectangles
c.fillStyle = "rgba(0,0,155,0.5)";
c.fillRect(100, 300, 100, 100); //Drawing Rectangles
c.fillStyle = "rgba(0,255,0,0.5)";
c.fillRect(400, 300, 100, 100); //Drawing Rectangles

console.log(canvas);

// line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(200, 120);
c.lineTo(400, 200);
c.strokeStyle = "#fa34a3"; 
c.stroke();


// Arc / Circle
//c.beginPath();
//c.arc(300, 300, 30, 0, Math.PI * 2, false);
//c.strokeStyle = '#fa34a3';
//c.stroke();


//for(var i = 0; i < 6; i++ ){
//    
//    var x = Math.random() * window.innerWidth;
//    var y = Math.random() * window.innerHeight;
//    
//    c.beginPath();
//    c.arc(x, y, 45, 0, Math.PI * 2, false);
//    c.strokeStyle = '';
//    c.stroke();
//}

function Circle(x, y, dx, dy, radius){
    
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = 30; 
    
    this.draw = function(){

        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = 'red';
        c.stroke();
    }
    
    this.update = function(){
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0)
        {
            this.dx = - this.dx;
        }
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0)
        {
            this.dy = - this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        
        this.draw();
    }
}


var circleArray = [];

for (var i = 0 ; i < 100 ; i ++){
    
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5);
    var dy = (Math.random() - 0.5);
    var radius = 30;
    
    circleArray.push(new Circle(x, y, dx, dy, radius));
    
}




function animate(){
    
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
  
    for(var i = 0 ; i < circleArray.length; i ++ ){
      circleArray[i].update();
    }

}
animate();