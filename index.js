var readlineSync = require('readline-sync');

var score=0

var userName = readlineSync.question("Hello, What is your name ? ")
console.log("Welcome " + userName + ", Lets play a game about cars !")
console.log("");

function test(question, answer)
{
  userAnswer = readlineSync.question(question)

  if(userAnswer === answer)
  {
    console.log("congrats you are right")
    score++;
    console.log("your current score is :" + score)
    console.log("");
    console.log("----------------------------");
    console.log("");

  } else {
    console.log("Sorry, You are wrong")
    score--;
    console.log("your current score is :" + score)
    console.log("");
    console.log("----------------------------");
    console.log("");

  }
}

test("which company has a logo like '+' sign ? ","chevrolet");
test("what is the name of mahindra's new jeep model ? ","thar");
test("who is the owner of tesla ? ","elon musk");
test("'Tigor EV' belongs to which company ? ","tata");
test("which hyundai car comes with company fitted CNG ? ","aura");

console.log("Congrats " + userName + " ! Your Total score is : " + score)
console.log("Thank You for Playing")