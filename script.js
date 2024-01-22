// let counter_ = 0;
// const counterElement = document.getElementById('counter');
// function updatecounter(){
//     counterElement.textContent = counter_;
// }

// function increment(counter){
//    counter_++;
//    updatecounter();
// }
// function decrement(counter){
//     counter_--;
//     updatecounter();
//  }
//  function reset(counter){
//     counter_ = 0;
//     updatecounter();
//  }




function generatePalette() {
   const colorSpace = document.getElementById('colorSpace').value;
   const paletteContainer = document.getElementById('palette');
   
   // Clear existing color squares
   paletteContainer.innerHTML = '';
 
   // Generate color squares based on color space
   for (let i = 0; i < 5; i++) {
     const color = generateRandomColor(colorSpace);
     const colorSquare = document.createElement('div');
     colorSquare.classList.add('color-square');
     colorSquare.style.backgroundColor = color;
     colorSquare.addEventListener('click', () => alert(`Selected Color: ${color}`));
     paletteContainer.appendChild(colorSquare);
   }
 }
 
 function generateRandomColor(colorSpace) {
   const getRandomValue = () => Math.floor(Math.random() * 256);
   
   if (colorSpace === 'rgb') {
     const red = getRandomValue();
     const green = getRandomValue();
     const blue = getRandomValue();
     return `rgb(${red}, ${green}, ${blue})`;
   } else if (colorSpace === 'hsl') {
     const hue = getRandomValue();
     const saturation = getRandomValue();
     const lightness = getRandomValue();
     return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
   }
 }

 




