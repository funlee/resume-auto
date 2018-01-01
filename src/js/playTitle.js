/*
 * @Author: funlee 
 * @Email: i@funlee.cn 
 * @Date: 2017-12-20 22:33:59 
 * @Last Modified time:   2017-12-20 22:33:59 
 * @Description: play title
 */
var data = require('../data/resume.json')
var title = data.title
var hidden
var visibilityChange

function handleVisibilityChange() {
  if (document[hidden]) {
    document.title = "页面出bug了"
  } else {
    document.title = title
  }
}

function playTitle() {
  if (typeof document.hidden !== "undefind") {
    hidden = 'hidden';
    visibilityChange = 'visibilitychange';
  } else if (typeof document.mozHidden !== "undefind") {
    hidden = 'mozhidden';
    visibilityChange = 'mozvisibilitychange';
  } else if (typeof document.webkitHidden !== "undefind") {
    hidden = 'webkithidden';
    visibilityChange = 'webkitvisibilitychange';
  } else if (typeof document.msHidden !== "undefind") {
    hidden = 'mshidden';
    visibilityChange = 'msvisibilitychange';
  }
  document.addEventListener(visibilityChange, handleVisibilityChange, false);
}

module.exports = playTitle
