const toggle = document.getElementById('toggle')
const primaryText = document.getElementsByClassName('text-color-1')
const secondaryText = document.getElementsByClassName('text-color-2')
const largeCard = document.getElementsByClassName('card')
const smallCard = document.getElementsByClassName('small-card')
const smallCardTitle = document.getElementsByClassName('card-title')

toggle.addEventListener('input', (e) => {
  const checked = e.target.checked
  if (checked) {
    document.body.classList.add('dark')
    for (let text of primaryText) {
      text.classList.add('dark')
    }
    for (let text of secondaryText) {
      text.classList.add('dark')
    }
    for (let card of largeCard) {
      card.classList.add('dark')
    }
    for (let card of smallCard) {
      card.classList.add('dark')
    }
    for (let title of smallCardTitle) {
      title.classList.add('dark')
    }
  } else {
    document.body.classList.remove('dark')
    for (let text of primaryText) {
      text.classList.remove('dark')
    }
    for (let text of secondaryText) {
      text.classList.remove('dark')
    }
    for (let card of largeCard) {
      card.classList.remove('dark')
    }
    for (let card of smallCard) {
      card.classList.remove('dark')
    }
    for (let title of smallCardTitle) {
      title.classList.remove('dark')
    }
  }
})
