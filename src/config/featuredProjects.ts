interface FeaturedProject {
  title: string;
  description: string;
  tags: string[];
  href: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    title: 'Hand Geometry Detection',
    description:
      'A script that can be used to recognize a hand shape in an image.',
    tags: ['Python', 'OpenCV'],
    href: 'https://github.com/belal-elsabbagh/hand-geometry-detection.git',
  },
  {
    title: 'Productivity Manager',
    description:
      'A web app built to keep track of employee utilization on department projects.',
    tags: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'React.js', 'Chart.js'],
    href: 'https://github.com/belal-elsabbagh/swe-project.git',
  },
];

export default featuredProjects;
