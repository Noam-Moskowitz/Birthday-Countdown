const timer = document.getElementById('timer')
const countdown = document.getElementById('game-cntdwn')
const clues = document.getElementById('clues')
const guess = document.getElementById('guess');
const guessSubmit = document.getElementById('guess-submit');
const guessdate = new Date().getDay();
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
const answer = ['daschund', 'second dog', 'another dog', 'puppy', 'a puupy', 'dog', 'a dog'];

setInterval(updatedDate, 1000);
guess.addEventListener("keyup", function (event) {
    if (event.key == 'Enter') {
        if (guess.value.trim() != "") {
            if (guessMonth == 1 && guessdate >= 5 && guessdate <= 12) {
                allowGuess();
            } else {
                document.getElementById('clues-h1').innerHTML = "You can only guess in:"
            }
        }
    }
})
guessSubmit.addEventListener("click", function () {
    if (guess.value.trim() != "") {
        if (guessMonth == 1 && guessdate <= 5 && guessdate >= 12) {
            allowGuess();
        } else {
            document.getElementById('clues-h1').innerHTML = "You can only guess in:"
        }
    }
})

function result() {
    const plyrInput = String(guess.value.toLowerCase());
    for (x = 0; x < answer.length; x++) {
        if (plyrInput == answer[x]) {
            clues.innerHTML = "you win"
            return;
        } else {
            clues.innerHTML = "you lose"
        }
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
    if (date >= 13 && monthscount < 1) {
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
    /*  if (monthscount < 1 && date >= 5) {
         document.getElementById('clues-h1').style.display = 'none';
         fullGameCount = gamehourscount + ":" + gameminutescount + ":" + gamesecondscount;
     } else { */
    countdown.value = fullGameCount;
    /*   } */
    switch (dayscount) {
        case "0" + 6:
            countdown.style.display = 'none';
            document.getElementById('clues-h1').style.display = 'none';
            clues.innerHTML = "First Hint";
            break;
        case "0" + 5:
            countdown.style.display = 'none';
            document.getElementById('clues-h1').style.display = 'none';
            clues.innerHTML = "2 Hint";
            break;
        case "0" + 4:
            countdown.style.display = 'none';
            document.getElementById('clues-h1').style.display = 'none';
            clues.innerHTML = "3 Hint";
            break;
        case "0" + 3:
            countdown.style.display = 'none';
            document.getElementById('clues-h1').style.display = 'none';
            clues.innerHTML = "4 Hint";
            break;
        case "0" + 2:
            countdown.style.display = 'none';
            document.getElementById('clues-h1').style.display = 'none';
            clues.innerHTML = "5 Hint";
            break;
        case "0" + 1:
            countdown.style.display = 'none';
            document.getElementById('clues-h1').style.display = 'none';
            clues.innerHTML = "6 Hint";
            break;
        case "0" + 0:
            countdown.style.display = 'none';
            document.getElementById('clues-h1').style.display = 'none';
            clues.innerHTML = "7 Hint";
            break;
    }
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
