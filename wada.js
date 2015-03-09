var wadafm = document.getElementById("wadafm");
var audio = document.getElementById("wadafm_audio");
var audio2 = document.getElementById("wadafm_audio2");
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

}
