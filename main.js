let slides = document.querySelectorAll('.slide') 
let left = document.querySelector('#left')
let right = document.querySelector('#right')

let last = slides.length - 1
let current = 0

let stay = last

left.onclick = () => {
    stay = last
    last = current
    current-- 
    if (current < 0) {
        current = slides.length - 1
    }

    changeLeft()
}

right.onclick = () => {
    stay = last
    last = current
    current++ 
    if (current >= slides.length) {
        current = 0
    }
    changeRight()
}

function changeLeft() {

    let cSlide = slides[current]
    let lSlide = slides[last]
    let sSlide = slides[stay]

    cSlide.className = 'slide to-center'
    lSlide.className = 'slide to-left'
    sSlide.className = 'slide stay-left'
}

function changeRight() {

    let cSlide = slides[current]
    let lSlide = slides[last]
    let sSlide = slides[stay]

    cSlide.className = 'slide to-center'
    lSlide.className = 'slide to-right'
    sSlide.className = 'slide stay-right'
}

