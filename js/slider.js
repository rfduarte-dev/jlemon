//portfolio Slider

//Declarando variáveis do Slider
var sliderContainer = document.querySelector('.jl-slider-container')
var sliderList = document.querySelector('.jl-slider-list')
var sliderItem = document.querySelectorAll('.jl-portfolio-item')
const sliderTotalItems = sliderItem.length
var sliderListWidth = null
var currentSlide = document.querySelector('.jl-current-slide')
var totalSlide = document.querySelector('.jl-total-slide')

var currentCounter = 1

var navItems = document.querySelectorAll('.jl-item-navigator a')
var navCounter = document.querySelector('.jl-navigator-counter span')

//Slider onClick
var prevItem = document.querySelector('.jl-item-prev')
var nextItem = document.querySelector('.jl-item-next')
var sliderPos = 0

//Capturando larguras individuais
var containerWidth = sliderContainer.parentElement.offsetWidth

//Passando larguras dinânmicas
sliderContainer.style.width = containerWidth + 'px'

for (var p = 0; p < sliderItem.length; p++) {
  sliderItem[p].style.width = containerWidth + 'px'

  var sliderItemWidth = sliderItem[p].offsetWidth

  sliderListWidth += sliderItemWidth
}

sliderList.style.width = sliderListWidth + 'px'

//HANDLERS

// -- Prev Slider Animação --
var nextSlideAnim = function () {
  var lastItem = sliderListWidth - containerWidth
  if (-1 * sliderPos === lastItem) {
    return
  }

  sliderPos -= containerWidth

  anime({
    targets: sliderList,
    translateX: sliderPos,
    easing: 'cubicBezier(0,1.01,.32,1)'
  })
}

// -- Prev Slider Animação --
var prevSlideAnim = function () {
  if (-1 * sliderPos === 0) {
    return
  }
  sliderPos += containerWidth

  anime({
    targets: sliderList,
    translateX: sliderPos,
    easing: 'cubicBezier(0,1.01,.32,1)'
  })
}

//Counter Formatter
var counterFormatter = function (n) {
  if (n < 10) {
    return '0' + n
  } else {
    return n
  }
}

//Counter Add
var counterAdd = function () {
  if (currentCounter >= 0 && currentCounter < sliderTotalItems) {
    currentCounter++
    currentSlide.innerHTML = counterFormatter(currentCounter)
    navCounter.innerHTML = counterFormatter(currentCounter)
  }
}

//Counter Remove
var counterRemove = function () {
  if (currentCounter > 1 && currentCounter <= sliderTotalItems) {
    currentCounter--
    currentSlide.innerHTML = counterFormatter(currentCounter)
    navCounter.innerHTML = counterFormatter(currentCounter)
  }
}

// Set Active Nav
var setActiveNav = function () {
  for (var nv = 0; nv < navItems.length; nv++) {
    let myNavNum = parseInt(navItems[nv].getAttribute('data-nav'))

    if (myNavNum === currentCounter) {
      navItems[nv].classList.add('jl-item-active')

      anime({
        targets: navItems[nv],
        width: 90
      })
    }
  }
}

// Set Active Slide
var setActiveSlide = function () {
  for (var sld = 0; sld < sliderItem.length; sld++) {
    let myNavSlide = parseInt(sliderItem[sld].getAttribute('data-slide'))

    if (myNavSlide === currentCounter) {
      sliderItem[sld].classList.add('jl-scale-right')
      sliderItem[sld]
        .querySelector('.jl-portfolio-item-box')
        .classList.add('jl-scale-right')
      sliderItem[sld]
        .querySelector('.jl-portfolio-item-thumb img')
        .classList.add('jl-scale-up')
      sliderItem[sld]
        .querySelector('.jl-portfolio-item-info h1')
        .classList.add('jl-fade-from-left-first')

      sliderItem[sld]
        .querySelector('.jl-portfolio-item-info p')
        .classList.add('jl-fade-from-left-mid')

      sliderItem[sld]
        .querySelector('.jl-portfolio-item-info .jl-btn')
        .classList.add('jl-fade-from-left-last')
      sliderItem[sld]
        .querySelector('.jl-portfolio-item-thumb .jl-btn')
        .classList.add('jl-fade-from-left-last')
    }
  }
}

var changeActive = function () {
  for (var rm = 0; rm < navItems.length; rm++) {
    navItems[rm].classList.remove('jl-item-active')

    anime({
      targets: navItems[rm],
      width: 20
    })
  }

  for (var rms = 0; rms < sliderItem.length; rms++) {
    sliderItem[rms].classList.remove('jl-scale-right')
    sliderItem[rms].classList.remove('jl-scale-right')
    sliderItem[rms]
      .querySelector('.jl-portfolio-item-box')
      .classList.remove('jl-scale-right')
    sliderItem[rms]
      .querySelector('.jl-portfolio-item-thumb img')
      .classList.remove('jl-scale-up')
    sliderItem[rms]
      .querySelector('.jl-portfolio-item-info h1')
      .classList.remove('jl-fade-from-left-first')

    sliderItem[rms]
      .querySelector('.jl-portfolio-item-info p')
      .classList.remove('jl-fade-from-left-mid')

    sliderItem[rms]
      .querySelector('.jl-portfolio-item-info .jl-btn')
      .classList.remove('jl-fade-from-left-last')

    sliderItem[rms]
      .querySelector('.jl-portfolio-item-thumb .jl-btn')
      .classList.remove('jl-fade-from-left-last')
  }
  setActiveSlide()
  setActiveNav()
}

// Action

totalSlide.innerHTML = counterFormatter(sliderTotalItems)

anime({
  targets: '.jl-item-active',
  width: 90
})

nextItem.addEventListener('click', function () {
  nextSlideAnim()
  counterAdd()
  changeActive()
})

prevItem.addEventListener('click', function () {
  prevSlideAnim()
  counterRemove()
  changeActive()
})
