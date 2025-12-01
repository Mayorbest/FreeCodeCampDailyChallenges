/*Today's challenge is inspired by the video game Pong, which was released November 29, 1972.

Given a matrix (array of arrays) that includes the location of the ball (2), and the previous location of the ball (1), return the matrix indices for the next location of the ball.

The ball always moves in a straight line.
The movement direction is determined by how the ball moved from 1 to 2.
The edges of the matrix are considered walls. If the balls hits a:
top or bottom wall, it bounces by reversing its vertical direction.
left or right wall, it bounces by reversing its horizontal direction.
corner, it bounces by reversing both directions.

getNextLocation([[0,0,0,0], [0,0,0,0], [0,1,2,0], [0,0,0,0]]) should return [2, 3].
Waiting:2. getNextLocation([[0,0,0,0], [0,0,1,0], [0,2,0,0], [0,0,0,0]]) should return [3, 0].
Waiting:3. getNextLocation([[0,2,0,0], [1,0,0,0], [0,0,0,0], [0,0,0,0]]) should return [1, 2].
Waiting:4. getNextLocation([[0,0,0,0], [0,0,0,0], [2,0,0,0], [0,1,0,0]]) should return [1, 1].
Waiting:5. getNextLocation([[0,0,0,0], [0,0,0,0], [0,0,1,0], [0,0,0,2]]) should return [2, 2].
**/

function getNewLocation (matrix) {
  //Get the length and width of the matrix [for better understanding represent the arrays in a 3*3 matrix]
  const rows = matrix.length;
  const colus = matrix[0].length; //numbers of length coloumns
  //Delare a variable to save the previous and current location in
  let prevLocation;
  let currLocation;
// loop through the matrix array to get the value of the previous and current location
  for(let i=0; i<rows; i++){
    for(let j=0; j<colus; j++) {
      //matrix[i][j] stands for the coordinate of the position on the matrix e.g row 3 columb 4
      if (matrix[i][j] === 1) {prevLocation = [i,j]}
      if (matrix[i][j] === 2) {currLocation = [i,j]}
    }
  }
// Get the value of the displacement of the ball i.e dx of the ball
  let dr = currLocation[0] - prevLocation[0];
  let dc = currLocation[1] - prevLocation[1];
// Determine how far the new location will be from the current location
  let nextRow = currLocation[0] + dr;
  let nextCol = currLocation[1] + dc;
//If the next location exceeds the number of rows or columbs reverse the value so it can go unto the next value
  if (nextRow < 0 || nextRow >= rows) {
    dr = -dr;
    nextRow = currLocation[0] + dr;
  }
  if(nextCol< 0 || nextCol >= colus) {
    dc = -dc;
    nextCol = currLocation[1] + dc;
  }
  //return the value of the new location
  return [nextRow,nextCol];
}
//solve the challenge problems and display your answer in the console
console.log(getNewLocation([[0,0,0,0], [0,0,0,0], [0,1,2,0], [0,0,0,0]]))
console.log(getNewLocation([[0,0,0,0], [0,0,1,0], [0,2,0,0], [0,0,0,0]]))
console.log(getNewLocation([[0,2,0,0], [1,0,0,0], [0,0,0,0], [0,0,0,0]])) 
console.log(getNewLocation([[0,0,0,0], [0,0,0,0], [2,0,0,0], [0,1,0,0]]))
console.log(getNewLocation([[0,0,0,0], [0,0,0,0], [0,0,1,0], [0,0,0,2]]))