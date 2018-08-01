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
      'Helped architect and develop Shikhai Live platform with a team of two.',
      'Designed Database to accomodate product features with growth in mind.',
      'Planned and implemented Multi party Student, Tutor teaching activity(e.g. writing, chatting) protocol.',
      'UX principles followed in creation of content pages and on Interactive whiteboard.',
    ].map(point => ({ key: autoKey(), point })),
  },
  {
    key: autoKey(),
    duration: '12/2014 - 03/2017',
    position: 'Sr. Software Analyst',
    company: 'Ipvision Canada',
    bullets: [
      'Designed and developed RingID website with a team of 9.',
      'Helped manage team members with  Coding Structure, Style and Code reviews.',
      'Created Build and Deployment tools and policies for smoother delivery.',
      'Managed devops duties and managed servers for development and production.',
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

