const counter = document.querySelector('.counter')
const pauseButton = document.querySelector('.pause')
const resetButton = document.querySelector('.reset')
const beepSound = new Audio('./sounds/mixkit-clock-countdown-bleeps-916.wav')

let miliseconds = 0
let seconds = 0
let minutes = 0
let hours = 0

const countTimer = () => {
    miliseconds += 1

    if(miliseconds === 100){
        miliseconds = 0
        seconds += 1
    }else if(seconds === 60){
        seconds = 0
        minutes += 1
    }else if(minutes === 60){
        minutes = 0
        hours += 1
    }

    if(miliseconds < 10){
        return counter.textContent = `0${hours}:0${minutes}:0${seconds}:0${miliseconds}`
    }else if(seconds < 10){
        return counter.textContent = `0${hours}:0${minutes}:0${seconds}:0${miliseconds}`
    }else if(minutes < 10 && seconds >= 10){
        return counter.textContent = `0${hours}:0${minutes}:${seconds}:${miliseconds}`
    }

    return counter.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`
}

let play = false
let timer

pauseButton.addEventListener('click', () => {
    if(!play){
        timer = setInterval(countTimer, 1)
        play = true
    }else{
        clearInterval(timer)
        play = false
    }
})

resetButton.addEventListener('click', () => {
    counter.textContent = '00:00:00:00'
    clearInterval(timer)
    play = false
    miliseconds = 0
    seconds = 0
    minutes = 0
    hours = 0
})
