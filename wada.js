var wadafm = document.getElementById("wadafm");
var audio = document.getElementById("wadafm_audio");
wadafm.onclick = function (e) {
    console.log("clicked");
    audio.play();
}
