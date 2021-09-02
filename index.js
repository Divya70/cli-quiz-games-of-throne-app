var readlineSync =  require("readline-sync");

const chalk = require("chalk");



var score = 0;

console.log('Hii Guys! :)');
var userName = readlineSync.question('Tell me your name to continue this Quiz : ');

console.log('Hello '+userName+',\n');
console.log('Welcome to '+chalk.yellowBright.bold(' Games Of Throne quiz.\n'));
console.log('Let\'s see how much you know about '+ chalk.yellow.bold(' Games Of throne ')+'?\n');
 console.log(chalk.yellowBright('-----------------------------------------------'));
console.log(chalk.green('Guide'));
console.log(chalk.magenta('> There are multiple choice questions'));
console.log(chalk.magenta('> Choose the options given below by selecting any of the key a,b,c\n'));
 console.log(chalk.yellowBright('-----------------------------------------------'));


function play(question,answer){
  var userAnswer =readlineSync.question(question);
  if (userAnswer === answer){
    console.log( chalk.green("You are right!"))
    score = score + 1
    console.log("Your score: " + chalk.green(score ))
  }else{
    console.log(chalk.redBright("You are wrong!"))
    score = score - 1
    console.log("Your score: " + chalk.red(score ))
  }
  
  console.log("\n----------------------\n")
}
play(chalk.cyanBright("1.Which name is given to the bastards of The Reach?") +("\na.Storm\nb.Pyke\nc.Flowers\n"),"c")

play(chalk.cyanBright("2. Which House is a direct vassal of House Baratheon of King's Landing?")+("\na.Upcliff\nb.Stokeworth\nc.Greyjoy\n"),"b")

play(chalk.cyanBright("3.What is the name of the continent on which most of the action of Game of Thrones takes place?")+("\na.Stone\nb.Hill\nc.Snow \n"), "b")

play(chalk.cyanBright("4.Which of the direwolves died in season 1?")+("\na.Summer\nb.Lady\nc.Nymeria \n"),"b")


console.log("Your score: " + score + "\n")

console.log( chalk.red("Divya ")+("scored:") +chalk.green("3"))
console.log( chalk.red("Kunal ")+("scored:") + chalk.green("2"))
console.log( chalk.red("Jiya  ")+("scored:") +chalk.green("1\n" ))

if(score > 3){
  console.log("You scored 4 That's Great.\n You have beaten Divya.\nSend me screen shot I will Updated Your score\n")
}else if(score > 2){
  console.log(chalk.cyan("You scored: ") + chalk.green(score) +("You have beaten Kunal. \nSend me screen shot I will Updated Your score " ))
}else if(score >1){
  console.log(chalk.cyan("You scored: ") + chalk.green(score) + (" You have beaten Jiya. Send me screen shot I will Updated Your score"))
}else{
  console.log(chalk.cyan("You scored: ") +chalk.green(score) + (" Better Luck Next Time "))
}
 
if(score>1){
  console.log(("Hoo! ") +chalk.cyan(userName) + (" You have some common sense"))
}else{
  console.log(("Don't feel bad ") + chalk.green(userName) +(" One day God will get you some common sense"))
}








console.log("Share this to your friends and let them check there common sense\n")


