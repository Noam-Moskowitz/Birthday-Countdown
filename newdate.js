const timer = document.getElementById('timer')
const countdown = document.getElementById('game-cntdwn')


setInterval(updatedDate, 1000);

const birthDay = {
    month: 1,
    day: 13,
    hour: 24,
    minutes: 60,
    seconds: 60
}

const gameStart = {
    month: 1,
    day: 6,
    hour: 24,
    minutes: 60,
    seconds: 60
}

function updatedDate() {
    const newdate = new Date();
    const seconds = newdate.getSeconds();
    const minutes = newdate.getMinutes();
    const hours = newdate.getHours();
    let time = hours + ':' + minutes + ':' + seconds
    const date = newdate.getDate();
    const month = newdate.getMonth() + 1;
    const year = newdate.getFullYear();
    const fulldate = date + '/' + month + '/' + year;
    if (minutes < 10) {
        time = hours + ':' + "0" + minutes + ':' + seconds
    }
    if (seconds < 10) {
        time = hours + ':' + minutes + ':' + "0" + seconds
    }
    let secondscount = birthDay.seconds - seconds;
    let minutescount = birthDay.minutes - minutes - 1;
    let hourscount = birthDay.hour - hours - 1;
    let dayscount = birthDay.day + (30 - date);
    let monthscount = birthDay.month + (11 - month);

    if (secondscount == 60) {
        secondscount = '0'
    }
    if (monthscount < 10) {
        monthscount = "0" + monthscount;
    };
    if (dayscount < 10) {
        dayscount = "0" + dayscount
    };
    if (hourscount < 10) {
        hourscount = "0" + hourscount
    };
    if (minutescount < 10) {
        minutescount = "0" + minutescount
    }
    if (secondscount < 10) {
        secondscount = "0" + secondscount
    }
    let fullcount = monthscount + " " + dayscount + " " + hourscount + ":" + minutescount + ":" + secondscount
    timer.value = fullcount;
    let gamesecondscount = gameStart.seconds - seconds;
    let gameminutescount = gameStart.minutes - minutes - 1;
    let gamehourscount = gameStart.hour - hours - 1;
    let gamedayscount = gameStart.day + (30 - date);
    let gamemonthscount = gameStart.month + (11 - month);
    if (gamesecondscount == 60) {
        gamesecondscount = '0'
    }
    if (gamemonthscount < 10) {
        gamemonthscount = "0" + gamemonthscount;
    };
    if (gamedayscount < 10) {
        gamedayscount = "0" + gamedayscount
    };
    if (gamehourscount < 10) {
        gamehourscount = "0" + gamehourscount
    };
    if (gameminutescount < 10) {
        gameminutescount = "0" + gameminutescount
    }
    if (gamesecondscount < 10) {
        gamesecondscount = "0" + gamesecondscount
    }
    let fullGameCount = gamemonthscount + " " + gamedayscount + " " + gamehourscount + ":" + gameminutescount + ":" + gamesecondscount;
    if (monthscount < 1 && dayscount < 7) {
        document.getElementById('clues-h1').style.display = 'none';
        countdown.style.display = 'none';
    } else {
        countdown.value = fullGameCount;
    }
};
