
const dados = [{
    id: 0,
    title: 'Z-FLIX',
    img: 'static/img/projetos/zflix.png',
    info: `Clone da Netflix, consumindo API do site TheMoviedatabase.org, Projeto feito a partir de uma live no youtube ministrada pelo canal: Bonieky Lacerda. `,
    link1: '/static/img/techs/reactjs.svg',
    link2: '/static/img/techs/css.svg',
    link3: '/static/img/techs/sass.svg',
    link_projeto: 'https://z-flix.vercel.app/',
    github: 'https://github.com/AdelmoMenezes123/z-flix/blob/master/README.md'

},
{
    id: 1,
    title: 'DesenFlix',
    img: 'static/img/projetos/desenflix.png',
    info: 'Desenflix, desenhos, series, animes e filmes, Projeto pessoal criado para aperfeiçoar meus conhecimentos em tecnologias como:',
    link1: '/static/img/techs/html.svg',
    link2: '/static/img/techs/css.svg',
    link3: '/static/img/techs/js.svg',
    link_projeto: 'https://desen-flix.vercel.app/',
    github: 'https://github.com/AdelmoMenezes123/DesenFlix/blob/master/README.md'

},
{
    id: 2,
    title: 'Proffy-rocktseat',
    img: 'static/img/projetos/proffy.png',
    info: 'Semana Next Level Week 2, OmniStack, envento promovido pela Rocketseat. Foi usado tecnologias como:',
    link1: '/static/img/techs/html.svg',
    link2: '/static/img/techs/css.svg',
    link3: '/static/img/techs/js.svg',
    link_projeto: 'https://proffy-rocktseat.vercel.app/',
    github: 'https://github.com/AdelmoMenezes123/Proffy-Rocktseat/blob/master/README.md'
},
{
    id: 3,
    title: 'Calculadora VPL',
    img: 'static/img/projetos/calcula-vpl.png',
    info: ' Trabalho de faculdade para a materia - Gest. Financeira - Calculadora VPL',
    link1: '/static/img/techs/reactjs.svg',
    link2: '/static/img/techs/material.svg',
    link3: '/static/img/techs/css.svg',
    link_projeto: 'https://trabalho-calculadora-vpl.vercel.app/',
    github: 'https://github.com/AdelmoMenezes123/trabalho-calculadora-vpl/blob/master/README.md'

},
{
    id: 4,
    title: 'IMC com react',
    img: 'static/img/projetos/imc-react.png',
    info: 'Projeto de estudo, para aperfeicoar meus conhecimentos em react',
    link1: '/static/img/techs/reactjs.svg',
    link2: '/static/img/techs/material.svg',
    link3: '/static/img/techs/sass.svg',
    link_projeto: 'https://imc-three.vercel.app/',
    github: 'https://github.com/AdelmoMenezes123/imc/blob/master/README.md',

},
{
    id: 5,
    title: 'Pizzaria',
    img: 'static/img/projetos/pizza.png',
    info: ' Projeto feito a partir de uma live no youtube ministrada pelo canal: Bonieky Lacerda.',
    link1: '/static/img/techs/html.svg',
    link2: '/static/img/techs/css.svg',
    link3: '/static/img/techs/js.svg',
    link_projeto: 'https://pizzaria-eight.vercel.app/',
    github: 'https://github.com/AdelmoMenezes123/pizzaria/blob/master/README.md'

},
{
    id: 6,
    title: 'Calculadora',
    img: 'static/img/projetos/calculadora.png',
    info: `Calculadora desenvolvida como exemplo
             do Curso Completo de JavaScript na Udemy.com ministrada pela equipe Hcode Treinamento`,
    link1: '/static/img/techs/html.svg',
    link2: '/static/img/techs/css.svg',
    link3: '/static/img/techs/js.svg',
    link_projeto: 'https://calculadora-plum.vercel.app/',
    github: 'https://github.com/AdelmoMenezes123/calculadora/blob/master/README.md',

},
{
    id: 7,
    title: 'Templete-clone-Awax',
    img: 'static/img/projetos/templete-awax.png',
    info: 'Projeto de estudo, para aperfeicoar meus conhecimentos em CSS/Flex-box',
    link1: '/static/img/techs/html.svg',
    link2: '/static/img/techs/css.svg',
    link3: '/static/img/techs/js.svg',
    link_projeto: 'https://templete-awax.vercel.app/',
    github: 'https://github.com/AdelmoMenezes123/templete-awax/blob/master/README.md'

},
{
    id: 8,
    title: 'Templete-Flexbox',
    img: 'static/img/projetos/templete-flexbox.png',
    info: `Projeto de estudo, para aperfeicoar meus conhecimentos em CSS/Flex-box`,
    link1: '/static/img/techs/html.svg',
    link2: '/static/img/techs/css.svg',
    link3: '/static/img/techs/js.svg',
    link_projeto: 'https://templete-flex.vercel.app/',
    github: 'https://github.com/AdelmoMenezes123/templete-flex/blob/master/README.md'

},
]

const tech = document.querySelector('.tech')
const img1 = document.createElement('img')
const img2 = document.createElement('img')
const img3 = document.createElement('img')

const view = () => {
    dados.map((date, index) => {

        $('#fotoProjeto').attr('src', date.img)
        $('#tituloProjeto').text(date.title);
        $('#descricaoProjeto').text(date.info);
        $('#gitProjeto').attr('href', date.github)
        $('#linkProjeto').attr('href', date.link_projeto)

        img1.src = date.link1
        img2.src = date.link2
        img3.src = date.link3
        tech.appendChild(img1)
        tech.appendChild(img2)
        tech.appendChild(img3)
       
        $('#proj').clone().appendTo('#projetos article');
    })
    $('#proj').remove();
}


view();