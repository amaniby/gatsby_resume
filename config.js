const REPOSITORY = 'gatsby-resume-template';
const FIRST_NAME = 'Amani';
const LAST_NAME = 'Ben yahia';
const GITHUB_USERNAME = 'amaniby';
const TWITTER_USERNAME = 'awesome-developer';
const LINKEDIN_USERNAME = 'awesome-developer';
const PHONE_NUMBER = '+216-23523996';
const ADDRESS = 'Wardia tunis';
const EMAIL = 'amani.benyahia@etudiant-isi.utm.tn';
const FOOTER_URL = 'https://www.cto.ai';

const BIO = `
Hello! I'm Amani Ben Yahia, a computer engineering student at Higher Institute of Computer Science (ISI Ariana). 
I am currently looking for end of studies internship starting from February 2021     `;

const EXPERIENCE_LIST = [
  {
    title: 'AI Developer',
    company: 'Scheidt & Bachmann Maghreb',
    description: `
      I developed application to detect and recognize tunisian licence plates.`,
    period: 'July 2020 - September 2020',
  },
  {
    title: 'Fullstack developer',
    company: 'Sagemcom',
    description: `
      I integrate the Fullstack team responsible for developing and maintaining the application for tracing the SFC inside SAPME .`,
    period: 'July 2019 - August 2019',
  },
  {
    title: 'Java developer',
    company: 'Sagemcom',
    description: `
	Development and maintenance of application to test webservices SOAP used by SAPME`,
    period: 'February 2018 - May 2018',
  },
];

const EDUCATION_LIST = [
  {
    institution: 'Higher Institute of computer science ISI ariana',
    qualification: 'Engineering',
    description: `
      Software engineering`,
    period: '2021',
  },
  {
    institution: 'ISTIC borj cedria',
    qualification: 'Computer science & telecommunication',
    description: `
     `,
    period: '2018',
  },
];

const LANGUAGES_AND_TOOLS = [
  { name: 'HTML5', iconClass: 'fa-html5' },
  { name: 'CSS3', iconClass: 'fa-css3-alt' },
  { name: 'Javascript', iconClass: 'fa-js-square' },
  { name: 'Angular', iconClass: 'fa-angular' },
  { name: 'Java',  },
  { name: 'PYTHON', iconClass: 'fa-python' },

];

const SKILLS = ['Travel', 'Chat'];

const PORTFOLIO = {
  introParagraphs: [
    ``,
  ],
  items: [
    {
      name: 'First portfolio item',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      url: 'https://github.com/user/repo',
    },
    {
      name: 'Second portoflio item name',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      url: 'https://github.com/user/repo',
    },
  ],
};

const CERTIFICATIONS = [
  'Certification 1',
  'Certification 2',
  'Certification 3',
  'Award 1',
  'Award 2',
];

module.exports = {
  siteTitle: `${FIRST_NAME} ${LAST_NAME} Resume`, // <title>
  manifestName: `${FIRST_NAME} ${LAST_NAME} Resume`,
  manifestShortName: 'Resume', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/images/cto-ai.png',
  pathPrefix: `/${REPOSITORY}`, // This path is subpath of your hosting https://domain/portfolio
  firstName: FIRST_NAME,
  lastName: LAST_NAME,
  // bio
  bio: BIO,
  // experience
  experienceList: EXPERIENCE_LIST,
  // education
  educationList: EDUCATION_LIST,
  // languages & tools
  langTools: LANGUAGES_AND_TOOLS,
  // skills
  skills: SKILLS,
  // certifications
  certifications: CERTIFICATIONS,
  // portfolio
  portfolio: PORTFOLIO,
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: `https://github.com/amaniby`,
    },
    {
      icon: 'fa-linkedin-in',
      name: 'Linkedin',
      url: `https://www.linkedin.com/in/amani-ben-yahia-123104150/`,
    },
    {
      icon: 'fa-twitter',
      name: 'Twitter',
      url: `https://twitter.com/${TWITTER_USERNAME}`,
    },
  ],
  email: EMAIL,
  phone: PHONE_NUMBER,
  address: ADDRESS,
  footerUrl: FOOTER_URL,
};
