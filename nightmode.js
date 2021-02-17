const button = document.querySelector('.switch')
const circle = document.querySelector('.btn')
const bod = document.querySelector('body')

button.addEventListener('click', nightMode)

function nightMode() {
	button.classList.toggle('start')
	bod.classList.toggle('day')
	circle.classList.toggle('btnday')
	button.classList.toggle('switchday')
}