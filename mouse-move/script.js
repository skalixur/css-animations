const panel1 = document.querySelector('.panel-1')
const panel2 = document.querySelector('.panel-2')
const panel3 = document.querySelector('.panel-3')
const panel4 = document.querySelector('.panel-4')

let threshold =
  100 /
  (100 -
    Math.abs(
      parseInt(
        getComputedStyle(document.documentElement)
          .getPropertyValue('--screen-cover')
          .slice(0, -1)
      )
    ))

document.addEventListener('mousemove', e => {
  panel1.dataset.active =
    e.clientY <= window.innerHeight / threshold ? 'true' : 'false'
  panel4.dataset.active =
    e.clientX <= window.innerWidth / threshold ? 'true' : 'false'
  panel3.dataset.active =
    e.clientY >= (window.innerHeight / threshold) * (threshold - 1)
      ? 'true'
      : 'false'
  panel2.dataset.active =
    e.clientX >= (window.innerWidth / threshold) * (threshold - 1)
      ? 'true'
      : 'false'
})
