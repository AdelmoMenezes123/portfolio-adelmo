//Animação menu responsivo
$('.btn-menu, .btn-close').on('click', function () {
  $('.menu').slideToggle('slow');
});

$('nav ul li').click(function () {
  $('.menu').hide();
});

//Scroll menu
$('nav a[href^="#"]').on('click', function (e) {
  e.preventDefault();
  var id = $(this).attr('href'),
      targetOffset = $(id).offset().top;

  $('html, body').animate(
      {
          scrollTop: targetOffset,
      },
      1000
  );
});

//Scroll top
$(document).ready(function () {
  var scrollTop = $('.scrollTop');

  $(window).scroll(function () {
      var topPos = $(this).scrollTop();

      //quantidade Y que o botão de scroll vai aparecer
      if (topPos > 500) {
          $(scrollTop).css('opacity', '1');
      } else {
          $(scrollTop).css('opacity', '0');
      }
  });
  //velocidade a animação
  $(scrollTop).click(function () {
      $('html, body').animate(
          {
              scrollTop: 0,
          },
          1300
      );
      return false;
  });
});

//Dark Mode
var darkMode;

if (localStorage.getItem('dark-mode')) {
  darkMode = 'light';
} else {
  darkMode = localStorage.getItem('dark-mode');
}

localStorage.getItem('dark-mode', darkMode);

if (localStorage.getItem('dark-mode') == 'dark') {
  $('body').addClass('dark');
  $('.dark-button').hide();
  $('.light-button').show();
}


$('.dark-button').on('click', function () {
  $('.dark-button').hide();
  $('.light-button').show();
  $('body').addClass('dark');
  localStorage.setItem('dark-mode', 'dark');
});

$('.light-button').on('click', function () {
  $('.light-button').hide();
  $('.dark-button').show();
  $('body').removeClass('dark');
  localStorage.setItem('dark-mode', 'light');
});

//Contato
valor = document.getElementById('campo').value

function animateLinks(){
  this.navLinks.forEach((link, index) => {  
  link.style.animation
  ? (link.style.animation = "")
  : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)
  });
}

ScrollReveal().reveal('.headline', {
  delay: 375,
  duration: 500,
  reset: true
});



