const projeto = document.querySelector('#card')

const dados = [{
    id: 1,
    title: 'Z-FLIX',
    img: 'static/img/projetos/zflix.png',
    info: `Clone da Netflix, consumindo API do site TheMoviedatabase.org, Projeto feito a partir de uma live no youtube ministrada pelo canal: Bonieky Lacerda. `,
    list: {
        react: '/static/img/techs/reactjs.svg',
        css: '/static/img/techs/css.svg',
    },
    link_projeto: 'https://z-flix.vercel.app/',
    github: 'https://github.com/AdelmoMenezes123/z-flix/README.md'

},
{
    id: 2,
    title: 'DesenFlix',
    img: 'static/img/projetos/desenflix.png',
    info: 'Desenflix, desenhos, series, animes e filmes, Projeto pessoal criado para aperfeiçoar meus conhecimentos em tecnologias como:',
    list: {
        html: '/static/img/techs/html.png',
        css: '/static/img/techs/css.svg',
        js: '/static/img/techs/js.svg'
    },
    link_projeto: 'https://desen-flix.vercel.app/',
    github: 'https://github.com/AdelmoMenezes123/DesenFlix/README.md'

},
{
    id: 3,
    title: 'Proffy-rocktseat',
    img: 'static/img/projetos/proffy.png',
    info: 'Semana Next Level Week 2, OmniStack, envento promovido pela Rocketseat. Foi usado tecnologias como:',
    list: {
        html: '/static/img/techs/html.png',
        css: '/static/img/techs/css.svg',
        js: '/static/img/techs/js.svg'
    },
    link_projeto: 'https://proffy-rocktseat.vercel.app/',
    github: 'https://github.com/AdelmoMenezes123/Proffy-Rocktseat/README.md'

},
{
    id: 4,
    title: 'Calculadora VPL',
    img: 'static/img/projetos/calcula-vpl.png',
    info: ' Trabalho de faculdade para a materia - Gest. Financeira - Calculadora VPL',
    list: {
        react: '/static/img/techs/reactjs.svg',
        material: '/static/img/techs/material.svg'
    },
    link_projeto: 'https://trabalho-calculadora-vpl.vercel.app/',
    github: 'https://github.com/AdelmoMenezes123/trabalho-calculadora-vpl/README.md'

},
{
    id: 5,
    title: 'IMC com react',
    img: 'static/img/projetos/imc-react.png',
    info: 'Projeto de estudo, para aperfeicoar meus conhecimentos em react',
    list: {
        react: '/static/img/techs/reactjs.svg',
        sass: '/static/img/techs/sass.svg',
        material: '/static/img/techs/material.svg'
    },
    link_projeto: 'https://imc-three.vercel.app/',
    github: 'https://github.com/AdelmoMenezes123/imc/README.md',

},
{
    id: 6,
    title: 'Pizzaria',
    img: 'static/img/projetos/pizza.png',
    info: ' Projeto feito a partir de uma live no youtube ministrada pelo canal: Bonieky Lacerda.',
    list: {
        html: '/static/img/techs/html.png',
        js: '/static/img/techs/js.svg'
    },
    link_projeto: 'https://pizzaria-eight.vercel.app/',
    github: 'https://github.com/AdelmoMenezes123/pizzaria/README.md'

},
{
    id: 7,
    title: 'Calculadora',
    img: 'static/img/projetos/calculadora.png',
    info: `Calculadora desenvolvida como exemplo
         do Curso Completo de JavaScript na Udemy.com ministrada pela equipe Hcode Treinamento`,
    list: {
        html: '/static/img/techs/html.png',
        js: '/static/img/techs/js.svg'
    },
    link_projeto: 'https://calculadora-plum.vercel.app/',
    github: 'https://github.com/AdelmoMenezes123/calculadora/README.md',

},
{
    id: 8,
    title: 'Templete-clone-Awax',
    img: 'static/img/projetos/templete-awax.png',
    info: 'Projeto de estudo, para aperfeicoar meus conhecimentos em CSS/Flex-box',
    list: {
        html: '/static/img/techs/html.png',
        css: '/static/img/techs/css.svg'
    },
    link_projeto: 'https://templete-awax.vercel.app/',
    github: 'https://github.com/AdelmoMenezes123/templete-awax/README.md'

},
{
    id: 9,
    title: 'Templete-Flexbox',
    img: 'static/img/projetos/templete-flexbox.png',
    info: `Projeto de estudo, para aperfeicoar meus conhecimentos em CSS/Flex-box`,
    list: {
        html: '/static/img/techs/html.png',
        css: '/static/img/techs/css.svg'
    },
    link_projeto: 'https://templete-flex.vercel.app/',
    github: 'https://github.com/AdelmoMenezes123/templete-flex/README.md'

},
]

const view = () => {

    dados.forEach((date, index) => {

        $('#fotoProjeto').attr('src', date.img)
        $('#tituloProjeto').text(date.title);
        $('#descricaoProjeto').text(date.info);
        $('#gitProjeto').attr('href', date.github)
        $('#linkProjeto').attr('href', date.link_projeto)

        $('#linkProjeto').attr('href', date.link_projeto)
        $('#proj').clone().appendTo('#projetos article');
    })
    
        // $('<img>', {
        //     src: a
        // }).appendTo('.tech');
        // console.log(dados.list)
    $('#proj').remove();
}


view();