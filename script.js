const stopwatch = document.querySelector(".stopwatch");
let hr = 0;
let min = 0;
let sec = 0;
// initially timer is stopped
let stopTime = true;

function timerCycle(){
    if(stopTime == false){
        hr = parseInt(hr);
        min = parseInt(min);
        sec = parseInt(sec);
        sec =  sec + 1;
        
        if(sec == 60){
            min =  min + 1;
            sec = 0;
        }

        if(min == 60){
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        if(sec < 10){
            sec = "0" + sec;
        }

        if(min < 10){
            min = "0"+min;
        }

        if(hr < 10 ){
            hr = "0" + hr;  
        }

        stopwatch.textContent = hr + ":" + min + ":" + sec;
        setTimeout("timerCycle()" , 1000);
    }
}



// starttimer
function startTimer(){
    if (stopTime) {
        stopTime = false;
        timerCycle();
    }
}


// stoptimer
function stopTimer(){
    if(stopTime == false){
       stopTime = true;
    }
}

// resettimer
function resetTimer(){
   stopwatch.textContent = "00:00:00";
   stopTime = true;
   hr = 0;
   min = 0;
   sec = 0; 
}