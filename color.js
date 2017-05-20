/**
 * Created by allen on 20.05.2017.
 */

function ticker() {
    var date = new Date();
    var hours = date.getHours().toString();
    var min = date.getMinutes().toString();
    var sec = date.getSeconds().toString();

    if (hours.length < 2) {
        hours = "0" + hours;
    }

    if (min.length < 2) {
        min = "0" + min;
    }

    if (sec.length < 2) {
        sec = "0" + sec;
    }

    document.getElementById("body").style.backgroundColor = "#" + hours + min + sec;
    document.getElementById("clock").textContent = hours + ":" + min + ":" + sec;
    document.getElementById("color").textContent = "#" + hours + min + sec;
}

function colors() {
    setInterval(ticker, 1000);
}