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

  let btnContainer = document.querySelector('.owl-nav');
  btnContainer.classList.add('teachers__slider-btn-container');

  let sliderBtn = [...btnContainer.querySelectorAll('button')];
  sliderBtn.forEach(el => {
    el.classList.add('teachers__slider-control');
});

  btnContainer.firstChild.innerHTML = `<svg class="ctrl-arrow arrow-prev">
    <use href="../images/svg/symbol-defs.svg#arrow-left"></use>
  </svg>`;
  btnContainer.lastChild.innerHTML = `<svg class="ctrl-arrow ctrl-arrow--active arrow-next">
  <use href="../images/svg/symbol-defs.svg#arrow-right"></use>
</svg>`
  
});
