import About from "../components/about";
import Contact from "../components/contact";
import Experience from "../components/experience";
import Landing from "../components/landing";
import Navbar from "../components/navbar";
import Projects from "../components/projects";
import Skills from "../components/skills";

export function App() {
	return (
		<>
			<main>
				<Navbar />
				<Landing />
				<About />
				<Experience />
				<Skills />
				<Projects />
				<Contact />
			</main>
			<footer />
		</>
	);
}
