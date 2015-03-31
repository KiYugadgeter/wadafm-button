var wadafm = document.getElementById("wadafm");
var counter = 0;
var audio = document.getElementById("wadafm_audio");
var natami = document.getElementById("natami");
var todaysletter = document.getElementById("todaysletter");
var letter_se = document.getElementById("otayori");
wadafm.onclick = function (e) {
    audio.currentTime = 0;
    audio.play();
    counter++;
    if (counter === 100) {
        natami.currentTime = 0;
        counter = 0;
        natami.play();
    }
}

todaysletter.onclick = function (e) {
    letter_se.currentTime = 0;
    letter_se.play()
}
