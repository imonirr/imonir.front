import {
  autoKey,
} from 'helpers/utils';

export const EXPERIENCES = [
  {
    key: autoKey(),
    duration: '04/2017 - current',
    position: 'CTO',
    company: 'Shikhai Live',
    bullets: [
      'Helped design and develop Shikhai Live platform with a team of two.',
      'Designed database schema to accommodate product features with growth in mind.',
      'Created multi-party Student, Tutor teaching activity(e.g. drawing, chatting) protocol.',
    ].map(point => ({ key: autoKey(), point })),
  },
  {
    key: autoKey(),
    duration: '12/2014 - 03/2017',
    position: 'Sr. Software Analyst',
    company: 'Ipvision Canada',
    bullets: [
      'Developed RingID website with a team of 9.',
      'Mentored team members on Coding Structure, Style and development flow',
      'Ran devops and managed development servers',
    ].map(point => ({ key: autoKey(), point })),
  },
  {
    key: autoKey(),
    duration: '08/2011 - 04/2014',
    position: 'Software Engineer',
    company: 'Nobis Inc.',
    bullets: [
      'Worked with CMS like Joomla, Wordpress and developed custom extensions/plugins as per requirement.',
      'Worked with PHP frameworks like Codeigniter, Laravel.',
      'Developed Mobile application with Titanium Appcelerator.',
    ].map(point => ({ key: autoKey(), point })),
  },
];

