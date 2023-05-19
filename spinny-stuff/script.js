const spin1 = document.querySelector('.spin1')
const spin2 = document.querySelector('.spin2')
const body = document.querySelector('body')
const opts = document.querySelectorAll('.opt')
const opt1 = document.querySelector('.opt-1')
const opt2 = document.querySelector('.opt-2')
const opt3 = document.querySelector('.opt-3')
const delay = 3000
let counter1 = 1
let counter2 = 2
let counter3 = 3
let x, y

window.onpointermove = e => {
  const { clientX, clientY } = e

  if (isInBorder(clientX, clientY, opt1)) {
    // delay = 1000
    x = center(opt1).x
    y = center(opt1).y
  } else if (isInBorder(clientX, clientY, opt2)) {
    // delay = 1000
    x = center(opt2).x
    y = center(opt2).y
  } else if (isInBorder(clientX, clientY, opt3)) {
    // delay = 1000
    x = center(opt3).x
    y = center(opt3).y
  } else {
    x = clientX
    y = clientY
  }

  updateSpinny()
}

opts.forEach((value, key) => {
  value.onpointerdown = e => {
    value.style.backgroundColor = '#A80F2E'
  }
  value.onpointerup = e => {
    value.style.backgroundColor = 'crimson'
  }
})

opt1.onpointerdown = e => {
  counter1++
  if (counter1 % 2 === 0) {
    body.style.backgroundColor = 'Crimson'
    spin1.style.backgroundColor = 'Beige'
    spin2.style.backgroundColor = 'Beige'
  } else if (counter1 % 2 === 1) {
    body.style.backgroundColor = 'Beige'
    spin1.style.backgroundColor = 'Crimson'
    spin2.style.backgroundColor = 'Crimson'
  }
  opt1.style.backgroundColor = '#A80F2E'
}
opt2.onpointerdown = e => {
  counter2++
  if (counter2 % 2 === 0) {
    spin1.style.animation = 'spin 10s linear infinite forwards'
    spin2.style.animation = 'spin 10s linear infinite forwards'
  } else if (counter3 % 2 === 1) {
    spin1.style.animation = 'spin 5s ease-in infinite forwards'
    spin2.style.animation = 'spin 6s ease-in infinite forwards'
  }
  opt2.style.backgroundColor = '#A80F2E'
}
opt3.onpointerdown = e => {
  counter3++
  if (counter3 % 2 === 0) {
  } else if (counter3 % 2 === 1) {
  }
  opt3.style.backgroundColor = '#A80F2E'
}

function center(element) {
  return {
    x:
      element.getBoundingClientRect().left +
      Math.abs(
        (element.getBoundingClientRect().left -
          element.getBoundingClientRect().right) /
          2
      ),
    y:
      element.getBoundingClientRect().top +
      Math.abs(
        (element.getBoundingClientRect().top -
          element.getBoundingClientRect().bottom) /
          2
      ),
  }
}

function updateSpinny() {
  spin1.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: delay, fill: 'forwards' }
  )
  spin2.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: delay, fill: 'forwards' }
  )
}

function isInBorder(x, y, element) {
  if (
    x >= element.getBoundingClientRect().left &&
    x <= element.getBoundingClientRect().right &&
    y <= element.getBoundingClientRect().bottom &&
    y >= element.getBoundingClientRect().top
  )
    return true
  else return false
}
