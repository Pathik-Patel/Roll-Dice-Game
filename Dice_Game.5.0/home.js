
//This variable used to enable and disable the button depending on situation.
var roll_status = false;
var holdstatus = false;
var game_won = false;

var dice_numbers = [1,2,3,4,5,6];
var active_player = 1;
var currentscore = 0;
var mainscore = 0;
//previous stores the previous number of dice which is used in compare the current dice nd previous if both are 6. 
var previous = 0;
//this is default value of winning score if user dont give any value.
var target=100;

document.querySelector("#new-game").addEventListener('click',newone);
document.querySelector("#roll").addEventListener('click',rolled);
document.querySelector("#hold").addEventListener('click',holded);

//getting the 

function rolled(){
    if(game_won == false && roll_status==true){
        holdstatus = true;
    var dice = Math.floor(Math.random(1)*6);
    if(previous==6 && dice_numbers[dice]==6){
        currentscore = 0;
        mainscore = 0;
        document.querySelector("#show-score-"+active_player).textContent=mainscore;
        document.querySelector("#temp-score-"+active_player).textContent= 0;
        holded();
    }
    else{
    if(active_player == 1)
    {
        previous = dice_numbers[dice];
        if(dice_numbers[dice] != 1)
        {
            document.querySelector("#dice").src=`images/${dice_numbers[dice]}.jpg`;
            currentscore += dice_numbers[dice];
            document.querySelector("#temp-score-1").textContent= currentscore;   
        }
        else
        {
            currentscore = 0;
            previous = 0;
            active_player = 2;
            document.querySelector("#dice").src=`images/${dice_numbers[dice]}.jpg`;
            document.querySelector("#temp-score-1").textContent= currentscore;
            shows_turn();
            
        }
    }
    else
    {
        previous = dice_numbers[dice];
        if(dice_numbers[dice] != 1)
        {
            document.querySelector("#dice").src=`images/${dice_numbers[dice]}.jpg`;
            currentscore += dice_numbers[dice];
            document.querySelector("#temp-score-2").textContent= currentscore;  
            
        }
        else
        {
            currentscore = 0;
            previous = 0;
            active_player = 1;
            document.querySelector("#dice").src=`images/${dice_numbers[dice]}.jpg`;
            document.querySelector("#temp-score-2").textContent= currentscore;
            shows_turn();
            
        }
}
}
}
}

function holded()
{
    if(holdstatus == true){
        holdstatus  = false;
        previous=0;
    mainscore = document.querySelector("#show-score-"+active_player).textContent;
    mainscore = parseInt(mainscore);
    mainscore+=currentscore;
    
    if(mainscore>=target){
        document.querySelector("#player-"+active_player+"-h1").textContent = "Player "+active_player+" Win";
        game_won = true;
    }

    document.querySelector("#show-score-"+active_player).textContent=mainscore;
    document.querySelector("#temp-score-"+active_player).textContent= 0;
    
    if(active_player==1){
        active_player = 2;
        currentscore = 0;
    }
    else{
        active_player = 1;
        currentscore = 0;
    }
    shows_turn();
}
}

function newone(){

    target = document.getElementById("input-target").value; 
    target = parseInt(target);
    console.log(target);
    if(target.length==0){
        target = 100;
        console.log(target);
    }
    
    
    roll_status = true;
    game_won = false;
    document.querySelector("#show-score-1").textContent=0;
    document.querySelector("#temp-score-1").textContent= 0;
    
    document.querySelector("#show-score-2").textContent=0;
    document.querySelector("#temp-score-2").textContent= 0;

    document.querySelector("#player-1-h1").textContent = "Player 1";
    document.querySelector("#player-2-h1").textContent = "Player 2";

    document.querySelector(".player-1").classList.add("active");  
    document.querySelector(".player-1").classList.remove("unactive");
    document.querySelector(".player-2").classList.remove("active");
    document.querySelector(".player-2").classList.add("unactive");
    document.querySelector(".middle").classList.remove("now");

    currentscore = 0;
    mainscore = 0;
    active_player = 1;
    target = document.getElementById("input-target").value; 
    target = parseInt(target);
}
    
function shows_turn(){
document.querySelector(".player-1").classList.toggle("active");
document.querySelector(".player-1").classList.toggle("unactive");
document.querySelector(".player-2").classList.toggle("active");
document.querySelector(".player-2").classList.toggle("unactive");
document.querySelector(".middle").classList.toggle("now");
}