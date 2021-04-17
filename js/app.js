'use strict';


alert('Hello to Salam Mustafa page');
let scoreCount = 7;

let userName = prompt('Enter your name please').toLowerCase();
alert('Hello '+ userName);

let question = prompt('Now you should answer these question about me,\n Are you ready?y/n').toLowerCase();
if(question === 'yes' || question === 'y'){
  alert('Great, Lets start :) ');
  console.log(question);
}else if(question === 'no' || question ==='n'){
  alert('Sad to know that :(  ');
}else{
  question = prompt('you should write y/n or yes/no ').toLowerCase();
}





function funcStudy(ques1)
{

  ques1 = prompt('Did I study in Al-hussien Bin Talal university? Yes/No').toLowerCase();
  alert('your answer is: '+ques1);

  if(ques1 === 'yes' || ques1 === 'y'){
    scoreCount = scoreCount + 0;
    alert('Great, Your answer is correct ');
  }else if(ques1==='no' || ques1 ==='n'){
    scoreCount = scoreCount - 1;
    alert('ohhh, Unfortunately, incrroct answer');
  }else{
    ques1 = prompt('you should write y/n or yes/no \n Did I study in Al-hussien Bin Talal university? Yes/No').toLowerCase();
    if(ques1 === 'yes' || ques1 === 'y'){
      scoreCount = scoreCount + 0;
      alert('Great, Your answer is correct ');
    }else if(ques1==='no' || ques1 ==='n'){
      scoreCount = scoreCount - 1;
      alert('ohhh, Unfortunately, incrroct answer');
    }
  }
}

let ques1;
funcStudy(ques1);




function funcMajour(ques2)
{
  ques2 = prompt('Did I study computer science? Yes/No').toLowerCase();
  alert('your answer is: '+ques2);

  if(ques2 === 'yes' || ques2 === 'y'){
    scoreCount = scoreCount + 0;
    alert('Great, Your answer is correct ');
  }else if(ques2==='no' || ques2 === 'n'){
    alert('ohhh, Unfortunately, incrroct answer');
    scoreCount = scoreCount - 1;
  }else{
    ques2 = prompt('you should write y/n or yes/no \n Did I studied computer science? Yes/No').toLowerCase();
    if(ques2 === 'yes' || ques2 === 'y'){
      scoreCount = scoreCount + 0;
      alert('Great, Your answer is correct ');
    }else if(ques2==='no' || ques2 === 'n'){
      alert('ohhh, Unfortunately, incrroct answer');
      scoreCount = scoreCount - 1;
    }
  }
}
let ques2;
funcMajour(ques2);



function funcExperience(ques3)
{
  ques3 = prompt('Do you think I have any years of programming experience? Yes/No').toLowerCase();
  alert('your answer is: '+ ques3);
  if(ques3 === 'no' || ques3 === 'n'){
    scoreCount = scoreCount + 0;
    alert('Great, Your answer is correct ');
  }else if(ques3 === 'yes'|| ques3 === 'y'){
    scoreCount = scoreCount - 1;
    alert('ohhh, Unfortunately, incrroct answer');
  }else{
    ques3 = prompt('you should write y/n or yes/no \n Do you think I have any years of programming experience? Yes/No').toLowerCase();
    if(ques3 === 'no' || ques3 === 'n'){
      scoreCount = scoreCount + 0;
      alert('Great, Your answer is correct ');
    }else if(ques3 === 'yes'|| ques3 === 'y'){
      scoreCount = scoreCount - 1;
      alert('ohhh, Unfortunately, incrroct answer');
    }
  }
}
let ques3;
funcExperience(ques3);


function funcAge(ques4){

  ques4 = prompt('Am I 24 years old? Yes/No').toLowerCase();
  alert('your answer is: '+ ques4 );
  if(ques4 === 'yes' || ques4 === 'y'){
    scoreCount = scoreCount + 0;
    alert('Great, Your answer is correct ');
  }else if(ques4 === 'no' || ques4 === 'n' ){
    scoreCount = scoreCount - 1;
    alert('ohhh, Unfortunately, incrroct answer');
  }else{
    ques4 = prompt('you should write y/n or yes/no \n Am I 24 years old? Yes/No').toLowerCase();
    if(ques4 === 'yes' || ques4 === 'y'){
      scoreCount = scoreCount + 0;
      alert('Great, Your answer is correct ');
    }else if(ques4 === 'no' || ques4 === 'n' ){
      scoreCount = scoreCount - 1;
      alert('ohhh, Unfortunately, incrroct answer');
    }
  }
}
let ques4;
funcAge(ques4);

function funcTrain(ques5)
{
  ques5 = prompt('Am I a trainee for ASAC? Yes/No').toLowerCase();
  alert('your answer is: '+ ques5 );
  if(ques5 === 'yes' || ques5 === 'y'){
    scoreCount = scoreCount + 0;
    alert('Great, Your answer is correct ');
  }else if(ques5 === 'no' || ques5 === 'n'){
    scoreCount = scoreCount - 1;
    alert('ohhh, Unfortunately, incrroct answer');
  }else{
    ques5 = prompt('you should write y/n or yes/no \n  Am I a trainee for ASAC? Yes/No').toLowerCase();
    if(ques5 === 'yes' || ques5 === 'y'){
      scoreCount = scoreCount + 0;
      alert('Great, Your answer is correct ');
    }else if(ques5 === 'no' || ques5 === 'n'){
      scoreCount = scoreCount - 1;
      alert('ohhh, Unfortunately, incrroct answer');
    }
  }
}
let ques5;
funcTrain(ques5);


alert('Thank you '+userName +' for answering the guessing game questions \n Have a nice day :)');





let guessingNum ='5';
function guessNumber(){
  let userGuess = prompt('Hello to guessing game part 2 you should guess a number from 1-10, \n Enter a number from 1-10 please ');
  for(let i = 0; i < 3; i++){
    if(userGuess === guessingNum){
      scoreCount--;
      alert('Congrats correct answer');
      console.log(userGuess);
      scoreCount = scoreCount + 0;
      if(userGuess === guessingNum){
        break;
      }
    }else if (userGuess >= 6) {

      alert('Your answer is tow high ');
      userGuess = prompt('Try again, Enter a number from 1-10 ');
      console.log(userGuess);
      if(i === 3){
        break;
      }
    }else if(userGuess <= 4){
      alert('Your answer is tow low ');
      userGuess = prompt('Try again, Enter a number from 1-10 ');
      console.log(userGuess);
      if(i === 3){
        break;
      }
    }else{
      userGuess = prompt('Try again, Enter a number from 1-10 ');
      console.log(userGuess);
    }
  }
}

guessNumber();
alert('Thanks for you '+ userName +' the correct answer is 5  ');

let guessArray = ['canada','greece','italy','spain','turkey'];
function guessCountry(){
  let c = 0;
  while (c<6){
    let userGuessCon = prompt('Please enter one of these list,\n two of these countries are correct try to guess \n turkey, italy, spain, canada, greece');
    if(userGuessCon === guessArray[0] || userGuessCon === guessArray[4]){
      alert('Great, Your answer is correct');
      scoreCount++;
      break;
    }
    c++;
  }
}

guessCountry();

alert('Thanks for you '+ userName +' the correct answer is canada or turkey  ');





if(scoreCount >5 ){
  console.log(scoreCount);
  alert('Your score is '+scoreCount+ ' /7 ,Great your answer is almost right'+ ' Thank you '+userName);
}else{
  alert('oh, your score is ' + scoreCount+'/7 , Thank you for answering these question:) ' );

}



