const projects = [
	{
		title: "Hand Geometry Detection",
		description:
			"A script that can be used to recognize a hand shape in an image.",
		stack: [
			{
				name: "Python",
				opinion:
					"My Swiss army knife at this point. Dependable but just as clunky and heavy.",
			},
			{
				name: "OpenCV",
				opinion:
					"Before 4.11, LSP integration was abysmal. It was powerfully useful, but still an undocumented mess to work with. I'm glad those dark days are behind us.",
			},
		],
		href: "https://github.com/belal-elsabbagh/hand-geometry-detection.git",
	},
	{
		title: "Productivity Manager",
		description: `A web app built to keep track of employee utilization on 
    department projects. This was requested by a software department 
    head who wanted a smooth way to track employees' utilization on projects 
    in his department.`,
		stack: [
			{
				name: "Laravel",
				opinion:
					"Best developer experience, as in the development part aside from deployment and production. PHP 7+ has all the quality of life syntax features anyone would ever need.",
			},
			{
				name: "MySQL",
				opinion:
					"A reliable and widely-used relational database management system.",
			},
			{
				name: "React.js",
				opinion: "Great for building dynamic and modern user interfaces.",
			},
			{
				name: "Chart.js",
				opinion:
					"Simple and effective library for adding beautiful charts to web applications.",
			},
		],
		href: "https://github.com/belsabbagh/productivity-manager-web-app.git",
	},
	{
		title: "E-Commerce API",
		description: `An API built to support an e-commerce website. 
    this was my first project with server-side JavaScript 
    and it helped me learn a lot about server-side 
    processes and better methods to structure an API.`,
		stack: [
			{
				name: "Node.js",
				opinion:
					"An efficient runtime environment, perfect for building fast, scalable network applications.",
			},
			{
				name: "Express",
				opinion:
					"A minimal and flexible Node.js web application framework, excellent for APIs.",
			},
			{
				name: "MongoDB",
				opinion:
					"A flexible NoSQL database, well-suited for applications with changing data requirements.",
			},
			{
				name: "Mongoose",
				opinion: "Provides elegant MongoDB object modeling for Node.js.",
			},
			{
				name: "JWT",
				opinion: "The industry standard for secure token-based authentication.",
			},
		],
		href: "https://github.com/belal-elsabbagh/e-commerce-app.git",
	},
	{
		title: "Energy Consumption and Production Forecasting",
		description: `A project that uses time series forecasting to predict 
  energy consumption and production. The project was submitted in partial 
  fulfillment of my data science course as an application of what we learned 
  about forecasting.`,
		stack: [
			{
				name: "Python",
				opinion: "The go-to language for data science and machine learning.",
			},
			{
				name: "Pandas",
				opinion: "Indispensable for data cleaning and analysis.",
			},
			{
				name: "NumPy",
				opinion: "Fundamental package for scientific computing with Python.",
			},
			{
				name: "Matplotlib",
				opinion:
					"Powerful tool for creating static, interactive, and animated visualizations in Python.",
			},
			{
				name: "TensorFlow",
				opinion:
					"A robust end-to-end platform for building and deploying machine learning models.",
			},
		],
		href: "https://github.com/belsabbagh/energy-forecasting.git",
	},
];

export default projects;
