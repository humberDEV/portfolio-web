import { useState } from "react";
import Timeline from "./timeline";

import "../styles/timeline.css";

const experienceData = [
	{
		date: "March 2023 - June 2023",
		icon: (
			<div className="timeline-logo-container">
				<img
					className="timeline-logo"
					src="https://pbs.twimg.com/profile_images/1650740618543366144/8QgY-1Xx_400x400.png"
					alt="Mimacom logo"
				/>
			</div>
		),
		title: "Backend Developer with Java and Spring",
		subtitle: "Mimacom",
		description:
			"Developed a recycling project in the backend using Spring and Java. Responsible for maintaining the Kubernetes server for Flowable deployment, working with all its tools, including automated process management and database control. Also used Spring Boot for application deployment.",
	},
	{
		date: "September 2019 - May 2021",
		icon: (
			<div className="timeline-logo-container">
				<img
					className="timeline-logo"
					src="data:image/png;base64,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"
					alt="Pasapalos logo"
				/>
			</div>
		),
		title: "Community Manager and Web Designer",
		subtitle: "Pasapalos Bar y Restaurante",
		description:
			"Online presence manager for a Venezuelan bar for several months. Responsible for managing the Google page and the venture's website, CSS, HTML, and JavaScript.",
	},
];

const educationData = [
	{
		date: "September 2021 - June 2023",
		icon: (
			<div className="timeline-logo-container">
				<img
					className="timeline-logo"
					src="https://pbs.twimg.com/profile_images/846717326196183040/DrclWKVM_400x400.jpg"
					alt="Education logo"
				/>
			</div>
		),
		title: "CFGS Desarrollo de aplicaciones multiplataforma",
		subtitle: "Instituto de Educación Secundaria y FP Abastos",
		description:
			"In my Advanced Vocational Training in Multiplatform Application Development, I've learned essential tech skills like Java, C, Python, web development with HTML, CSS, and JavaScript, and how to manage databases like MySQL and MongoDB. I've also worked with tools like Electron, Bootstrap, and explored systems programming using C.",
	},
	{
		date: "September 2019 - May 2021",
		icon: (
			<div className="timeline-logo-container">
				<img
					className="timeline-logo"
					src="https://pbs.twimg.com/profile_images/846717326196183040/DrclWKVM_400x400.jpg"
					alt="Education logo"
				/>
			</div>
		),
		title: "Bachiller en Ciencias",
		subtitle: "Instituto de Educación Secundaria y FP Abastos",
		description:
			"Basic knowledge of computer system architecture, learning and using programming software, fundamental concepts.",
	},
];

export default function Experience() {
	const [activeTimeline, setActiveTimeline] = useState("Experience");

	const handleTimelineChange = (timeline) => {
		setActiveTimeline(timeline);
	};

	return (
		<div>
			{activeTimeline === "Experience" && (
				<Timeline data={experienceData} title="Experience" />
			)}
			{activeTimeline === "Education" && (
				<Timeline data={educationData} title="Education" />
			)}

			<div className="timeline-buttons-container">
				{/* rome-ignore lint/a11y/useButtonType: <explanation> */}
				<button
					onClick={() => handleTimelineChange("Experience")}
					className={`timeline-button ${
						activeTimeline === "Experience" ? "active" : ""
					}`}
				>
					Experience
				</button>
				{/* rome-ignore lint/a11y/useButtonType: <explanation> */}
				<button
					onClick={() => handleTimelineChange("Education")}
					className={`timeline-button ${
						activeTimeline === "Education" ? "active" : ""
					}`}
				>
					Education
				</button>
			</div>
		</div>
	);
}
