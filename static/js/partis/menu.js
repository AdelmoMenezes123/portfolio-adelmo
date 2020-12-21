window.onload = function () {
  document.querySelector('#menu i').addEventListener('click', () => {
    if (document.querySelector('nav  ul').style.display == 'flex') {
      document.querySelector('nav ul').style.display = 'none'
    } else {
      document.querySelector('nav ul ').style.display = 'flex'
    }
  })
}

