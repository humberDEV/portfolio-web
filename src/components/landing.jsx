import { useEffect } from "react";
import "../styles/landing.css";
import ScrollButton from "./scrollbutton";

const imItems = ["Fullstack.", "Front-end.", "Back-end."];

export default function Landing() {
	const downloadPdf = () => {
		const pdfUrl = "./src/assets/HumbertoGarcia_CV.pdf";

		const link = document.createElement("a");
		link.href = pdfUrl;
		link.download = "HumbertoGarcia_CV.pdf";

		document.body.appendChild(link);
		link.click();

		document.body.removeChild(link);
	};

	useEffect(() => {
		const targetElement = document.getElementById("im-text");
		consoleText(imItems, targetElement);
	}, []);

	return (
		<section id="landing" className="landing-container">
			<div className="text-container">
				<h1>Humberto García 🖐</h1>
				<h2>
					Im a <span id="im-text" className="im-text" />
					<span className="console">&#95;</span> developer
				</h2>
				<p>
					Hi, Im Humberto García Arellano. A passionate Junior Developer from
					Valencia, Spain 📍
				</p>

				<div className="media-buttons">
					{/* rome-ignore lint/a11y/useButtonType: <explanation> */}
					<button
						className="download-button"
						onClick={() => {
							downloadPdf();
						}}
					>
						{" "}
						Download CV
					</button>

					<a href="https://www.instagram.com/humber.gs/" aria-label="Instagram">
						<i className="fa-brands fa-square-instagram" />
					</a>
					<a
						href="https://www.linkedin.com/in/humberto-garcia-arellano-8138a327a/"
						aria-label="LinkedIn"
					>
						<i className="fa-brands fa-linkedin" />
					</a>
					<a href="https://github.com/humberDEV" aria-label="GitHub">
						<i className="fa-brands fa-square-github" />
					</a>
				</div>
			</div>
			<div className="image-container">
				<img src="/../../profile_pic.jpeg" alt="Foto de perfil" />
			</div>
			<ScrollButton />
		</section>
	);
}

function consoleText(words, target) {
	let letterCount = 0;
	let wordIndex = 0;
	let x = 1;
	let waiting = false;

	const interval = setInterval(function () {
		if (letterCount === 0 && waiting === false) {
			waiting = true;
			target.innerHTML = "";
			window.setTimeout(function () {
				wordIndex = (wordIndex + 1) % words.length;
				x = 1;
				letterCount += x;
				waiting = false;
			}, 2000);
		} else if (letterCount === words[wordIndex].length && waiting === false) {
			waiting = true;
			window.setTimeout(function () {
				x = -1;
				letterCount += x;
				waiting = false;
			}, 2000);
		} else if (waiting === false) {
			target.innerHTML = words[wordIndex].substring(0, letterCount);
			letterCount += x;
		}
	}, 180);

	return () => {
		clearInterval(interval);
	};
}
