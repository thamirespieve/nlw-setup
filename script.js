const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.getElementById('registerButton')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  Date

  if (dayExists) {
    return alert('O dia já incluso.')
  }

  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem('NLWSetUp@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('NLWSetUp@habits')) || {}

nlwSetup.setData(data)

nlwSetup.load()
