import githubSvg from '@/assets/github-mark.svg';

interface Contact {
  name: string;
  link: string;
  svg?: string;
}

const github: Contact = {
  svg: githubSvg,
  name: 'GitHub',
  link: 'https://github.com/belal-elsabbagh',
};

const linkedin: Contact = {
  name: 'LinkedIn',
  link: 'https://www.linkedin.com/in/belal-elsabbagh/',
};

const email: Contact = {
  name: 'Email',
  link: 'mailto:belsabbagh@gmail.com',
};

export default { github, linkedin, email };
