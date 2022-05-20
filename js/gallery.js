var overlay = document.querySelector('.jl-overlay')
var frameImage = document.querySelector('.jl-gallery-frame-image')
var frameContainer = document.querySelector('.jl-gallery-frame-container')
var galleryImages = document.querySelectorAll('.jl-thumb-box')
var closeGallery = document.querySelectorAll('.jl-toggle-gallery')
var skeletonLoad = document.querySelector('.jl-skeleton-load')

//Variaveis do navegador
var btnNext = document.querySelector('.jl-item-next')
var btnPrev = document.querySelector('.jl-item-prev')

var currentCounter = document.querySelector('.jl-current-slide')
var totalCounter = document.querySelector('.jl-total-slide')
totalCounter.innerHTML = galleryImages.length

var postGallery = document.querySelector('.jl-post-gallery')
var postGalleryHeight = postGallery.clientHeight
postGallery.style.height = postGalleryHeight - 270 + 'px'
//postGallery.style.height = `${postGalleryHeight - 270}px`; // template string da linha acima

//Skeleton Load
const skeletonAnim = function (image) {
  var myImage = new Image()
  myImage.src = image

  myImage.addEventListener('load', function () {
    skeletonLoad.classList.add('jl-fade-out')

    setTimeout(function () {
      skeletonLoad.style.display = 'none'
    }, 2000)
  })
}

//Open Modal
function getImageSrc() {
  for (var i = 0; i < galleryImages.length; i++) {
    galleryImages[i].addEventListener('click', function () {
      var imageSrc = this.querySelector('img').getAttribute('data-src')
      var itemNum = this.querySelector('img').getAttribute('data-item')

      skeletonLoad.style.display = 'flex'

      frameImage.setAttribute('src', imageSrc)
      frameImage.setAttribute('data-index', itemNum)
      overlay.classList.add('jl-is-open')
      frameContainer.classList.add('jl-is-open')
      currentCounter.innerHTML = itemNum < 10 ? `0${itemNum}` : itemNum

      skeletonAnim(imageSrc)
    })
  }
}

getImageSrc()

for (var c = 0; c < closeGallery.length; c++) {
  closeGallery[c].addEventListener('click', function () {
    overlay.classList.remove('jl-is-open')
    frameContainer.classList.remove('jl-is-open')
  })
}

const nextItem = function () {
  //Identificar o item atual do frame
  var currItemNum = frameImage.getAttribute('data-index')

  //Definindo o numero do proximo item
  var nextItemNum = parseInt(currItemNum) + 1

  //Fazendo o loop para identificar qual item faz MATCH com o proximo item
  for (var n = 0; n < galleryImages.length; n++) {
    var item = galleryImages[n].querySelector('img')
    var itemNum = parseInt(item.getAttribute('data-item'))

    if (itemNum === nextItemNum) {
      //Capturar o data-src
      var nextSrc = item.getAttribute('data-src')
      var nextIndex = item.getAttribute('data-item')

      skeletonLoad.style.display = 'flex'

      //Passar o data-src para a tag do frame
      frameImage.setAttribute('src', nextSrc)
      frameImage.setAttribute('data-index', nextIndex)

      currentCounter.innerHTML = itemNum < 10 ? `0${itemNum}` : itemNum

      skeletonAnim(nextSrc)
    }
  }
}
const prevItem = function () {
  //Identificar o item atual do frame
  var currItemNum = frameImage.getAttribute('data-index')

  //Definindo o numero do proximo item
  var prevItemNum = parseInt(currItemNum) - 1

  //Fazendo o loop para identificar qual item faz MATCH com o proximo item
  for (var p = 0; p < galleryImages.length; p++) {
    var item = galleryImages[p].querySelector('img')
    var itemNum = parseInt(item.getAttribute('data-item'))

    if (itemNum === prevItemNum) {
      //Capturar o data-src
      var prevSrc = item.getAttribute('data-src')
      var prevIndex = item.getAttribute('data-item')

      skeletonLoad.style.display = 'flex'

      //Passar o data-src para a tag do frame
      frameImage.setAttribute('src', prevSrc)
      frameImage.setAttribute('data-index', prevIndex)

      currentCounter.innerHTML = itemNum < 10 ? `0${itemNum}` : itemNum

      skeletonAnim(prevSrc)
    }
  }
}

btnNext.addEventListener('click', function () {
  nextItem()
})

btnPrev.addEventListener('click', function () {
  prevItem()
})
