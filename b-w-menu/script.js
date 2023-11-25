const leftSlider = document.querySelector('.slider-left')
const rightSlider = document.querySelector('.slider-right')

const leftText = 'sick'

const rightText = 'game'

for (let i = 0; i < 20; i++) {
  const leftTextElement = document.createElement('li')
  leftTextElement.innerHTML = `<p class="rgb-split" data-text="${leftText}">${leftText}</p>`
  leftSlider.appendChild(leftTextElement)
  const rightTextElement = document.createElement('li')
  rightTextElement.innerHTML = `<p class="rgb-split" data-text="${rightText}">${rightText}</p>`
  rightSlider.appendChild(rightTextElement)
}
