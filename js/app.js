'use strict';


alert('Hello to Salam Mustafa page');


let userName = prompt('Enter your name please').toLowerCase();
//console.log('your name is: '+userName);
alert('Hello '+ userName);

let question = prompt('Now you should answer these question about me,\n Are you ready?Y/N').toLowerCase();

alert('Great, Lets start :) ')

let ques1 = prompt('Did I study in Al-hussien Bin Talal university? Yes/No').toLowerCase();
//console.log(ques1);
alert('your answer is: '+ques1);

if(ques1 === 'yes'){
    alert('Great, Your answer is correct ');
    //console.log('Great, Your answer is correct');
}else{
    alert('ohhh, Unfortunately, incrroct answer');
}

let ques2 = prompt('Did I studied computer science? Yes/No').toLowerCase();
  //   console.log('your answer is: '+ ques2);
     alert('your answer is: '+ques2);

if(ques2 === 'yes'){
    alert('Great, Your answer is correct ');
    //console.log('Great, Your answer is correct');
}else{
    alert('ohhh, Unfortunately, incrroct answer');
}

let ques3 = prompt('Do I have an experience in programming? Yes/No').toLowerCase();
    // console.log('your answer is: '+ ques3);
     alert('your answer is: '+ ques3);
     
if(ques3 === 'no'){
    alert('Great, Your answer is correct ');
    //console.log('Great, Your answer is correct');
}else{
    alert('ohhh, Unfortunately, incrroct answer');
}

let ques4 = prompt('Am I 24 years old? Yes/No').toLowerCase();
     //console.log('your answer is: '+ ques4 );
     alert('your answer is: '+ ques4 );
     
if(ques4 === 'yes'){
    alert('Great, Your answer is correct ');
    //console.log('Great, Your answer is correct');
}else{
    alert('ohhh, Unfortunately, incrroct answer');
}

let ques5 = prompt('Am I a trainee for ASAC? Yes/No').toLowerCase();
     //console.log('your answer is: '+ques5);
     alert('your answer is: '+ ques5 );
     
if(ques5 === 'yes'){
    alert('Great, Your answer is correct ');
    //console.log('Great, Your answer is correct');
}else{
    alert('ohhh, Unfortunately, incrroct answer');
}

alert('Thank you '+userName +' for answering the guessing game questions \n Have a nice day :)');