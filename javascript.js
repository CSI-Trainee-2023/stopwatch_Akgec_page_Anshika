let [ seconds , minutes , hours ] = [0,0,0];
let displaytime = document.getElementById("timer_display");
let timer = null ;

function stopwatch()
{
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }    
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;


    displaytime.innerHTML = h +":"+ m +":"+ s;
}

function watchstart()
{

    if(timer!== null)
    {
        clearInterval(timer);
    }

    timer = setInterval( stopwatch,1000);
    if(button_state == "start"){
    
        start_button.innerHTML = "Stop";
        button_state = "stop";
    }
    else{
    
        
        watchstop();
        start_button.innerHTML = "Resume";
        button_state = "start";
        reset_button.innerHTML = "Reset" ;
        button_state ="reset";
    
    
         }
}
    function watchstop()
    {
        if(timer!=null){
       {clearInterval(timer);}
        }
    }

    
    function watchreset(){
        clearInterval(timer);
        [sec,min,hrs]=[0,0,0];
        displaytime.innerHTML = "00:00:00";
    }
    
    function watchlap(){
    }
    
    let start_button = document.getElementById("start-timer");
    let Resume_button = document.getElementById("start-timer");
    let reset_button = document.getElementById("lap-timer");
    var button_state = "start";
    reset_button.addEventListener("click",lap);
    start_button.addEventListener("click",watchstart);
    reset_button.addEventListener("click",watchreset);
    Resume_button.addEventListener("click",);


    
   


function watchstop()
{
    if(timer!=null){
   {clearInterval(timer);}
    }
}

function watchreset(){
    clearInterval(timer);
    [sec,min,hrs]=[0,0,0];
    displaytime.innerHTML="00:00:00";
}

function watchlap(){
}




