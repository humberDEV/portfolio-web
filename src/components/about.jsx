import "../styles/about.css";
/* eslint-disable react/no-unescaped-entities */

const about_pic = "./src/assets/about_pic.jpeg";

const profileInfo = {
	title: 'System.out.printn("Hello World")',
	description:
		"Recently graduated in Multiplatform Application Development, I bring knowledge in Java, JavaScript, React, and SQL. My experience also includes proficiency in Spring. I dedicate my time to both backend and frontend development, with the clear goal of becoming a skilled full-stack developer. At just 19 years old, I'm eager to learn and grow in this industry while enjoying my hobbies like playing soccer, chess, hanging out with friends, and spending nights on self-taught programming.",
};

const profileDetails = [
	{ label: "Experience", value: "+4 Mo" },
	{ label: "Projects", value: "3 Projects" },
];

export default function About() {
	return (
		<div className="page-about" id="about">
			<h1>About me</h1>
			<div className="profile-container">
				<div className="profile-picture">
					<img src={about_pic} alt="Mi Foto de Perfil" />
				</div>
				<div className="profile-info">
					<h2>{profileInfo.title}</h2>
					<p>{profileInfo.description}</p>
				</div>
			</div>
			<div className="profile-details">
				{profileDetails.map((detail, index) => (
					// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<div key={index} className={detail.label.toLowerCase()}>
						<p>{detail.value}</p>
					</div>
				))}
			</div>
			<div className="profile-actions">
				{/* rome-ignore lint/a11y/useButtonType: <explanation> */}
				<button className="contact-button">Contact Now!</button>
			</div>
		</div>
	);
}
