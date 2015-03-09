var wadafm = document.getElementById("wadafm");
var counter = 0;
var audio = document.getElementById("wadafm_audio");
var natami = document.getElementById("natami");
var m = true;
wadafm.onclick = function (e) {
    audio.pause();
    audio.currentTime = 0;
    audio.play();
    counter++;
    if (counter === 100) {
        natami.pause();
        natami.currentTime = 0;
        counter = 0;
        natami.play();

    }

}
