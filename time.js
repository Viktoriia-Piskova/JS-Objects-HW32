//display time
setInterval(displayTime, 1000);

function displayTime() {

    const time = new Date();

    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();


    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById('clock').innerHTML = h + ':' + m + ':' + s;

}



