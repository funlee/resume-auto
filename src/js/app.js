var render = require('./render.js')

window.onload = function() {
  render()
  var loading = document.querySelector('.loading')
  loading.style.opacity = 0
  loading.style.display = 'none'
 
}