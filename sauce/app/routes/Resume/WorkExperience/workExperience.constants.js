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
      'Built ReactJS based frontend for listing Tuitions and User Dashboard for tutor and student.',
      'HTML5 Canvas and Fabric.js library was used to develop collaborative whiteboard for writing and communicating among students, teachers.',
    ].map(point => ({ key: autoKey(), point })),
  },
  {
    key: autoKey(),
    duration: '12/2014 - 03/2017',
    position: 'Sr. Software Analyst',
    company: 'Ipvision Canada',
    bullets: [
      'Helped architecture and develop AngularJS based frontend for Social Network application with a team of 6.',
      'Optimized AngularJS performance bottleneck with controlled Digest Cycle.',
      'Created build and deployment tools with python, Bash, Gulp etc.',
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

