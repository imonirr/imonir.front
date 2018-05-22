/* eslint-disable import/prefer-default-export */

let keyStarts = 0;
const autoKey = () => {
  keyStarts += 1;
  return keyStarts;
};

export const PROJECTS = [
  {
    key: autoKey(),
    date: new Date('2014-12-04'),
    title: {
      text: 'RingId',
      link: 'https://www.ringid.com',
    },
    skills: ['Angularjs', 'Gruntjs', 'Scripting', 'Devops'],
    image: '/static/images/portfolio/ringid_x300.jpg',
    description: `Social Network website with chat, pages, news and entertainment channels.
    Implemented the Web frontnned as Single page application in Angularjs with a team of frontend developers.
    Built and maintained build tools using grunt and nodejs plugins.
    Worked also as Devops and developed Continuous integration and deployment tools.`,
  },
  {
    key: autoKey(),
    date: new Date('2016-12-10'),
    title: {
      text: 'Shikhai Live',
      link: 'https://www.shikhai.live',
    },
    skills: ['React', 'Webpack', 'Fabricjs', 'Strophe', 'Jitsi'],
    image: '/static/images/portfolio/shikhai_x300.jpg',
    description: 'Live, Interactive Tutoring/Mentoring Web app ',
  },
  {
    key: autoKey(),
    date: new Date('2012-01-19'),
    title: {
      text: 'Crosspoint Dentistry',
      link: 'https://www.crosspointdentistry.com/',
    },
    skills: ['Html', 'Css', 'PSD->HTML', 'JOOMLA'],
    image: '/static/images/portfolio/crosspoint-dentistry_x300.jpg',
    description: 'Full website development using Joomla from Provided PSD.',
  },
  {
    key: autoKey(),
    date: new Date('2012-05-21'),
    title: {
      text: 'Crank Text',
      link: 'http://cranktexts.com/',
    },
    image: '/static/images/portfolio/cranktexts_x300.jpg',
    skills: ['html', 'css', 'jquery'],
    description: `Crank Text submission form and preview templates work.
    used html and css along with jQuery Sortable Plugin`,
  },
  {
    key: autoKey(),
    date: new Date('2012-11-15'),
    title: {
      text: 'Phil Hedries',
      link: 'https://www.philhendrieshow.com/',
    },
    skills: ['Joomla', 'Paypal', 'Amazon Web Services'],
    image: '',
    description: `Phil Hendries Website recreated from Squarespace hosted website.
      10k+ articles with images/mp3s(hosted securely on amazon s3) exported and then imported to new site.
      With tons of comments.
      Paid Membership plans with access to priviledged content.`,
  },
  {
    key: autoKey(),
    date: new Date('2011-10-05'),
    title: {
      text: 'Syteline User Network(SUN)',
      link: 'https://sytelineusernetwork.com/',
    },
    skills: ['Joomla', 'Html', 'CSS', 'CB Extension'],
    image: '',
    description: 'Paid Membership. Custom extensions. Event Management',
  },


  {
    key: autoKey(),
    date: new Date('2011-10-26'),
    title: {
      text: 'IDG Marketing & Graphics',
      link: 'http://www.idgbuffalo.com/',
    },
    skills: ['Joomla', 'Html', 'CSS'],
    image: '/static/images/portfolio/idgbuffalo_x300.jpg',
    description: 'Marketing firm website',
  },
  {
    key: autoKey(),
    date: new Date('2012-08-31'),
    title: {
      text: 'Babysitter Marketplace',
      link: '',
    },
    skills: ['Joomla', 'Html', 'CSS'],
    image: '/static/images/portfolio/babysitter_x300.jpg',
    description: 'Babysitter marketplace with member(babysitters) management',
  },
  {
    key: autoKey(),
    date: new Date('2012-08-03'),
    title: {
      text: 'Buffalo Spine and Sports Institute',
      link: 'https://www.buffspine.com/',
    },
    skills: ['Joomla', 'Html', 'CSS', 'Joomla Template'],
    image: '/static/images/portfolio/buffspine_x300.jpg',
    description: 'Buffspine Institute Website',
  },
  {
    key: autoKey(),
    date: new Date('2012-09-07'),
    title: {
      text: 'Buffalo City Mission',
      link: 'https://www.buffalocitymission.org/',
    },
    skills: ['Joomla', 'Joomla Template', 'Html', 'CSS'],
    image: '/static/images/portfolio/citymission_x300.jpg',
    description: 'Buffalo City Mission Website with Donation capabilities',
  },
  {
    key: autoKey(),
    date: new Date('2012-07-20'),
    title: {
      text: 'Vitamin Blue',
      link: 'http://vitaminblue.com/',
    },
    skills: ['Joomla', 'Html', 'CSS', 'Virtuemart', 'Joomla Template'],
    image: '',
    description: 'Vitaminblue Surf equipments E-Commerce website',
  },
  {
    key: autoKey(),
    date: new Date('2012-03-29'),
    title: {
      text: 'Kensington Assisted Living',
      link: 'https://thekensingtonwhiteplains.com/',
    },
    skills: ['Joomla', 'Html', 'CSS', 'Joomla Template'],
    image: '/static/images/portfolio/kensington_x300.jpg',
    description: '',
  },


].sort((a, b) => -(a.date - b.date));

/* eslint-enable import/prefer-default-export */
