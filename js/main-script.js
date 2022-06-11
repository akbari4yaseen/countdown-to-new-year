const daysEl = document.getElementById('days-counter')
const hoursEl = document.getElementById('hours-counter')
const minsEl = document.getElementById('minutes-counter')
const secondsEl = document.getElementById('seconds-counter')
const yearEl = document.getElementById('year')

const currDate = new Date()
const year = currDate.getFullYear()
const newYear = '1 Jan ' + (year + 1) // current year + 1 => new year date

yearEl.innerText = (year + 1) // current year + 1 => new year

function countdown() {
    const currDate = new Date()
    const newYearDate = new Date(newYear)
    const totalSeconds = Math.floor((newYearDate - currDate) / 1000)
    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const minutes = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60

    daysEl.innerText = counterFormat(days)
    hoursEl.innerText = counterFormat(hours)
    minsEl.innerText = counterFormat(minutes)
    secondsEl.innerText = counterFormat(seconds)
}

// ledding Zero
function counterFormat(counter){
    return counter < 10 ? `0${counter}` : counter
}
countdown()

setInterval(countdown, 1000)