const svg = document.querySelector('.svg')
const rect1 = document.querySelector('.rect-1')
const rect2 = document.querySelector('.rect-2')
const rect3 = document.querySelector('.rect-3')
const rect4 = document.querySelector('.rect-4')
const rect = document.querySelector('.rect-container')
window.onresize = e => {}

let clickCounter = 0 // use as state for now
rectLeave('forwards')
document.onpointerdown = e => {
  const { clientX, clientY } = e
  clickCounter++
}

document.onpointermove = e => {
  const { clientX, clientY } = e
}

function rectLeave(aDirection) {
  setTimeout(
    () => {
      rect4.animate(
        [{ transform: 'translate(0%)' }, { transform: 'translate(-100%)' }],
        {
          duration: 1500,
          fill: 'forwards',
          easing: 'ease',
          direction: aDirection,
        }
      )
    },
    aDirection === 'normal' ? 0 : 4500
  )
  setTimeout(
    () => {
      rect4.animate(
        [{ transform: 'translate(-100%)' }, { transform: 'translate(-200%)' }],
        {
          duration: 1500,
          fill: 'forwards',
          easing: 'ease',
          direction: aDirection,
        }
      )
      rect3.animate(
        [{ transform: 'translate(0%)' }, { transform: 'translate(-100%)' }],
        {
          duration: 1500,
          fill: 'forwards',
          easing: 'ease',
          direction: aDirection,
        }
      )
    },
    aDirection === 'normal' ? 1500 : 3000
  )
  setTimeout(
    () => {
      rect4.animate(
        [{ transform: 'translate(-200%)' }, { transform: 'translate(-300%)' }],
        {
          duration: 1500,
          fill: 'forwards',
          easing: 'ease',
          direction: aDirection,
        }
      )
      rect3.animate(
        [{ transform: 'translate(-100%)' }, { transform: 'translate(-200%)' }],
        {
          duration: 1500,
          fill: 'forwards',
          easing: 'ease',
          direction: aDirection,
        }
      )
      rect2.animate(
        [{ transform: 'translate(0%)' }, { transform: 'translate(-100%)' }],
        {
          duration: 1500,
          fill: 'forwards',
          easing: 'ease',
          direction: aDirection,
        }
      )
    },
    aDirection === 'normal' ? 3000 : 1500
  )
  setTimeout(
    () => {
      rect.animate(
        [
          { transform: 'translate(-50%, -50%) scale(1)' },
          { transform: 'translate(-50%, -50%) scale(0)' },
        ],
        {
          duration: 1500,
          fill: 'forwards',
          easing: 'ease',
          direction: aDirection,
        }
      )
    },
    aDirection === 'normal' ? 4500 : 0
  )
}
