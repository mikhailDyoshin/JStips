function showTime() {

    const month = [
        "January","February","March",
        "April","May","June","July",
        "August","September","October",
        "November","December"];

    var date = new Date();
    var y = date.getFullYear();
    var moNum = date.getMonth();
    var d = date.getDate();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var day = d + " " + month[moNum] + " " + y;
    var time = h + ":" + m + ":" + s + " " + session;

    document.getElementById("MyDayDisplay").innerText = day;
    document.getElementById("MyDayDisplay").textContent = day;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();