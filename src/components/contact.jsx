import { useRef, useState } from "react";
import "../styles/contact.css"
import "./Stars"
import StarCanvas from "./Stars";

export default function ContactForm() {
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: ''
	});

	const [loading, setLoading] = useState(false);

	const formRef = useRef();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Aquí puedes manejar la lógica para enviar el formulario

		// Cambia el estado de loading si es necesario

		setLoading(true);
		setTimeout(500);

		setLoading(false);
		setForm({
			name: '',
			email: '',
			message: ''
		});
	};

	return (
		<div className="contact-container" id="contact">
			<StarCanvas className="stars">
				<div className="form-container">
					<p className="title">Get in touch</p>
					<h3 className="subtitle">Contact me.</h3>
					<form
						action="submit"
						ref={formRef}
						onSubmit={(e) => handleSubmit(e)}
						className="form"
					>
						<label htmlFor="name" className="form-label">
							<span className="label-text">Your name</span>
							<input
								id="name"
								type="text"
								name="name"
								value={form.name}
								placeholder="What's your name?"
								onChange={handleChange}
								className="input"
							/>
						</label>
						<label htmlFor="email" className="form-label">
							<span className="label-text">Your email</span>
							<input
								id="email"
								type="email"
								name="email"
								value={form.email}
								placeholder="What's your email?"
								onChange={handleChange}
								className="input"
							/>
						</label>
						<label htmlFor="message" className="form-label">
							<span className="label-text">Your message</span>
							<textarea
								id="message"
								name="message"
								value={form.message}
								placeholder="What do you want to say?"
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

			</StarCanvas>
		</div>
	);
}