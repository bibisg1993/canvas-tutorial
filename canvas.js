var canvas = document.querySelector('canvas');

// sets
canvas.width    = window.innerWidth;    // get width
canvas.height   = window.innerHeight;   // get Height

// start draw 
var c = canvas.getContext('2d');

c.fillRect(100, 100, 100, 100); //Drawing Rectangles
c.fillRect(100, 300, 100, 100); //Drawing Rectangles
c.fillRect(400, 300, 100, 100); //Drawing Rectangles

console.log(canvas);