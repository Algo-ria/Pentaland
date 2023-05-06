const letters = [
   {
      letter: "F",
      shape: [
         [0, 0, 0, 0, 0],
         [0, 0, 1, 1, 0],
         [0, 1, 1, 0, 0],
         [0, 0, 1, 0, 0],
         [0, 0, 0, 0, 0],
      ],
   },
];

// [
//    [0, 0, 0],
//    [0, 1, 0],
//    [1, 1, 1],
//    [0, 0, 1],
//    [0, 0, 0]
// ]

function rotate(matrix) {
   const n = matrix.length;
   const x = Math.floor(n/ 2);
   const y = n - 1;
   for (let i = 0; i < x; i++) {
      for (let j = i; j < y - i; j++) {
         k = matrix[i][j];
         matrix[i][j] = matrix[y - j][i];
         matrix[y - j][i] = matrix[y - i][y - j];
         matrix[y - i][y - j] = matrix[j][y - i]
         matrix[j][y - i] = k
      }
   }
 }

 rotate(letters[0].shape);
 console.log(letters[0].shape);
 rotate(letters[0].shape);
 console.log(letters[0].shape);
 rotate(letters[0].shape);
 console.log(letters[0].shape);
 rotate(letters[0].shape);
 console.log(letters[0].shape);

function generateBoard(width, height) {
   if (!width || !height) {
      width = randomNumber();
      height = randomNumber();
   }

   width = width < 5 ? 5 : width;
   height = height < 5 ? 5 : height;

   return Array.from({ length: width }, (slot) =>
      Array.from({ length: height }, (slot) => 0)
   );
}

function randomNumber(max, min) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}
