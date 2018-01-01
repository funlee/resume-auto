/*
 * @Author: funlee 
 * @Email: i@funlee.cn 
 * @Date: 2017-12-20 22:43:58 
 * @Last Modified time:   2017-12-20 22:43:58 
 * @Description: init
 */
var render = require('./render.js')
var playTitle = require('./playTitle.js')

window.onload = function() {
  render()
  playTitle()
  var loading = document.querySelector('.loading')
  setTimeout(function(){
    loading.style.opacity = 0
    loading.style.display = 'none'
  }, 1000)
}