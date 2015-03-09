var wadafm = document.getElementById("wadafm");
var counter = 0;
var audio = document.getElementById("wadafm_audio");
var audio2 = document.getElementById("wadafm_audio2");
var natami = document.getElementById("natami");
var m = true;
wadafm.onclick = function (e) {
    if (m) {
        audio.play();
        audio2.pause();
        audio2.currentTime = 0;
        m = false;
    }
    else {
        audio2.play();
        audio.pause();
        audio.currentTime = 0;
        m = true;
    }

    counter++;
    if (counter === 100) {
        natami.pause();
        natami.currentTime = 0;
        counter = 0;
        natami.play();

    }

}
