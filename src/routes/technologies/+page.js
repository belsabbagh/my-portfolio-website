const technologies = [
  {
    name: 'C++',
    logo: 'https://cdn.svgporn.com/logos/c-plusplus.svg',
    note: 'Working with classes in C++ automatically makes it extra complex.',
    categories: ['language'],
  },
  {
    name: 'Java',
    logo: 'https://cdn.svgporn.com/logos/java.svg',
    note: 'I first learnt OOP with Java. Not having to deal with pointers was an upgrade.',
    categories: ['language'],
  },
  {
    name: 'JavaScript',
    logo: 'https://cdn.svgporn.com/logos/javascript.svg',
    note: 'Only a skilled developer can write clean JavaScript code, assuming they understand its quirks.',
    categories: ['language'],
  },
  {
    name: 'Python',
    logo: 'https://cdn.svgporn.com/logos/python.svg',
    note: "We have our differences, but it's still my digital Swiss army knife.",
    categories: ['language'],
  },
  {
    name: 'PHP',
    logo: 'https://cdn.svgporn.com/logos/php.svg',
    note: 'Hate on it all you want, but it got better ever since PHP 7.',
    categories: ['language'],
  },
  {
    name: 'Dart',
    logo: 'https://cdn.svgporn.com/logos/dart.svg',
    note: 'Neither I nor anyone I know has ever used Dart outside of Flutter.',
    categories: ['language'],
  },
  {
    name: 'Rust',
    logo: 'https://cdn.svgporn.com/logos/rust.svg',
    note: "I've only played around with it, but I wish I could use it for real.",
    categories: ['language'],
  },
  {
    name: 'React',
    logo: 'https://cdn.svgporn.com/logos/react.svg',
    note: "It's not obsolete yet.",
    categories: ['framework', 'JavaScript'],
  },
  {
    name: 'Svelte',
    logo: 'https://cdn.svgporn.com/logos/svelte-icon.svg',
    note: 'Now this is my front-end Swiss army knife.',
    categories: ['framework', 'JavaScript'],
  },
  // --- New Entries ---
  {
    name: 'TypeScript',
    logo: 'https://cdn.svgporn.com/logos/typescript-icon.svg',
    note: '',
    categories: ['language'],
  },
  {
    name: 'Go',
    logo: 'https://cdn.svgporn.com/logos/go.svg',
    note: '',
    categories: ['language'],
  },
  {
    name: 'C',
    logo: 'https://cdn.svgporn.com/logos/c.svg',
    note: '',
    categories: ['language'],
  },
  {
    name: 'Pandas',
    logo: 'https://cdn.svgporn.com/logos/pandas-icon.svg',
    note: '',
    categories: ['library', 'Python'],
  },
  {
    name: 'TensorFlow',
    logo: 'https://cdn.svgporn.com/logos/tensorflow.svg',
    note: '',
    categories: ['library', 'Machine Learning'],
  },
  {
    name: 'PyTorch',
    logo: 'https://cdn.svgporn.com/logos/pytorch-icon.svg',
    note: '',
    categories: ['library', 'Machine Learning'],
  },
  {
    name: 'Numpy',
    logo: 'https://cdn.svgporn.com/logos/numpy.svg',
    note: '',
    categories: ['library', 'Python'],
  },
  {
    name: 'Scipy',
    logo: 'https://cdn.svgporn.com/logos/scipy-icon.svg',
    note: '',
    categories: ['library', 'Python'],
  },
  {
    name: 'Matplotlib',
    logo: 'https://cdn.svgporn.com/logos/matplotlib-icon.svg',
    note: '',
    categories: ['library', 'Python'],
  },
  {
    name: 'Ollama',
    logo: 'https://cdn.svgporn.com/logos/ollama.svg',
    note: '',
    categories: ['tool', 'AI'],
  },
  {
    name: 'n8n',
    logo: 'https://cdn.svgporn.com/logos/n8n-icon.svg',
    note: '',
    categories: ['tool', 'Automation'],
  },
  {
    name: 'Vue',
    logo: 'https://cdn.svgporn.com/logos/vue.svg',
    note: '',
    categories: ['framework', 'JavaScript'],
  },
  {
    name: 'Laravel',
    logo: 'https://cdn.svgporn.com/logos/laravel.svg',
    note: '',
    categories: ['framework', 'PHP'],
  },
  {
    name: 'Express',
    logo: 'https://cdn.svgporn.com/logos/express.svg',
    note: '',
    categories: ['framework', 'JavaScript'],
  },
  {
    name: 'FastAPI',
    logo: 'https://cdn.svgporn.com/logos/fastapi-icon.svg',
    note: '',
    categories: ['framework', 'Python'],
  },
  {
    name: 'Django',
    logo: 'https://cdn.svgporn.com/logos/django-icon.svg',
    note: '',
    categories: ['framework', 'Python'],
  },
  {
    name: 'Spring Boot',
    logo: 'https://cdn.svgporn.com/logos/spring-icon.svg',
    note: '',
    categories: ['framework', 'Java'],
  },
  {
    name: 'Flutter',
    logo: 'https://cdn.svgporn.com/logos/flutter.svg',
    note: '',
    categories: ['framework', 'Mobile'],
  },
  {
    name: 'Next.js',
    logo: 'https://cdn.svgporn.com/logos/nextjs-icon.svg',
    note: '',
    categories: ['framework', 'JavaScript'],
  },
  {
    name: 'UNIX',
    logo: 'https://cdn.svgporn.com/logos/bash-icon.svg',
    note: '',
    categories: ['OS'],
  },
  {
    name: 'Docker',
    logo: 'https://cdn.svgporn.com/logos/docker-icon.svg',
    note: '',
    categories: ['tool', 'DevOps'],
  },
  {
    name: 'Apache',
    logo: 'https://cdn.svgporn.com/logos/apache.svg',
    note: '',
    categories: ['tool', 'Server'],
  },
  {
    name: 'NGINX',
    logo: 'https://cdn.svgporn.com/logos/nginx.svg',
    note: '',
    categories: ['tool', 'Server'],
  },
];

export const load = () => {
  return {
    technologies,
  };
};
