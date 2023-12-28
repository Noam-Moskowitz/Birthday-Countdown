const timer = document.getElementById('timer')
const countdown = document.getElementById('game-cntdwn')
const clues = document.getElementById('clues')
const clueContainer = document.getElementById('clue-cntainer');
const guess = document.getElementById('guess');
const guessSubmit = document.getElementById('guess-submit');
const guessdate = new Date().getDate();
const guessMonth = new Date().getMonth() + 1;
const birthDay = {
    month: 1,
    day: 13,
    hour: 24,
    minutes: 60,
    seconds: 60
}
const gameStart = {
    month: 1,
    day: 4,
    hour: 24,
    minutes: 60,
    seconds: 60
}
const answer = ['uggs', 'mini uggs', 'high platform uggs', 'brown uggs'];

setInterval(updatedDate, 1000);

function checkDate() {
    if (guess.value.trim() != "") {
        if (guessMonth == 1 && guessdate >= 5 && guessdate <= 12) {
            allowGuess();
        } else {
            document.getElementById('clues-h1').innerHTML = "You can only guess in:"
            guess.value = '';
        }
    }
}
guess.addEventListener("keyup", function (event) {
    if (event.key == 'Enter') {
        checkDate();
    }
})
guessSubmit.addEventListener("click", checkDate)

function result() {
    const plyrInput = String(guess.value.toLowerCase().trim());
    for (x = 0; x < answer.length; x++) {
        if (plyrInput == answer[x].trim()) {
            clues.innerHTML = "you guessed correctly!"
            guess.value = '';
            return;
        } else {
            clues.innerHTML = "your guess was incorrect!"
        }
        guess.value = '';
    }
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
    if (date >= 1 && month < 2) {
        monthscount = '00';
        dayscount = "0" + (birthDay.day - date - 1);
    }
    if (date >= 13 && monthscount == 1) {
        monthscount = '00';
        dayscount = '00';
        hourscount = '00';
        minutescount = '00';
        secondscount = '00';
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
    if (date >= 1 && month < 2) {
        gamemonthscount = '00';
        gamedayscount = "0" + (gameStart.day - date);
    }
    if (gamedayscount == "0" + -1) {
        gamedayscount = "00";
    }
    let fullGameCount = gamemonthscount + " " + gamedayscount + " " + gamehourscount + ":" + gameminutescount + ":" + gamesecondscount;
    countdown.value = fullGameCount;

};
function hasGuessedToday() {
    const lastGuess = localStorage.getItem('lastGuess');
    if (lastGuess) {
        const today = new Date().toDateString();
        return lastGuess === today;
    }
    return false;
}

function recordGuess() {
    const today = new Date().toDateString();
    localStorage.setItem('lastGuess', today);
}

function allowGuess() {
    if (hasGuessedToday()) {
        guess.disabled = true;
        guessSubmit.disabled = true;
        clues.innerHTML = "You've already guessed today!";
    } else {
        result();
        recordGuess();
    }
}
function hints() {
    let d = new Date();
    let day = d.getDate();
    let month = d.getMonth() + 1;
    let date = String(day + ' ' + month);
    switch (date) {
        case '6 1':
            countdown.style.display = 'none';
            document.getElementById('clues-h1').style.display = 'none';
            clueContainer.innerHTML = '<img src="./images/snowflake.png" >';
            clueContainer.classList.add('clue')
            break;
        case '7 1':
            countdown.style.display = 'none';
            document.getElementById('clues-h1').style.display = 'none';
            clueContainer.innerHTML = '<img src="./images/furr.jpg">';
            clueContainer.classList.add('clue')
            break;
        case '8 1':
            countdown.style.display = 'none';
            document.getElementById('clues-h1').style.display = 'none';
            clues.innerHTML = '<img src="./images/uglyMan.jpg" >';
            clueContainer.classList.add('clue')
            break;
        case '9 1':
            countdown.style.display = 'none';
            document.getElementById('clues-h1').style.display = 'none';
            clueContainer.innerHTML = '<img src="./images/brown.png" >';
            clueContainer.classList.add('clue')
            break;
        case '10 1':
            countdown.style.display = 'none';
            document.getElementById('clues-h1').style.display = 'none';
            clueContainer.innerHTML = '<img src="./images/shoes.jpg" >';
            clueContainer.classList.add('clue')
            break;
        case '11 1':
            countdown.style.display = 'none';
            document.getElementById('clues-h1').style.display = 'none';
            clueContainer.innerHTML = '<img src="./images/GG.png" >';
            clueContainer.classList.add('clue')
            break;
        case '12 1':
            countdown.style.display = 'none';
            document.getElementById('clues-h1').style.display = 'none';
            clueContainer.innerHTML = '<img src="./images/uggslippers.png" >';
            clueContainer.classList.add('clue')
            break;
    }
}
hints();
