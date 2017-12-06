var setDate = new Date("Dec 31, 2017 23:59:59").getTime();

// update the count down every 1 second
setInterval(function() {

    // get the current date
    var now = new Date().getTime();

    // difference of date between the date that we set and today
    var difference = setDate - now;

    // turn the difference in ms
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    //Output
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000);

//1000 ms = 1 second.
