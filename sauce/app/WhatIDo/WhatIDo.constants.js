/* eslint-disable import/prefer-default-export */

let keyStarts = 0;
const autoKey = () => {
  keyStarts += 1;
  return keyStarts;
};

export const PROJECTS = [
  {
    key: autoKey(),
    title: {
      text: 'Shikhai Live',
      link: 'https://www.shikhai.live',
    },
    image: '',
    skills: [],
    description: '',
  },
  {
    key: autoKey(),
    title: {
      text: 'RingId',
      link: 'https://www.ringid.com',
    },
    skills: [],
    image: '/static/images/portfolio/ringid.png',
    description: '',
  },
  {
    key: autoKey(),
    title: {
      text: 'Crosspoint Dentistry',
      link: 'https://www.crosspointdentistry.com/',
    },
    skills: ['Html', 'Css', 'PSD->HTML', 'JOOMLA'],
    image: '/static/images/portfolio/crosspoint-dentistry.jpg',
    description: 'Full website development using Joomla from Provided PSD.',
  },
  {
    key: autoKey(),
    title: {
      text: 'Crank Text',
      link: 'http://cranktexts.com/',
    },
    image: '/static/images/portfolio/cranktexts.jpg',
    skills: ['html', 'css', 'jquery'],
    description: `Crank Text submission form and preview templates work.
    used html and css along with jQuery Sortable Plugin`,
  },
];

/* eslint-enable import/prefer-default-export */
