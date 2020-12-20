const projeto = document.querySelector('#card')

const dados = [{
        id: 1,
        title: 'Z-FLIX',
        img: 'static/img/projetos/zflix.png',
        info: `Clone da Netflix, Projeto feito a partir de uma live no youtube ministrada pelo canal: Bonieky Lacerda. `,
        list: '<li>Consumindo API do site TheMoviedatabase.org</li><li>React</li><li>CSS</li>',
        link_projeto: 'https://z-flix.vercel.app/',
        github: 'https://github.com/AdelmoMenezes123/z-flix'

    },
    {
        id: 2,
        title: 'DesenFlix',
        img: 'static/img/projetos/desenflix.png',
        info: 'Desenflix, desenhos, series, animes e filmes, Projeto pessoal criado para aperfeiçoar meus conhecimentos em tecnologias como:',
        list: '<li>HTML</li> <li>CSS</li> <li>JavaScript</li>',
        link_projeto: 'https://desen-flix.vercel.app/',
        github: 'https://github.com/AdelmoMenezes123/DesenFlix'

    },
    {
        id: 3,
        title: 'Proffy-rocktseat',
        img: 'static/img/projetos/proffy.png',
        info: 'Semana Next Level Week 2, OmniStack, envento promovido pela Rocketseat. Foi usado tecnologias como:',
        list: '<li>HTML</li> <li>CSS</li> <li>JavaScript</li>',
        link_projeto: 'https://proffy-rocktseat.vercel.app/',
        github: 'https://github.com/AdelmoMenezes123/Proffy-Rocktseat'

    },
    {
        id: 4,
        title: 'Calculadora VPL',
        img: 'static/img/projetos/calcula-vpl.png',
        info: ' Trabalho de faculdade para a materia - Gest. Financeira - Calculadora VPL',
        list: '<li>ReactJS</li> <li>Material-ui</li>',
        link_projeto: 'https://trabalho-calculadora-vpl.vercel.app/',
        github: 'https://github.com/AdelmoMenezes123/trabalho-calculadora-vpl'

    },
    {
        id: 5,
        title: 'IMC com react',
        img: 'static/img/projetos/imc-react.png',
        info: 'Projeto de estudo, para aperfeicoar meus conhecimentos em react',
        list: '<li>React</li> <li>SASS</li> <li>Material-ui</li>',
        link_projeto: 'https://imc-three.vercel.app/',
        github: 'https://github.com/AdelmoMenezes123/imc',

    },
    {
        id: 6,
        title: 'Pizzaria',
        img: 'static/img/projetos/pizza.png',
        info: ' Projeto feito a partir de uma live no youtube ministrada pelo canal: Bonieky Lacerda.',
        list: '<li>JavaScript</li>',
        link_projeto: 'https://pizzaria-eight.vercel.app/',
        github: 'https://github.com/AdelmoMenezes123/pizzaria'

    },
    {
        id: 7,
        title: 'Calculadora',
        img: 'static/img/projetos/calculadora.png',
        info: `Calculadora desenvolvida como exemplo
         do Curso Completo de JavaScript na Udemy.com ministrada pela equipe Hcode Treinamento`,
        list: '<li>Feito o backend em JavaScript</li>',
        link_projeto: 'https://calculadora-plum.vercel.app/',
        github: 'https://github.com/AdelmoMenezes123/calculadora',

    },
    {
        id: 8,
        title: 'Templete-clone-Awax',
        img: 'static/img/projetos/templete-awax.png',
        info: 'Projeto de estudo, para aperfeicoar meus conhecimentos em CSS/Flex-box',
        list: '<li>HTML</li> <li>CSS / Flex-Box</li>',
        link_projeto: 'https://templete-awax.vercel.app/',
        github: 'https://github.com/AdelmoMenezes123/templete-awax'

    },
    {
        id: 9,
        title: 'Templete-Flexbox',
        img: 'static/img/projetos/templete-flexbox.png',
        info: `Projeto de estudo, para aperfeicoar meus conhecimentos em CSS/Flex-box`,
        list: '<li>HTML</li> <li>CSS / Flex-Box</li>',
        link_projeto: 'https://templete-flex.vercel.app/',
        github: 'https://github.com/AdelmoMenezes123/templete-flex'

    },    
]

const view = () => {

    dados.forEach(date => {

        const card = document.createElement('div')
        const botoes = document.createElement('div')
        const imgbox = document.createElement('div')
        const img = document.createElement('img')
        const content = document.createElement('div')
        const h2 = document.createElement('h2')
        const p = document.createElement('p')
        const ul = document.createElement('ul')
        const linkVer = document.createElement('a')
        const linkGit = document.createElement('a')
        const buttonVer = document.createElement('button')
        const buttonGit = document.createElement('button')


        
    })
}

view();