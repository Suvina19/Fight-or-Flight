let countdown = 3000; // Fixed countdown for indicating lights out. 
let change = 0; // Measures last reset time
let score = [];
let ghosts = [];
let result = 0; // To save the final reation time of the user.
let start = 0; // Indicates when countdown is done.

function setup() {
  createCanvas(400, 400);
  textSize(20);
  for( let i = 0; i<3; i++){ // Add ghosts to the array
     ghosts.push(new Circle((i+1)*100, 200, 80)); 
  }
}

function draw() {
  background(215, 34, 60);
  let timeElapsed = (millis() - change);
  if(timeElapsed > countdown && result == 0){ // if countdown elapsed and result == 0, start timer
     text('Time Elapsed: ' + str((millis() - countdown)/10), 5, 24);
     ghosts[0].hide = true;
     ghosts[2].hide = true;
     ghosts[1].size = 300;
     start = 1;
  }
  else if(start == 0 && result == 0){ // if countdown not elapsed, them one by one unhide the ghosts
    ghosts[floor(timeElapsed / 1000)].hide = false;
  }
  else if(result != 0){ // If result is non zero, pause the game and append score to scores
       text('Time Elapsed: ' + result, 5, 24);
       ghosts[1].isSmiling = true;
  }
  for(let i = 0; i< score.length; i++){
     text(score[i],  width - 50, height - 100 + (20*i));
  }
  for(let ghost of ghosts){
       ghost.display();
  }
}

function resetGame() { // back to initial state
   result = 0;
   start = 0;
   change = millis();
   for(let ghost of ghosts){
     ghost.hide = true;
     ghost.isSmiling = false;
     ghost.size = 80;
   }  
}

function keyPressed() { // Click spacebar to check reaction time, click enter to reset the game
   if (key == ' '){
      result = ((millis() - change) - countdown);
      score.push(result);
      if (score.length > 5){
         score.shift();
      }
   }
   else if (keyCode === ENTER){
      resetGame();
   }
}
