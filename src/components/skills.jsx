import "../styles/skills.css";

const programmingLanguages = [
	{
		name: "Java",
		imageSrc: "https://www.manualweb.net/img/logos/java.png",
	},
	{
		name: "HTML",
		imageSrc: "https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png",
	},
	{
		name: "CSS",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
	},
	{
		name: "JavaScript",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png",
	},
	{
		name: "MySQL",
		imageSrc: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png",
	},
	{
		name: "Node.js",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png",
	},
	{
		name: "PostgreSQL",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
	},
	{
		name: "Python",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
	},
	{
		name: "MongoDB",
		imageSrc: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
	},
];

const frameworksLibraries = [
	{
		name: "Electron",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/2048px-Electron_Software_Framework_Logo.svg.png",
	},
	{
		name: "React",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
	},
	{
		name: "Express",
		imageSrc:
			"https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png",
	},
	{
		name: "Mongoose",
		imageSrc: "https://avatars.githubusercontent.com/u/7552965?s=280&v=4",
	},
	{
		name: "Hibernate",
		imageSrc:
			"https://cdn.freebiesupply.com/logos/large/2x/hibernate-logo-png-transparent.png",
	},
	{
		name: "Spring / Springboot",
		imageSrc:
			"https://springframework.guru/wp-content/uploads/2015/02/spring-framework-project-logo.png",
	},
	{
		name: "Odoo",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Odoo_logo_rgb.svg/2560px-Odoo_logo_rgb.svg.png",
	},
	{
		name: "Flowable",
		imageSrc:
			"https://pbs.twimg.com/profile_images/1526924716363198464/e-bq5B38_400x400.jpg",
	},
];

export default function Skills() {
	return (
		<div className="page-skills" id="skills">
			<h1>Skills</h1>
			<div className="skills-container">
				<div className="programming-languages">
					<h2>Programming Languages</h2>
					<div className="columns">
						{programmingLanguages.map((language, index) => (
							// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<div key={index} className="skill">
								<img src={language.imageSrc} alt={language.name} />
								<p>{language.name}</p>
							</div>
						))}
					</div>
				</div>
				<div className="frameworks-libraries">
					<h2>Frameworks / Libraries</h2>
					<div className="columns">
						{frameworksLibraries.map((framework, index) => (
							// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<div key={index} className="skill">
								<img src={framework.imageSrc} alt={framework.name} />
								<p>{framework.name}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
