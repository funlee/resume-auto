/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Description: init-entry with handlebars template rendering
 */
import "./css/loading.less";
import "./css/grid.less";
import "./css/resume.less";

require("font-awesome-webpack");

const playTitle = require("./js/playTitle.js");

// 引入 handlebars 模板
const basicTpl = require("./hbs/basic.hbs");
const contactTpl = require("./hbs/contact.hbs");
const skillsTpl = require("./hbs/skills.hbs");
const advantageTpl = require("./hbs/advantage.hbs");
const workTpl = require("./hbs/work.hbs");
const projectTpl = require("./hbs/project.hbs");

// 引入简历数据
const resumeData = require("./data/resume.json");

window.onload = function () {
  playTitle();

  // 渲染各模块
  document.getElementById("basic").innerHTML = basicTpl(resumeData.basic);
  document.getElementById("contact").innerHTML = contactTpl(resumeData.contact);
  document.getElementById("skills").innerHTML = skillsTpl(resumeData.skills);
  document.getElementById("advantage").innerHTML = advantageTpl(resumeData.advantage);
  document.getElementById("work").innerHTML = workTpl(resumeData.work);
  document.getElementById("project").innerHTML = projectTpl(resumeData.project);

  // 隐藏 loading
  var loading = document.querySelector(".loading");
  setTimeout(function () {
    loading.style.opacity = 0;
    loading.style.display = "none";
  }, 1000);
};
