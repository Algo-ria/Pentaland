function generateBoard(width, height) {
   if (!width || !height) {
      width = randomNumber(8, 15);
      height = randomNumber(width - 1, 2);
   }

   return Array.from({ length: width }, slot => Array.from({ length: height }, slot => 0));
   
}

function randomNumber(max, min) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(generateBoard());