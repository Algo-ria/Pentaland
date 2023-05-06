function generateBoard(width, height) {
   if (!width || !height) {
      width = randomNumber();
      height = randomNumber();
   }

   return Array.from({ length: width }, slot => Array.from({ length: height }, slot => 0));
   
}

function randomNumber(max, min) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}

