export const information = {
  about: {
    name: 'Justen Morgan',
    tags: ['Programmer', 'Coder', 'Computer Scientist', 'Web Developer', 'Front-End Developer', 'Software Developer', 'Gamer', 'Guitarist', 'Bassist', 'Ukeleleist', 'Musician', 'Music Lover', 'League of Legends Champion', 'Playstation Classics Fan', 'Rock Band Rocker', 'Guitar Hero God', 'Osu! Player', 'Burger Enthusiast', 'Couch Potato', 'Foodie'],
    links: {
      email: 'justenamorgan@gmail.com',
      github: 'https://github.com/Boshes',
      linkedin: 'https://www.linkedin.com/in/justenmorgan'
    },
    details:`
      <h2 class="title">Hi, I'm Justen Morgan</h2>
      <h2 class="sub-text title is-4">Full-Stack Developer geared more towards Front-End Development</h2>
      <hr class="center-block">
      <h3 class="about-paragraph">Passionate about web technologies and JavaScript frameworks</h3>
      <h3 class="about-paragraph">Received a First Class Honor from the University of the West Indies</h3>
      <h3 class="about-paragraph">Avid video game player, guitarist, music lover and foodie</h3>
    `,
  },
  work: [
    {
      employer: 'Ample Organics',
      link: 'https://ampleorganics.com',
      position: 'Full-Stack Developer',
      details: 'Software Development on Seed-to-Sale software for medical cannabis',
      icon: 'seedling',
      languages: [
        {
          image: 'backbone.png',
          link: 'http://backbonejs.org',
          text: 'BackboneJS'
        },
        {
          image: 'vue.png',
          link: 'https://vuejs.org',
          text: 'VueJS'
        },
        {
          image: 'ruby.png',
          link: 'https://www.ruby-lang.org/en/',
          text: 'Ruby'
        }
      ]
    },
    {
      employer: 'Accuenergy',
      link: 'https://accuenergy.com',
      position: 'Web Developer',
      details: 'Web interface creation for electrical power devices',
      icon: 'microchip',
      languages: [
        {
          image: 'vue.png',
          link: 'https://vuejs.org',
          text: 'VueJS'
        },
        {
          image: 'adonis.png',
          link: 'http://www.adonisjs.com',
          text: 'AdonisJS'
        },
        {
          image: 'node.jpg',
          link: 'https://nodejs.org/en',
          text: 'NodeJS'
        }
      ]
    },
    {
      employer: 'EPIC Technologies',
      link: 'https://etechja.com/',
      position: 'Software Developer',
      details: 'Analytical graph creation for HR insights',
      icon: 'chart-line',
      languages: [
        {
          image: 'angular.jpg',
          link: 'https://angularjs.org',
          text: 'AngularJS'
        },
        {
          image: 'php.png',
          link: 'http://php.net',
          text: 'PHP'
        },
        {
          image: 'mysql.png',
          link: 'https://www.mysql.com',
          text: 'MySQL'
        }
      ]
    }
  ],
  projects: {
    githubProfile: 'Boshes',
    gitHubUserPath: 'https://api.github.com/users',
    gitHubRepositoryPath: 'https://api.github.com/repos',
    token: 'application/vnd.github.mercy-preview+json',
    featured: ['pokemon-guess', 'Trax', 'FlappyBird', 'Rails-RedditClone']
  }
}