(function() {
  var sl_settings = function() {
    var el = document.querySelector('#sl-settings');

    if (!el) return;

    var sl = new Swiper(el, {
      pagination: {
        el: '.sl-settings-dots',
        type: 'bullets',
        bulletActiveClass: 'is-active',
        bulletClass: 'bullet',
        clickable: true
      }
    });
  };

  var sl_desk = function() {
    var el = document.querySelector('#sl-desk');

    if (!el) return;

    var dots = el.querySelectorAll('.js-dot');

    var dotsClear = function(dots) {
      [].forEach.call(dots, function(one) {
        one.classList.remove('is-active');
      });
    };

    var sl = new Swiper(el, {
      navigation: {
        disabledClass: 'is-disabled',
        nextEl: '.js-next',
        prevEl: '.js-prev',
      },
      on: {
        init: function() {
          dotsClear(dots);
          dots[this.realIndex].classList.add('is-active');
        },
        slideChangeTransitionStart: function() {
          dotsClear(dots);
          dots[this.realIndex].classList.add('is-active');
        }
      }
    });

    [].forEach.call(dots, function(one) {
      one.addEventListener('click', function() {
        var idx = one.dataset.index;
        dotsClear(dots);
        dots[idx].classList.add('is-active');
        sl.slideTo(idx);
      });
    })
  };

  var menu = function() {
    var menu = document.querySelector('#menu');

    if (!menu) return;

    var btn = document.querySelector('#menu-btn');
    var header = document.querySelector('#header');

    btn.addEventListener('click', function() {
      menu.classList.toggle('is-active');
      header.classList.toggle('is-active');
      document.documentElement.classList.toggle('is-no-scroll');
    });

    menu.addEventListener('click', function(e) {
      if (!e.target.closest('a')) return;

      menu.classList.toggle('is-active');
      header.classList.toggle('is-active');
      document.documentElement.classList.toggle('is-no-scroll');
    });
  }

  menu();
  sl_settings();
  sl_desk();
})();
