function generateBoard(width, height) {
   if (!width || !height) {
      width = randomNumber();
      height = randomNumber();
   }

   width = width < 5 ? 5 : width;
   height = height <5 ? 5 : height;

   return Array.from({ length: width }, slot => Array.from({ length: height }, slot => 0));
   
}

function randomNumber(max, min) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}

