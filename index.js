var readlineSync= require('readline-sync');
const chalk= require('chalk');

var userName= readlineSync.question("May I have your name?");
console.log("Welcome " + chalk.bold(userName)+" ,let's see " + chalk.bold.yellow("how much u know me")+"\n\n");

var score=0;

var questionList= [{
  question: chalk.bold.greenBright("What is my name? "),
  answer: "prashant"
}, {
  question: chalk.bold.greenBright("What is my age? "),
  answer: "22"
}, {
  question: chalk.bold.greenBright("What do I live? "),
  answer: "dehradun"
}, {
   question: chalk.bold.greenBright("Which is my favourite sports? "),
   answer: "cricket"
}, {
  question: chalk.bold.greenBright("Am I a non-vegetarian or not? "),
  answer: "yes"
}]

var highScore=[{
  name:"Prashant",
  scoreH:"5"
}, {
  name:"Vishal",
  scoreH:"4"
}, {
  name:"Ravi",
  scoreH:"3"
}]



for(var i=0; i<questionList.length; i++)
{
  var question = questionList[i].question;
  var answer = questionList[i].answer;
  play(question,answer);
}
function printScoreCard(highScore)
{
  for(var i=0; i<highScore.length; i++)
  {
    console.log(chalk.bold.yellow(highScore[i].name+":"+ highScore[i].scoreH));
  }
}


function play(question,answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer===answer)
  {
    console.log(chalk.bold.cyanBright("You're right\n"));
    score=score+1;
    console.log("Your current score: "+ chalk.bold.yellow(score)+ "\n\n");
  }
  else{
    console.log(chalk.bold.red("You're wrong\n"));
   console.log("Your current score: " + chalk.bold.yellow(score)+"\n\n");
  }
}

console.log(chalk.bold.yellow("\n*****Check out the ScoreCard*****"));
printScoreCard(highScore);

var newHighScore= false;

for(var i=0; i<highScore.length; i++)
{
  if(score>=highScore[i].scoreH)
  {
    highScore.splice(i,1,{name:`${userName}`, scoreH:`${score}`});
    newHighScore=true;
    break;
  }
}

if(newHighScore)
{
  console.log(chalk.bold.green("\nYou have beaten the high score,kindly send me a screenshot"));
  console.log(chalk.bold.yellow("\n***LeaderBoard***"));
  printScoreCard(highScore);
}

console.log("\nCongrats🔥, Your total score is: "+ chalk.bold.yellow(score));