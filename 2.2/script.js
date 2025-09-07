const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

// const buttons = document.querySelectorAll('.circle')
// let activeButton = null

// buttons.forEach(btn => {
//   btn.addEventListener('click', () => {
//     // remove active from previous button
//     if (activeButton) {
//       activeButton.classList.remove('active')
//     }

//     // set new active button
//     activeButton = btn
//     activeButton.classList.add('active')
//   })
// })

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
            // why is classList used?
            // classList is a read-only property that returns a live DOMTokenList collection of the class attributes of the element.
            // This can then be used to manipulate the class list.
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
    // changes the width of the progress bar based on the number of active circles

    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
    // disables the prev button when on the first circle and disables the next button when on the last circle

}