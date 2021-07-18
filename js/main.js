const nav = document.querySelector('#header #container')

const toggle = document.querySelectorAll('#container .toggle')

for (var element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

for (var link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

function redirecionarAssistir() {
  window.location.href = 'https://www.youtube.com/watch?v=SvSkxBYuoQY'
}

function redirecionarInformacoes() {
  window.open('https://www.themoviedb.org/tv/1425-house-of-cards')
}
