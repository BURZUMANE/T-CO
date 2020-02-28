'use strict';

var btnContainer = document.querySelector('.owl-nav');
console.log(btnContainer);
btnContainer.classList.add('teachers__slider-btn-container');
btnContainer.querySelectorAll('button').forEach(function (el) {
  el.classList.add('teachers__slider-control');
});