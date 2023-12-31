import { useState } from "react";
import "../styles/navbar.css";

const navItems = [
	{
		name: "About",
		href: "#about",
	},
	{
		name: "Qualification",
		href: "#qualification",
	},
	{
		name: "Skills",
		href: "#skills",
	},
	{
		name: "Projects",
		href: "#projects",
	},
	{
		name: "Contact",
		href: "#contact",
	},
];

export const COLOR_THEME_LOCALSTORAGE_KEY = "color__theme";

const setColorStatus = (color) => {
	localStorage.setItem(COLOR_THEME_LOCALSTORAGE_KEY, color);
};

const getColorStatus = () => {
	return localStorage.getItem(COLOR_THEME_LOCALSTORAGE_KEY);
};

export default function Navbar() {
	const [colorTheme, setColorTheme] = useState(getColorStatus());

	console.log(colorTheme);

	const toggleDarkMode = () => {
		const newTheme = colorTheme === "dark" ? "light" : "dark";
		setColorTheme(newTheme);
		setColorStatus(newTheme);
		document.body.setAttribute("data-theme", newTheme);
	};

	const handleNavItemClick = () => {
		// Desmarca la checkbox si está marcada
		const checkbox = document.getElementById("check");
		if (checkbox.checked) {
			checkbox.checked = false;
		}
	};

	return (
		<header>
			<nav className="nav-container">
				{/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
				<a href="#landing" className="nav-logo" onClick={handleNavItemClick}>
					{"<"}Humber.dev{">"}
				</a>

				<input type="checkbox" id="check" />
				<label htmlFor="check" className="icon">
					<i className="fa-solid fa-bars" id="menu-icon" />
					<i className="fa-solid fa-x" id="close-icon" />
				</label>
				<div className="nav-menu">
					<ul className="menu-list">
						{navItems.map((navItem) => (
							// rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
							<li key={navItem.name} onClick={handleNavItemClick}>
								<a className="list-item" href={navItem.href}>
									{navItem.name}
								</a>
							</li>
						))}
						{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
						<li className="switch-button" onClick={toggleDarkMode}>
							<i
								id="buttonMode"
								className={
									colorTheme === "dark" ? "fa-solid fa-moon" : "fa-solid fa-sun"
								}
								style={{ color: "var(--text-color)" }}
							/>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}
