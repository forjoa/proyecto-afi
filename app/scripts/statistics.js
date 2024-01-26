const burguerMenu = document.getElementById('menu')
const navbar = document.getElementById('navbar')
const logout = document.getElementById('logout-btn')
const ctx = document.getElementById('myChart')
const ctx2 = document.getElementById('myChart2')
const ctx3 = document.getElementById('myChart3')

burguerMenu.addEventListener('click', () => {
  navbar.classList.toggle('hidden')
})

logout.addEventListener('click', () => {
  window.location.href = '/app/'
})

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [
      {
        label: 'Cantidad de ventas',
        data: [453, 190, 312, 503, 152, 130],
        backgroundColor: ['#1C6994'],
        borderWidth: 0,
        barPercentage: 0.5,
        barThickness: 40,
        maxBarThickness: 40,
        minBarLength: 2,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
})

new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [
      {
        label: 'Cereales',
        data: [12, 30, 9, 32, 27, 1],
        backgroundColor: '#00BE62',
        borderColor: '#00BE62',
      },
      {
        label: 'Bebidas',
        data: [23, 43, 12, 46, 19, 10],
        backgroundColor: '#1C6994',
        borderColor: '#1C6994',
      },
      {
        label: 'Snacks',
        data: [10, 20, 30, 40, 10, 19],
        backgroundColor: '#7B97AA',
        borderColor: '#7B97AA',
      },
    ],
  },
})
let inversion = 1000
let ganancia = 900
new Chart(ctx3, {
  type: 'doughnut',
  data: {
    labels: ['Ganancia', 'Inversion'],
    datasets: [
      {
        label: 'Ganancia',
        data: [ganancia, inversion - ganancia],
        backgroundColor: ['#1C6994', '#D5E3EC'],
      },
    ],
  },
})
