const form = document.getElementById('login-form')

form.addEventListener('submit', e => {
    e.preventDefault()

    const user = document.getElementById('name').value
    const pwd = document.getElementById('pwd').value

    if (user === 'admin' && pwd === 'admin') {
        window.location.href = './statistics.html'
    } else if (user === 'worker' && pwd === '1234') {
        window.location.href = './routes.html'
    } else {
        alert('Este usuario no tiene acceso.')
    }
})