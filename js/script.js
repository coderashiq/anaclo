var second = document.querySelector(".second");
var minute = document.querySelector(".minute");
var hour = document.querySelector(".hour");
setInterval(currentTime, 1000);

function currentTime() {
    var currentDate = new Date();
    var currentSecond = currentDate.getSeconds() * 6;
    var currentMinute = currentDate.getMinutes() * 6;
    var sampleHour = currentDate.getHours();
    var currentHour;
    if (sampleHour > 12) {
        currentHour = (sampleHour - 12) * 30 + (0.083 * currentMinute);
    } else {
        currentHour = sampleHour * 30;
    }
    second.style.transform = "rotate(" + currentSecond + "deg)";
    minute.style.transform = "rotate(" + currentMinute + "deg)";
    hour.style.transform = "rotate(" + currentHour + "deg)";

}
currentTime();
var currentDate = new Date();
var currentHour = currentDate.getHours();
if (currentHour > 12) {
    currentHour = currentHour - 12;
}