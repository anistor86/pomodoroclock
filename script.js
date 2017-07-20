/* global $ */

var count = 1500;
var stopCounter = true;
var cycle = "work";

$(document).ready(function(){
  timer();
  show_time();
});

function timer(){

  $("#timer25").click(function(){
    count = 1500;
    cycle = "work";
    show_time();
  });

  $("#timer5").click(function(){
    count = 300;
    cycle = "break";
    show_time();
  });

  $("#addMin").click(function() {
    count += 60;
    show_time();
  });

  $("#subMin").click(function() {
    if (count >= 60) {
    count -= 60;
    show_time();
    }
  });

  $("#stopTimer").click(function(){
    stopCounter = true;
    this.disabled = true;
    $('#startTimer').attr("disabled", false);

  });

  $("#startTimer").click(function(){
    stopCounter = false;
    this.disabled = true;
    $('#stopTimer').attr("disabled", false);
    var counter = setInterval(countDown, 1000);

    function countDown(){
      if(stopCounter == true){
          clearInterval(counter);
      }else if(count <= 0){
          if(cycle == "work"){
              alert('Time to rest...have a break!');
              count = 300;
              cycle = "break";
          }else{
              alert('Time to go back to work!!!');
              count = 1500;
              cycle = "work";
          }
          show_time();
      }else{
          count--;
          show_time();
      }
    }
  });

}

function show_time(){
    var minutes = Math.floor(count/60);
    var seconds = (count - minutes*60);
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }

  document.getElementById("time").innerHTML = minutes + ":" + seconds;
}
