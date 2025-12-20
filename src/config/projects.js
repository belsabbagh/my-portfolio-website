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
					"SQL is awesome, no problems there, but the interface to the MYSQL server is ugly and cluttered. I'm more of a CLI kind of person.",
			},
			{
				name: "React.js",
				opinion:
					"Tailwind saved it for me. Styling it, or was, hellish. I haven't used it since React 16.",
			},
			{
				name: "Chart.js",
				opinion:
					"I only put it here to make a comment about how badly documented its React wrapper is and how lacking it can be. I don't know the state of it now but that's how it was when I used it.",
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
					"Writing javascript for the server is fun, the tooling around it is very fancy, it's really hard to resist over-engineering that simple API.",
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
	{
		title: "Peer-to-Peer Renewable Energy Trading Simulation",
		description: `The system simulates an automatic trading process among households with renewable energy generation, with the goal optimizing renewable energy utilization and minimizing waste.`,
		stack: [
			{
				name: "Python",
				opinion:
					"At some point, I was considering going with rust to cut all of the performance overhead, but there was too little time to bother with the AI model running in rust.",
			},
			{
				name: "Flask",
				opinion:
					"For my use case, FastAPI would've probably made more sense, but I started out with flask and stuck with it.",
			},
			{
				name: "FastAPI",
				opinion:
					"I loved the simplicity compared to Flask, but it was a hassle to have HTTP streaming given the underlying ASGI server.",
			},
			{
				name: "Go",
				opinion:
					"I recently rewrote the simulation in Go to be able to deploy it on a demo server. Go is such a pleasure to work with.",
			},
			{
				name: "Svelte",
				opinion:
					"It was the coolest thing at the time. The syntax, the compiled architecture, and the ease of use. Svelte 5 is making bold choices with the syntax, but I'm still experimenting with it on this site.",
			},
			{
				name: "TensorFlow",
				opinion:
					"It makes it easy to forget how mathematically heavy deep learning is. Copilot and the sorts makes it very tempting to skip learning the mathematics.",
			},
		],
		href: "https://energy-trading.belsabbagh.me",
	},
];

export default projects;
