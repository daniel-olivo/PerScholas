setInterval(myTimer, 1000);

function myTimer() {
    var currentDate = new Date();
    document.getElementById("time").innerHTML = currentDate.toDateString() + "<br>" +  currentDate.toLocaleTimeString();
}
