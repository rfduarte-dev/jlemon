console.log('managet-it')

var galleryItem = document.querySelectorAll('.jl-post-gallery img')
for (var i = 0; i < galleryItem.length; i++) {
  new Waypoint.Inview({
    element: galleryItem[i],
    entered: function () {
      var fullImag = this.element.getAttribute('data-src')
      this.element.setAttribute('src', fullImag)
    },
    offset: 0
  })
}
