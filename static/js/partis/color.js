const a = document.querySelectorAll("nav > ul> li > a");

const preto = function () {
  document.querySelector('#dark').addEventListener('click', () => {
    document.querySelector('#dark').style.display = "none"
    document.querySelector('#light').style.display = "block"
    document.querySelector('#light').style.color = "#fafafa"
    document.querySelector('#light').style.background = "#383838"
    document.querySelector("body").style.background = "#383838"
    document.querySelector("body").style.color = "#fafafa"
    document.querySelector(".logo h2").style.color = "#fafafa"
    document.querySelector('header').style.background = "#232323"
    a.forEach(b => b.style.color = "#fafafa");


  })
}
preto()

const branco = function () {
  document.querySelector('#light').addEventListener('click', () => {
    document.querySelector('#light').style.display = "none"
    document.querySelector('#dark').style.display = "block"
    document.querySelector("body").style.background = "#fafafa"
    document.querySelector("body").style.color = "#383838"
    document.querySelector(".logo h2").style.color = "#383838"
    document.querySelector('header').style.background = "#fafafa"
    a.forEach(b => b.style.color = "#383838");

  })
}

branco()