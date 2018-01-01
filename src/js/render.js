/*
 * @Author: funlee 
 * @Email: i@funlee.cn 
 * @Date: 2017-12-20 00:10:16 
 * @Last Modified time:   2017-12-20 00:10:16 
 * @Description: 组装模版，渲染页面
 */
var Handlebars = require('handlebars')
var data = require('../data/resume.json')

var basicHbs = require('../hbs/basic.hbs')
var contactHbs = require('../hbs/contact.hbs')
// var skillsHbs = require('../hbs/skills.hbs')
var advantageHbs = require('../hbs/advantage.hbs')
var workHbs = require('../hbs/work.hbs')
var projectHbs = require('../hbs/project.hbs')

var render = function() {
  document.querySelector('.basic').innerHTML = basicHbs(data.basic)
  document.querySelector('.contact').innerHTML = contactHbs(data.contact)
  // document.querySelector('.skills').innerHTML = skillsHbs(data.skills)
  document.querySelector('.advantage').innerHTML = advantageHbs(data.advantage)
  document.querySelector('.work').innerHTML = workHbs(data.work)
  document.querySelector('.project').innerHTML = projectHbs(data.project)
  
}

module.exports = render
