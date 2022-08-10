//display time
setInterval(changeTime, 1000);

document.getElementById('secondsInput').addEventListener('change', changeTime);    
document.getElementById('minutesInput').addEventListener('change', changeTime);
document.getElementById('hoursInput').addEventListener('change', changeTime);

function changeTime() {

    const currentTime = new Date();                         //current time as default and basis for calc
    let h = currentTime.getHours();
    let m = currentTime.getMinutes();
    let s = currentTime.getSeconds();

    let changedSeconds = Number(document.getElementById('secondsInput').value);
    let changedMinutes = Number(document.getElementById('minutesInput').value);
    let changedHours = Number(document.getElementById('hoursInput').value);


    let secondsToDisplay = Math.floor((s + changedSeconds % 60) % 60);                                                  
    secondsToDisplay = (secondsToDisplay < 10) ? "0" + secondsToDisplay : secondsToDisplay;


    let minutesToDisplay = m;
    (secondsToDisplay === 0) ? ++minutesToDisplay : false;
    minutesToDisplay = Math.floor((m + Math.floor(changedSeconds / 60) + changedMinutes % 60) % 60);
    minutesToDisplay = (minutesToDisplay < 10) ? "0" + minutesToDisplay : minutesToDisplay;


    let hoursToDisplay = h;
    (minutesToDisplay === 0) ? ++hoursToDisplay : false;
    hoursToDisplay = Math.floor((h + changedHours % 24 + Math.floor(changedMinutes / 60) + Math.floor(changedSeconds / 3600)) % 24);
    hoursToDisplay = (hoursToDisplay < 10) ? "0" + hoursToDisplay : hoursToDisplay;

    document.getElementById('clock').innerHTML = hoursToDisplay + ':' + minutesToDisplay + ':' + secondsToDisplay;

}



