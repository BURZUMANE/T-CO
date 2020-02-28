"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1,
        margin: -350
      },
      1420: {
        items: 3,
        nav: true
      }
    }
  });
  var btnContainer = document.querySelector('.owl-nav');
  btnContainer.classList.add('teachers__slider-btn-container');

  var sliderBtn = _toConsumableArray(btnContainer.querySelectorAll('button'));

  sliderBtn.forEach(function (el) {
    el.classList.add('teachers__slider-control');
  });
  btnContainer.firstChild.innerHTML = "<svg class=\"ctrl-arrow arrow-prev\">\n    <use href=\"../images/svg/symbol-defs.svg#arrow-left\"></use>\n  </svg>";
  btnContainer.lastChild.innerHTML = "<svg class=\"ctrl-arrow ctrl-arrow--active arrow-next\">\n  <use href=\"../images/svg/symbol-defs.svg#arrow-right\"></use>\n</svg>";
});