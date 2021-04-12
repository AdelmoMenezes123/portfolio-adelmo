$(document).ready(function () {
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


  //Revelar animação
  const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    reset: true
  });

  //Home delay
  sr.reveal('.button', { delay: 100 })

  //Slide
  sr.reveal('.daley-0', { delay: 0 })
  sr.reveal('.daley-1', { delay: 100 })
  sr.reveal('.daley-2', { delay: 200 })
  sr.reveal('.daley-3', { delay: 300 })
  sr.reveal('.daley-4', { delay: 400 })
  sr.reveal('.daley-5', { delay: 500 })

  const rs = ScrollReveal({
    origin: 'left',
    distance: '50px',
    duration: 2000,
    reset: true
  });

  rs.reveal('.daley-l1', { delay: 300 })
  rs.reveal('.daley-l2', { delay: 300 })
  rs.reveal('.daley-l3', { delay: 300 })
  rs.reveal('.daley-l4', { delay: 400 })


})