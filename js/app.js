'use strict';


alert('Hello to Salam Mustafa page');
let scoreCount = 7;

let userName = prompt('Enter your name please').toLowerCase();
//console.log('your name is: '+userName);
alert('Hello '+ userName);

let question = prompt('Now you should answer these question about me,\n Are you ready?Y/N').toLowerCase();

alert('Great, Lets start :) ')

let ques1 = prompt('Did I study in Al-hussien Bin Talal university? Yes/No').toLowerCase();
//console.log(ques1);
alert('your answer is: '+ques1);

if(ques1 === 'yes'){
    scoreCount = scoreCount + 0;
    alert('Great, Your answer is correct ');
    //console.log('Great, Your answer is correct');
}else{
    scoreCount = scoreCount - 1;
    alert('ohhh, Unfortunately, incrroct answer');
}

let ques2 = prompt('Did I studied computer science? Yes/No').toLowerCase();
  //   console.log('your answer is: '+ ques2);
     alert('your answer is: '+ques2);

if(ques2 === 'yes'){
    scoreCount = scoreCount + 0;
    alert('Great, Your answer is correct ');
    //console.log('Great, Your answer is correct');
}else{
    alert('ohhh, Unfortunately, incrroct answer');
    scoreCount = scoreCount - 1;
}

let ques3 = prompt('Do I have an experience in programming? Yes/No').toLowerCase();
    // console.log('your answer is: '+ ques3);
     alert('your answer is: '+ ques3);
     
if(ques3 === 'no'){
    scoreCount = scoreCount + 0;
    alert('Great, Your answer is correct ');
    //console.log('Great, Your answer is correct');
}else{
    scoreCount = scoreCount - 1;
    alert('ohhh, Unfortunately, incrroct answer');
}

let ques4 = prompt('Am I 24 years old? Yes/No').toLowerCase();
     //console.log('your answer is: '+ ques4 );
     alert('your answer is: '+ ques4 );
     
if(ques4 === 'yes'){
    scoreCount = scoreCount + 0;
    alert('Great, Your answer is correct ');
    //console.log('Great, Your answer is correct');
}else{
    scoreCount = scoreCount - 1;
    alert('ohhh, Unfortunately, incrroct answer');
}

let ques5 = prompt('Am I a trainee for ASAC? Yes/No').toLowerCase();
     //console.log('your answer is: '+ques5);
     alert('your answer is: '+ ques5 );
     
if(ques5 === 'yes'){
    scoreCount = scoreCount + 0;
    alert('Great, Your answer is correct ');
    //console.log('Great, Your answer is correct');
}else{
    scoreCount = scoreCount - 1;
    alert('ohhh, Unfortunately, incrroct answer');
}

alert('Thank you '+userName +' for answering the guessing game questions \n Have a nice day :)');




let guessingNum = 5;

//code to give the user 4 opertunity to gusee the number

let userGuess = prompt('Hello to guessing game part 2 you should guess a number from 1-10, \n Enter a number from 1-10 please ');
for(let i = 0; i < 3; i++){
   
      
      if(userGuess == guessingNum){         
        scoreCount--;
        alert('Congrats correct answer');
         console.log(userGuess);
         scoreCount = scoreCount + 0;
         if(userGuess == guessingNum){
         break;
         }
    
       }else if (userGuess >= 6) {
        
             alert('Your answer is tow high ')
             userGuess = prompt('Try again, Enter a number from 1-10 ');
             console.log(userGuess);
             if(i == 3){   
                break;
             }
            
       }else if(userGuess <= 4){
        
           alert('Your answer is tow low ')
           userGuess = prompt('Try again, Enter a number from 1-10 ');
           console.log(userGuess);
           if(i == 3){ 
            break;
         }
        }else{
            
            userGuess = prompt('Try again, Enter a number from 1-10 ');
            console.log(userGuess);
       }
       
    }
    if(userGuess == guessingNum){         
        alert('Congrats the correct answer is 5 ')
         console.log(userGuess);
         scoreCount = scoreCount + 0;
        }else{
           
            console.log(userGuess);
            alert('oh,:( your all answer is incorrect, \n the correct answer is 5');
             console.log(scoreCount)
        }

  






let guessArray = ['turkey','canada','spain','italy'];

let userGuessCon = prompt('Hello, Now you should guess one of these countries from these list, \n Please enter one of these list, one is correct \n turkey,italy,spain,canada ').toLowerCase();


  for(let i = 0; i <= guessArray.length; i++){
      console.log(i);
    if(userGuessCon == guessArray[1]){
    
        break;
    }else{
        prompt('Please enter one of these list, one of these countries are correct try t guess \n turkey,italy,spain,canada ');
      
   
    }
}
if(userGuessCon == guessArray[1]){
    console.log(userGuessCon);
    alert('Great, Your answer is correct');
}else{
    alert('oh,Thanks for '+ userName +' the correct answer is canada');
}


if(scoreCount >5 ){
    console.log(scoreCount);
    alert('Your score is '+scoreCount+ ' /7 ,Great your answer is almost right'+ 'Thank you '+userName);
}else{
   alert('oh, your score is ' + scoreCount+'/7 , Thank you for answering these question:) ' );

}

 

