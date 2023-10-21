import { useRef, useState } from "react";
import "../styles/contact.css"
import credentials from "../credentials.json"
import StarCanvas from "./starcanvas";
import emailjs from 'emailjs-com';

export default function ContactForm() {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		console.log(formRef.current);

		emailjs
			.send(
				credentials.service_ID,
				credentials.template_ID,
				{
					from_name: form.name,
					from_email: form.email,
					message: form.message,
				},
				credentials.public_KEY,
			)
			.then(
				() => {
					setLoading(false);
					alert("Thank you. I will get back to you as soon as possible.");
					setForm({
						name: "",
						email: "",
						message: "",
					});
				},
				(error) => {
					setLoading(false);
					console.error(error);
					alert("Something went wrong. Please try again.");
				},
			)
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<div className="contact-container" id="contact">
			<div className="form-container">
				<p className="title">Get in touch 🌐</p>
				<h3 className="subtitle">Contact me</h3>
				<div className="forms">

					<form
						action="submit"
						ref={formRef}
						onSubmit={(e) => handleSubmit(e)}
						className="form"
					>
						<label htmlFor="name" className="form-label">
							<span className="label-text">Name</span>
							<input
								id="name"
								type="text"
								name="name"
								value={form.name}
								onChange={handleChange}
								className="input"
							/>
						</label>
						<label htmlFor="email" className="form-label">
							<span className="label-text">Email</span>
							<input
								id="email"
								type="email"
								name="email"
								value={form.email}
								onChange={handleChange}
								className="input"
							/>
						</label>
						<label htmlFor="message" className="form-label">
							<span className="label-text">Message</span>
							<textarea
								id="message"
								name="message"
								value={form.message}
								onChange={handleChange}
								className="textarea"
							/>
						</label>
						<button
							type="submit"
							className="submit-button"
						>
							{loading ? "Sending..." : "Send"}
						</button>
					</form>
				</div>
			</div>
			<StarCanvas />
		</div>
	);
}