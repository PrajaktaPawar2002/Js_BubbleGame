var timer = 15;

var score = 0;

var hitrn = 0;


function newincreasescore() {
    score += 10;
    document.querySelector("#increasevaluescore").textContent = score;
}

function getNewHit() {
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent = hitrn;
}

function makeBubblegame(){
var clutter = "";
for ( var i = 1; i<=90; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;

Math.floor(Math.random*10);
}


// var timer = 3;
function runTimer() {
    var timerinterval = setInterval(function(){
        if (timer > 0){

        timer--;
        document.querySelector("#timervalue").textContent = timer;
        }
        else {
            //backend time clear
            clearInterval(timerinterval);
            // backend clear bubble
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over 😀 </h1>`;
        }
        
    }, 1000);

}


document.querySelector("#pbtm")
.addEventListener("click", function(dets){
  var clickednumber = Number(dets.target.textContent);
  if(clickednumber === hitrn){

    newincreasescore();
    makeBubblegame();
    getNewHit();
  }

})

runTimer();
makeBubblegame();
getNewHit();
newincreasescore();












