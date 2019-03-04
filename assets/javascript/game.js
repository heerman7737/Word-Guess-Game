let wrongletter=[];
let guesses=9;
let count=0;
let answerArray=[];//underscores
let userGuesses=[];
let question=["WAAGH?","The foul arrogant xeno","First Forge World","The Arch Traitor","Sons and Betrayal","Devourer of World","Machine God","Wretched day-dreaming xeno"]
let answer=["orks","eldar","mars","horus","primarch","tyranids","omnissiah","tau"];
let picture=["./assets/images/Orks_codex.jpg","./assets/images/Eldar-Cover2.jpg","./assets/images/Mars_Red_Planet2.jpg","./assets/images/horus-art.jpg","./assets/images/The_Primarchs.jpg","./assets/images/Tyranid_Final.jpg","./assets/images/Adeptus_mecanics.jpg","./assets/images/taufirewarriors.PNG"]
let chosen=Math.floor(Math.random() * answer.length)
let chosencategory = answer[chosen];
let n=0;


function startGame(){
    document.getElementById("questions").innerHTML=question[chosen];
    for(var i=0;i<chosencategory.length;i++){
        answerArray[i]='_';
        
    }
    
    document.getElementById("answer").innerHTML=answerArray.join(" ");
    console.log(answerArray)

     wrongletter=[];
     guesses=9;

     document.getElementById("guess-left").innerHTML="You have "+guesses+" lives";
     document.getElementById("result").innerHTML="Where is your faith lie?"

    
}
function winLose(){
    if(answerArray.indexOf("_")===-1){
        document.getElementById("result").innerHTML="Welcome home brother"
        document.getElementById("pic").src=picture[chosen]
        setTimeout(function(){
        location.reload();
    },6000);
        
    }
    else if(guesses===0){
        document.getElementById("result").innerHTML="Die Heretic"
        if(confirm("Repent one more time, shall we, heretic?")){
            location.reload();
        }
        else if(confirm("Ready to meet the judgement for your answer?")){
        document.getElementById("pic").src=picture[chosen]
        }
    }
}

    

document.onkeyup=function(event){
     userGuesses=event.key;
     console.log(userGuesses)
     
    
    if(chosencategory.indexOf(userGuesses)>-1){
       for(let i =0;i<chosencategory.length;i++){
           if(chosencategory[i]===userGuesses){
                answerArray[i]=userGuesses;
                document.getElementById("answer").innerHTML=answerArray.join(" ");  
                winLose();
              }
          }
      }
      else{
          
        wrongletter[n]=userGuesses;
        guesses--;
        if(guesses<0){
            guesses=0;
        }
        document.getElementById("guess-left").innerHTML="You have "+guesses+" lives";   
        n++;   
        document.getElementById("word-guess").innerHTML="Words Guessed: "+wrongletter.join(" ");  
        winLose();
        }

      }
 
startGame();