import { useRef, useState } from "react";
import "../styles/contact.css"
import StarCanvas from "./starcanvas";

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