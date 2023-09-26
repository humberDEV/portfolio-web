import { useState } from "react";
import "../styles/navbar.css";

const navItems = [
	{
		name: "About",
		href: "#about",
	},
	{
		name: "Experience",
		href: "#experience",
	},
	{
		name: "Projects",
		href: "#projects",
	},
	{
		name: "Skills",
		href: "#skills",
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

	return (
		<header>
			<nav className="nav-container">
				<a href="#landing" className="nav-logo">
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
							<li key={navItem.name}>
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
							/>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}
