var Handlebars = require('handlebars')
var data = require('../data/resume.json')

var basicHbs = require('../hbs/basic.hbs')
var contactHbs = require('../hbs/contact.hbs')
var skillsHbs = require('../hbs/skills.hbs')
var advantageHbs = require('../hbs/advantage.hbs')
var workHbs = require('../hbs/work.hbs')
var projectHbs = require('../hbs/project.hbs')

window.onload = function() {
  document.querySelector('.basic').innerHTML = basicHbs(data.basic)
  document.querySelector('.contact').innerHTML = contactHbs(data.contact)
  document.querySelector('.skills').innerHTML = skillsHbs(data.skills)
  document.querySelector('.advantage').innerHTML = advantageHbs(data.advantage)
  document.querySelector('.work').innerHTML = workHbs(data.work)
  document.querySelector('.project').innerHTML = projectHbs(data.project)
 
}