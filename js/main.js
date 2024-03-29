//Declarando Variáveis
var btnContact = document.querySelector('.jl-btn-contact')
var toggleModal = document.querySelectorAll('.jl-toggle-modal')

var tooggleMenu = document.querySelectorAll('.jl-toggle-menu')
var menuMobile = document.querySelector('.jl-menu-mob')
var btnMenuMobIcon = document.querySelector('.jl-btn-menu-mob ion-icon')

//Page Preloader
window.addEventListener('load', function () {
  var pagePreloader = document.querySelector('.jl-preloader')
  pagePreloader.classList.add('jl-fade-out')
  setTimeout(function () {
    pagePreloader.style.display = 'none'
  }, 1000)
})

//Abrindo e Fechando Informações de Contato
btnContact.addEventListener('click', function () {
  var boxContact = document.querySelector('.jl-contact-info')
  boxContact.classList.toggle('jl-is-open')
  this.classList.toggle('jl-change-icon')
})

//Abrindo e Fechando Menu Mobyle
for (let i = 0; i < tooggleMenu.length; i++) {
  tooggleMenu[i].addEventListener('click', function () {
    var menuOverlay = document.querySelector('.jl-menu-overlay')

    menuOverlay.classList.toggle('jl-is-open')
    menuMobile.classList.toggle('jl-menu-is-closed')
    menuMobile.classList.toggle('jl-menu-is-open')

    var icon = btnMenuMobIcon.getAttribute('name')
    if (icon === 'menu') {
      btnMenuMobIcon.setAttribute('name', 'close')
    } else {
      btnMenuMobIcon.setAttribute('name', 'menu')
    }
  })
}

// Abrindo e fechando modal orçamento
for (let i = 0; i < toggleModal.length; i++) {
  toggleModal[i].addEventListener('click', function () {
    var overlay = document.querySelector('.jl-overlay')
    var modalOrcamento = document.querySelector('#jl-modal-orcamento')

    overlay.classList.toggle('jl-is-open')
    modalOrcamento.classList.toggle('jl-is-open')
    modalOrcamento.classList.toggle('jl-slide-top-in')
  })
}
//Scroll Top Bar
var topBarTrigger = document.querySelector('.jl-trigger-topbar')
var topBar = document.querySelector('.jl-topbar')
var logo = document.querySelector('.jl-logo')

var waypoint = new Waypoint({
  element: topBarTrigger,
  handler: function () {
    topBar.classList.toggle('jl-topbar-bg')
    logo.classList.toggle('jl-logo-shorten')
    logo.classList.toggle('jl-logo-big')
  },
  offset: '50px'
})
