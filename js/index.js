var workTime = 25;
var breakTime = 5;
 

$("#outputWTime").text(workTime);
$("#outputBTime").text(breakTime);


$("#minusWTime").click(function(){
   if (workTime > 0) {
   workTime--;
   $("#outputWTime").text(workTime);   
   }
   
});

$("#addWTime").click(function(){
   workTime++;
   if (workTime >= 0) {
   $("#outputWTime").text(workTime);   
   }
   
});

$("#minusBTime").click(function(){
   if (breakTime > 0) {
   breakTime--;
   $("#outputBTime").text(breakTime);   
   }
   
});

$("#addBTime").click(function(){
   breakTime++;
   if (breakTime >= 0) {
   $("#outputBTime").text(breakTime);   
   }
   
});

var secondsRemaining;
var secondsRemaining2;
var intervalHandle;
var flag = true;


$("#startWTime").click(function(){
   clearInterval(intervalHandle);
   startCountdown();
});

$("#pauseWTime").click(function() {
   if (flag) {
       flag = false;
   } else {
       flag = true;
   }  
});

$("#clearWTime").click(function() {
    clearInterval(intervalHandle);
    $("#cdTime").html(defaultTime);
    flag = true;
});

var defaultTime = "<div class='workSpace'>" + "</div>";
    
$("#cdTime").html(defaultTime);    

function breakTick() {
    
    var min = Math.floor(secondsRemaining2 / 60);
    var sec = secondsRemaining2 - (min * 60);
    
  
    if (sec < 10) {
        sec = "0" + sec;
    }
    
    var message = "<div class='breakSpace'><h4 id='relaxing'>Relax</h4>" + "<br>" + "<h5 id='bTimeNumber'>" + min + ":" + sec + "</h5>" + "</div>";
    
    $("#cdTime").html(message);
    
    if (secondsRemaining2 === 0) {
        clearInterval(intervalHandle);
        $("#cdTime").html(defaultTime);
    }
    
    if (secondsRemaining2 % 2 == 0) {
        $(".breakSpace").css({"border-left-color": "aqua"});
        $(".breakSpace").css({"border-top-color": "lime"});
        $(".breakSpace").css({"border-right-color": "aqua"});
        $(".breakSpace").css({"border-bottom-color": "lime"});
    }  else if (secondsRemaining2 % 2 !== 0){
        $(".breakSpace").css({"border-left-color": "lime"});
        $(".breakSpace").css({"border-top-color": "aqua"});
        $(".breakSpace").css({"border-right-color": "lime"});
        $(".breakSpace").css({"border-bottom-color": "aqua"});
    }
    
    
    secondsRemaining2--;
}

function workTick() {
    if(flag) {
    
    var min = Math.floor(secondsRemaining / 60);
    var sec = secondsRemaining - (min * 60);
    
  
    if (sec < 10) {
        sec = "0" + sec;
    }
    
    var message = "<div class='workSpace'><h4 id='working'>Work</h4>" + "<br>" + "<h5 id='wTimeNumber'>" + min + ":" + sec + "</h5>" + "</div>";
    
    $("#cdTime").html(message);
    
    if (secondsRemaining === 0) {
        clearInterval(intervalHandle);
        secondsRemaining2 = breakTime * 60;
        intervalHandle = setInterval(breakTick, 1000);
    }
        
     if (secondsRemaining % 2 == 0) {
        $(".workSpace").css({"border-left-color": "aqua"});
        $(".workSpace").css({"border-top-color": "lime"});
        $(".workSpace").css({"border-right-color": "aqua"});
        $(".workSpace").css({"border-bottom-color": "lime"});
    }  else if (secondsRemaining % 2 !== 0){
        $(".workSpace").css({"border-left-color": "lime"});
        $(".workSpace").css({"border-top-color": "aqua"});
        $(".workSpace").css({"border-right-color": "lime"});
        $(".workSpace").css({"border-bottom-color": "aqua"});
    }
    

    secondsRemaining--;
    }
}
    

    function startCountdown() {
    
    var minutes = workTime;
    
    
    secondsRemaining =  minutes * 60;
    
    intervalHandle = setInterval(workTick, 1000);
         
    
}