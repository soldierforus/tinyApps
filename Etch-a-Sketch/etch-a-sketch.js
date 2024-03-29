//select elements on the page: canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const MOVE_AMOUNT = 10;

// const width = canvas.width;
// const height = canvas.height;
const { width, height } = canvas

//set up canvas for drawing
let x = Math.floor(Math.random() * width );
let y = Math.floor(Math.random() * height );

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

let hue = 0;
ctx.beginPath(); //start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

//write a draw function
function draw({ key }) {
  //increment the hue
  hue +=1
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  //start the path
  ctx.beginPath();
  ctx.moveTo(x,y);
  
  //move x and y values based on which arrow key was pressed
  switch(key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break
    default: 
      break;
  }
  
  ctx.lineTo(x,y);
  ctx.stroke();
}

//write a handler for the keys
function handleKey(event) {
  
  if(event.key.includes('Arrow')) {
    event.preventDefault(); //stop arrow keys from moving the page up and down
    draw({key: event.key})  
  }
}

//clear/shake function
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener('animationend', function(){
    canvas.classList.remove('shake');
  })
  console.log("hit");
}

//listen for arrow keys
window.addEventListener('keydown', handleKey);
shakeButton.addEventListener('click', clearCanvas);
