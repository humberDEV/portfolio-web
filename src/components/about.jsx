/* eslint-disable react/no-unescaped-entities */
import "../styles/about.css";

export default function About() {
	return (
		<div className="page-about" id="about">
			<h1>About me</h1>
			<div className="profile-container">
				<div className="profile-picture">
					<img src="tu-imagen-de-perfil.jpg" alt="Mi Foto de Perfil" />
				</div>
				<div className="profile-info">
					<h2>System.out.printn("Hello World")</h2>
					<p>
						Recently graduated in Multiplatform Application Development, I bring
						knowledge in Java, JavaScript, React, and SQL. My experience also
						includes proficiency in Spring. I'm dedicated to both backend and
						frontend development, with a clear goal of becoming a skilled
						full-stack developer. At just 19 years old, I'm eager to learn and
						grow in this industry.
					</p>
				</div>
			</div>
			<div className="profile-details">
				<div className="experience">
					<h3>Experience +4 Mo</h3>
				</div>
				<div className="projects">
					<h3>3 Projects</h3>
				</div>
			</div>
			<div className="profile-actions">
				{/* rome-ignore lint/a11y/useButtonType: <explanation> */}
				<button className="contact-button">Contact Now!</button>
			</div>
		</div>
	);
}
