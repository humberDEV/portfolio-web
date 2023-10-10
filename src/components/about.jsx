/* eslint-disable react/no-unescaped-entities */
import "../styles/about.css";

const about_pic = "./src/assets/about_pic.jpeg";

export default function About() {
	return (
		<div className="page-about" id="about">
			<h1>About me</h1>
			<div className="profile-container">
				<div className="profile-picture">
					<img src={about_pic} alt="Mi Foto de Perfil" />
				</div>
				<div className="profile-info">
					<h2>System.out.printn("Hello World")</h2>
					<p>
						Recently graduated in Multiplatform Application Development, I bring
						knowledge in Java, JavaScript, React, and SQL. My experience also
						includes proficiency in Spring. I dedicate my time to both backend
						and frontend development, with the clear goal of becoming a skilled
						full-stack developer. At just 19 years old, I'm eager to learn and
						grow in this industry while enjoying my hobbies like playing soccer,
						chess, hanging out with friends, and spending nights on self-taught
						programming.
					</p>
				</div>
			</div>
			<div className="profile-details">
				<div className="experience">
					<p>Experience +4 Mo</p>
				</div>
				<div className="projects">
					<p>3 Projects</p>
				</div>
			</div>
			<div className="profile-actions">
				{/* rome-ignore lint/a11y/useButtonType: <explanation> */}
				<button className="contact-button">Contact Now!</button>
			</div>
		</div>
	);
}
