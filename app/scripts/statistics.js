const burguerMenu = document.getElementById('menu')
const navbar = document.getElementById('navbar')
const logout = document.getElementById('logout-btn')

burguerMenu.addEventListener('click', () => {
  navbar.classList.toggle('hidden')
})

logout.addEventListener('click', () => {
  window.location.href = '/app/'
})