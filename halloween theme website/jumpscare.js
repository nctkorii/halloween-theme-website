function jumpscare() {
    var jumpscare = document.getElementById("jumpscare");
    jumpscare.style.visibility = "visible";
    var audio = document.getElementById("scream");
    audio.play();
    setInterval(redirect, 3500);
}
